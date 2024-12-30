document.addEventListener('DOMContentLoaded', function () {
    let slideIndexMain = 0;

    function moveSlideMain(step) {
        const slides = document.querySelectorAll('.carousel-item');
        slideIndexMain += step;

        if (slideIndexMain >= slides.length) {
            slideIndexMain = 0;
        }
        if (slideIndexMain < 0) {
            slideIndexMain = slides.length - 1;
        }

        // Assure-toi que la transition est appliquée correctement
        document.querySelector('.carousel').style.transition = 'transform 0.5s ease-in-out';
        document.querySelector('.carousel').style.transform = `translateX(-${slideIndexMain * 100}%)`;
    }

    // Carrousel secondaire
    let slideIndexSecondary = 0;

    function moveSlideSecondary(step) {
        const slides = document.querySelectorAll('.new-carousel-item');
        slideIndexSecondary += step;

        if (slideIndexSecondary >= slides.length) {
            slideIndexSecondary = 0;
        }
        if (slideIndexSecondary < 0) {
            slideIndexSecondary = slides.length - 1;
        }

        document.querySelector('.new-carousel').style.transition = 'transform 0.5s ease-in-out';
        document.querySelector('.new-carousel').style.transform = `translateX(-${slideIndexSecondary * 100}%)`;
    }
});
