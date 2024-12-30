document.addEventListener('DOMContentLoaded', function () {
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
