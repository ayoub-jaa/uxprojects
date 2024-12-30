let slideIndex = 0; // Commence à l'index 0

// Fonction pour déplacer le carrousel
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    slideIndex += step;

    // Si on est à la fin, revenir au début
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Si on est au début, aller à la fin
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Mettre à jour la position du carrousel
    document.querySelector('.carousel').style.transform = translateX(-${slideIndex * 100}%);
}

// Fonction pour naviguer directement à un persona spécifique (via la vignette)
function moveToSlide(index) {
    slideIndex = index;
    document.querySelector('.carousel').style.transform = translateX(-${slideIndex * 100}%);
}