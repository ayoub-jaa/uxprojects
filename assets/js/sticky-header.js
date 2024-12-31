// Variables
const stickyHeader = document.getElementById('sticky-header');
const burgerButton = document.getElementById('burger-button');
const menuOverlay = document.getElementById('menu-overlay');
let lastScrollY = window.scrollY;

// Gérer l'affichage du sticky header
window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY && window.scrollY > 100) {
        stickyHeader.classList.remove('hidden');
		stickyHeader.classList.add('visible');
    } else {
        stickyHeader.classList.remove('visible');
		stickyHeader.classList.add('hidden');
    }
    lastScrollY = window.scrollY;
});

// Gérer le menu burger
burgerButton.addEventListener('click', () => {
    const isActive = menuOverlay.classList.toggle('visible');
    burgerButton.innerHTML = isActive ? '✕' : '&#9776;';
});

