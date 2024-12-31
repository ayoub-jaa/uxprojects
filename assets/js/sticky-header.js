// Variables pour gérer le scroll et la barre sticky
let lastScrollY = window.scrollY;
const stickyHeader = document.getElementById('sticky-header');

// Affichage conditionnel de la barre sticky
window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {
        // Si on scroll vers le haut
        stickyHeader.style.display = 'block';
    } else {
        // Si on scroll vers le bas
        stickyHeader.style.display = 'none';
    }
    lastScrollY = window.scrollY;
});

// Gérer le menu burger
const burgerButton = document.getElementById('burger-button');
const menuLinks = document.getElementById('menu-links');

burgerButton.addEventListener('click', () => {
    const isVisible = menuLinks.style.display === 'flex';
    menuLinks.style.display = isVisible ? 'none' : 'flex';
});
