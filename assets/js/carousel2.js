let slideIndex2 = 0; // Commence à l'index 0

// Fonction pour déplacer le carrousel
function moveSlide2(step2) {
    const slides2 = document.querySelectorAll('.carousel2-item');
    slideIndex2 += step2;

    // Si on est à la fin, revenir au début
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0;
    }

    // Si on est au début, aller à la fin
    if (slideIndex2 < 0) {
        slideIndex2 = slides2.length - 1;
    }

    // Mettre à jour la position du carrousel
    document.querySelector('.carousel2').style.transform = `translateX(-${slideIndex2 * 100}%)`;
}

// Fonction pour naviguer directement à un persona spécifique (via la vignette)
function moveToSlide2(index2) {
    slideIndex2 = index2;
    document.querySelector('.carousel2').style.transform = `translateX(-${slideIndex2 * 100}%)`;
}