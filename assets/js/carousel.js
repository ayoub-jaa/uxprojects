document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du carrousel principal (Premier)
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

    // Activation de Slick pour le carrousel principal
    $('.carousel').slick({
        slidesToShow: 1, // Un slide visible à la fois
        slidesToScroll: 1, // Scroll un élément à la fois
        arrows: true, // Activer les flèches
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        infinite: true, // Boucle infinie
        dots: true, // Points de navigation sous le carrousel
        autoplay: true, // Auto-défilement
        autoplaySpeed: 3000, // Temps d'attente entre chaque défilement
    });

    // Activation de Slick pour le carrousel secondaire
    $('.new-carousel').slick({
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        infinite: true, 
        dots: true, 
        autoplay: true, 
        autoplaySpeed: 3000,
    });
});
