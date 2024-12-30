// Carrousel principal (Premier)
let slideIndexMain = 0; // Indice pour le premier carrousel

function moveSlideMain(step) {
    const slides = document.querySelectorAll('.carousel-item');
    slideIndexMain += step;

    // Si on est à la fin, revenir au début
    if (slideIndexMain >= slides.length) {
        slideIndexMain = 0;
    }

    // Si on est au début, aller à la fin
    if (slideIndexMain < 0) {
        slideIndexMain = slides.length - 1;
    }

    // Mettre à jour la position du carrousel
    document.querySelector('.carousel').style.transform = `translateX(-${slideIndexMain * 100}%)`;
}

// Fonction pour naviguer directement à un élément du premier carrousel via la vignette
function moveToSlideMain(index) {
    slideIndexMain = index;
    document.querySelector('.carousel').style.transform = `translateX(-${slideIndexMain * 100}%)`;
}


// Carrousel secondaire (Deuxième)
let slideIndexSecondary = 0; // Indice pour le deuxième carrousel

function moveSlideSecondary(step) {
    const slides = document.querySelectorAll('.new-carousel-item');
    slideIndexSecondary += step;

    // Si on est à la fin, revenir au début
    if (slideIndexSecondary >= slides.length) {
        slideIndexSecondary = 0;
    }

    // Si on est au début, aller à la fin
    if (slideIndexSecondary < 0) {
        slideIndexSecondary = slides.length - 1;
    }

    // Mettre à jour la position du carrousel secondaire
    document.querySelector('.new-carousel').style.transform = `translateX(-${slideIndexSecondary * 100}%)`;
}

// Fonction pour naviguer directement à un élément du deuxième carrousel via la vignette
function moveToSlideSecondary(index) {
    slideIndexSecondary = index;
    document.querySelector('.new-carousel').style.transform = `translateX(-${slideIndexSecondary * 100}%)`;
}
