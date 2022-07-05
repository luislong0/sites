const $background = document.querySelector('.background');
const $btn = document.querySelectorAll('.btn');
const $input = document.querySelector('#pokemonInputName');
console.log($input)
const $visor = document.querySelector('.pokedexVisor');
const $pokemons = document.querySelector('.pokedex');


const $switchTheme = document.querySelector('.switchLabel');

console.log($switchTheme)

let themeController = false;

$switchTheme.addEventListener('click', (e) => {
    if (themeController) {
        $background.classList.remove('active');
        $btn.forEach(el => el.classList.remove('btn-active'));
        $input.classList.remove('input-active');
        $visor.classList.remove('visor-active');
        $pokemons.classList.remove('pokemons-active');
        themeController = false;
    } else {
        $background.classList.add('active');
        $btn.forEach(el => el.classList.add('btn-active'));
        $input.classList.add('input-active');
        $visor.classList.add('visor-active');
        $pokemons.classList.add('pokemons-active');
        themeController = true;
    }

})
//

const $shinyButton = document.querySelector('.shinyButton')
let pokemonPhotosUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

let shinyController = true;

function shinyControllButton(value) {
    if (shinyController === true) {
        console.log('Shiny Button Clicked');
        pokemonPhotosUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny'
        console.log(pokemonPhotosUrl);
        const pokemonPromisesInput = generatePokemonPromises(value)
        Promise.all(pokemonPromisesInput)
            .then(generateHTML)
            .then(insertPokemonsIntoPage);
        shinyController = false;
    } else {
        pokemonPhotosUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
        const pokemonPromisesInput = generatePokemonPromises(value)
        Promise.all(pokemonPromisesInput)
            .then(generateHTML)
            .then(insertPokemonsIntoPage);
        shinyController = true;
    }
}


$shinyButton.addEventListener('click', (e) => {
    shinyControllButton(150);
})




function pokemonInputOne() {
    const pokemonPromisesInput = generatePokemonPromises(1)
    Promise.all(pokemonPromisesInput)
        .then(generateHTML)
        .then(insertPokemonsIntoPage);
}

let getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const $inputPokemon = document.querySelector('#pokemonInputName');

function pokemonSearch() {
    let inputValue = $inputPokemon.value;
    inputValue = inputValue.toLowerCase();
        // console.log(inputValue);
        if (inputValue !== "") {
            getPokemonUrl = value => `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
            $shinyButton.disabled = true;
            pokemonInputOne();
        }
}

const salve = $inputPokemon.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        pokemonSearch();
    }
});

const $inputPokeButton = document.querySelector('.submit');
$inputPokeButton.addEventListener('click', (e) => {
    pokemonSearch();
})


//

const $clearBtn = document.querySelector('.clearSrc');
$clearBtn.addEventListener('click', (e) => {
    getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
    $shinyButton.disabled = false;
    fetchPokemon();
});


const generatePokemonPromises = (number) => Array(number).fill().map((_, index) => fetch(getPokemonUrl(index + 1)).then((response) => response.json()))
console.log(generatePokemonPromises().length);

let generateHTML = pokemons => {
    return pokemons.reduce((acumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)

        acumulator += `
        <li class="card ${types[0]}">
        <img class="card-image" alt="${pokemon.name}" src="${pokemonPhotosUrl}/${pokemon.id}.png" />
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">${types.join(" | ")}</p>
        </li>
        `;
        return acumulator;
    }, '')
}


const insertPokemonsIntoPage = pokemons => {
    const $ul = document.querySelector('[data-js="pokedex"]');

    $ul.innerHTML = pokemons;
}

const fetchPokemon = () => {
    const pokemonPromises = generatePokemonPromises(150)
    Promise.all(pokemonPromises)
        .then(generateHTML)
        .then(insertPokemonsIntoPage);
}


fetchPokemon();