// Variables pour gérer le scroll et la barre sticky
let lastScrollY = window.scrollY;
const stickyHeader = document.getElementById('sticky-header');

// Affichage conditionnel de la barre sticky
window.addEventListener('scroll', () => {
    if (window.scrollY > 50 && window.scrollY < lastScrollY) {
        // Si on scroll vers le haut et qu'on dépasse une hauteur (50px par ex.)
        stickyHeader.classList.add('visible');
        stickyHeader.classList.remove('hidden');
    } else if (window.scrollY > 50) {
        // Si on scroll vers le bas
        stickyHeader.classList.add('hidden');
        stickyHeader.classList.remove('visible');
    }
    lastScrollY = window.scrollY;
});

// Gérer le menu burger
const burgerButton = document.getElementById('burger-button');
const menuLinks = document.getElementById('menu-links');

burgerButton.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});
