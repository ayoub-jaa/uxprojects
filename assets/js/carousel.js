document.addEventListener('DOMContentLoaded', function () {
    // Carrousel principal (Premier)
    let slideIndexMain = 0; // Indice pour le premier carrousel

    function moveSlideMain(step) {
        const slides = document.querySelectorAll('.carousel-item');
        slideIndexMain += step;

        if (slideIndexMain >= slides.length) {
            slideIndexMain = 0;
        }

        if (slideIndexMain < 0) {
            slideIndexMain = slides.length - 1;
        }

        document.querySelector('.carousel').style.transform = `translateX(-${slideIndexMain * 100}%)`;
    }

    function moveToSlideMain(index) {
        slideIndexMain = index;
        document.querySelector('.carousel').style.transform = `translateX(-${slideIndexMain * 100}%)`;
    }

    // Carrousel secondaire (Deuxième)
    let slideIndexSecondary = 0; // Indice pour le deuxième carrousel

    function moveSlideSecondary(step) {
        const slides = document.querySelectorAll('.new-carousel-item');
        slideIndexSecondary += step;

        if (slideIndexSecondary >= slides.length) {
            slideIndexSecondary = 0;
        }

        if (slideIndexSecondary < 0) {
            slideIndexSecondary = slides.length - 1;
        }

        document.querySelector('.new-carousel').style.transform = `translateX(-${slideIndexSecondary * 100}%)`;
    }

    function moveToSlideSecondaryDirect(index) {
        slideIndexSecondary = index;
        document.querySelector('.new-carousel').style.transform = `translateX(-${slideIndexSecondary * 100}%)`;
    }
});
