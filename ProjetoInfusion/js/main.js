(function (){
    const $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    const menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1025
    })

    const carouselImgs = new Carousel ({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    const carouselQuotes = new Carousel ({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()