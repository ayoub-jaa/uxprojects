let slideIndex2 = 0; // Commence à l'index 0

// Fonction pour déplacer le carrousel
function moveSlide2(step) {
    const slides = document.querySelectorAll('.carousel2-item');
    slideIndex2 += step;

    // Si on est à la fin, revenir au début
    if (slideIndex2 >= slides.length) {
        slideIndex2 = 0;
    }

    // Si on est au début, aller à la fin
    if (slideIndex2 < 0) {
        slideIndex2 = slides.length - 1;
    }

    console.log(`Moving to slide: ${slideIndex2}`);

    // Mettre à jour la position du carrousel
    const carousel = document.querySelector('.carousel2');
    carousel.style.transform = `translateX(-${slideIndex2 * 100}%)`;
    carousel.style.transition = 'transform 0.5s ease-in-out';  // Ajout de la transition si ce n'était pas présent
}

// Fonction pour naviguer directement à un persona spécifique (via la vignette)
function moveToSlide2(index) {
    slideIndex2 = index;
    console.log(`Jumping to slide: ${slideIndex2}`);
    
    const carousel = document.querySelector('.carousel2');
    carousel.style.transform = `translateX(-${slideIndex2 * 100}%)`;
    carousel.style.transition = 'transform 0.5s ease-in-out';  // Ajout de la transition si ce n'était pas présent
}
