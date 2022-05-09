function imc(){
    var peso = nPeso.value;
    var altura = nAltura.value;
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    console.log(peso);
    console.log(altura);

    calculo = peso / (altura * altura);
    return calculo;
}

// function classificação(){
//     resultado = imc(peso, altura);
//     if (resultado < 19.9){
//         alert('muito abaixo do peso');
//     } else if (resultado <= 18.4){
//         alert('abaixo do peso');
//     } else if (resultado <= 24.9){
//         alert('peso normal');
//     } else if (resultado <= 29.9){
//         alert('acima do peso');
//     } else if (resultado <= 34.9){
//         alert('obesidade grau I');
//     } else if (resultado <= 40){
//         alert('obesidade grau II');
//     } else if (resultado > 40){
//         alert('obesidade grau III');
//     }
// }

function classificacao(){
    resultado = imc(peso, altura);
    if (resultado < 19.9){
        msg = ('muito abaixo do peso');
    } else if (resultado <= 18.4){
        msg = ('abaixo do peso');
    } else if (resultado <= 24.9){
        msg = ('peso normal');
    } else if (resultado <= 29.9){
        msg = ('acima do peso');
    } else if (resultado <= 34.9){
        msg = ('obesidade grau I');
    } else if (resultado <= 40){
        msg = ('obesidade grau II');
    } else if (resultado > 40){
        msg = ('obesidade grau III');
    }
    return msg;
}

function mostrarTela(){
    msg = classificacao();
    document.querySelector('#output').innerHTML = '<center> <b>' + msg + '</center>';
}

const nPeso = document.querySelector('#peso');
const nAltura = document.querySelector('#altura');

console.log(nPeso);
console.log(nAltura);



// var peso = prompt("Digite seu peso");
// peso = parseFloat(peso);
// var altura = prompt("Digite sua altura");
// altura = parseFloat(altura);
