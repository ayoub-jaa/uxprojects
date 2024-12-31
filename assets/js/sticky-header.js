// Variables
const stickyHeader = document.getElementById('sticky-header');
const burgerButton = document.getElementById('burger-button');
const menuOverlay = document.getElementById('menu-overlay');
let lastScrollY = window.scrollY;

// Vérifier si on est sur une page projet
const isProjectPage = document.body.classList.contains('project-page');
let fixedNav = null;

// Initialiser les variables spécifiques aux pages projets
if (isProjectPage) {
    fixedNav = document.querySelector('.fixed-nav');
}

// Gérer l'affichage du sticky header
window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY && window.scrollY > 100) {
        stickyHeader.classList.remove('hidden');
        stickyHeader.classList.add('visible');
        
        if (isProjectPage && fixedNav) {
            fixedNav.style.top = '60px'; // Ajuster en fonction de la hauteur de stickyHeader
        }
    } else {
        stickyHeader.classList.remove('visible');
        stickyHeader.classList.add('hidden');
        
        if (isProjectPage && fixedNav) {
            fixedNav.style.top = '0'; // Replace fixedNav à son emplacement d'origine
        }
    }
    lastScrollY = window.scrollY;
});

// Gérer le menu burger
burgerButton.addEventListener('click', () => {
    const isActive = menuOverlay.classList.toggle('visible');
    burgerButton.innerHTML = isActive ? '✕' : '&#9776;'; // Change l'icône en 'X' si le menu est actif
});

