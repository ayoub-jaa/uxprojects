// Variables
const stickyHeader = document.getElementById('sticky-header');
const burgerButton = document.getElementById('burger-button');
const menuOverlay = document.getElementById('menu-overlay');
let lastScrollY = window.scrollY;
let inactivityTimeout = null; // Pour gérer l'inactivité
const INACTIVITY_DELAY = 3000; // 3 secondes

// Vérifier si on est sur une page projet
const isProjectPage = document.body.classList.contains('project-page');
let fixedNav = null;

// Initialiser les variables spécifiques aux pages projets
if (isProjectPage) {
    fixedNav = document.querySelector('.fixed-nav');
}

// Fonction pour afficher la sticky header
const showStickyHeader = () => {
    stickyHeader.classList.remove('hidden');
    stickyHeader.classList.add('visible');
    if (isProjectPage && fixedNav) {
        fixedNav.style.top = '75px'; // Ajuster en fonction de la hauteur de stickyHeader
    }
};

// Fonction pour cacher la sticky header
const hideStickyHeader = () => {
    stickyHeader.classList.remove('visible');
    stickyHeader.classList.add('hidden');
    if (isProjectPage && fixedNav) {
        fixedNav.style.top = '0'; // Replace fixedNav à son emplacement d'origine
    }
};

// Gérer l'affichage du sticky header lors du scroll
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        showStickyHeader(); // Faire apparaître la sticky en haut de la page
    } else if (window.scrollY < lastScrollY && window.scrollY > 100) {
        showStickyHeader();
    } else {
        hideStickyHeader();
    }
    lastScrollY = window.scrollY;

    // Réinitialiser le délai d'inactivité au scroll
    resetInactivityTimeout();
});

// Gérer l'affichage du sticky header en cas d'inactivité
const resetInactivityTimeout = () => {
    if (inactivityTimeout) clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
        showStickyHeader(); // Afficher la sticky en cas d'inactivité
    }, INACTIVITY_DELAY);
};

// Détecter les mouvements de la souris ou les clics pour réinitialiser le délai d'inactivité
['mousemove', 'click', 'keydown', 'touchstart'].forEach(eventType => {
    window.addEventListener(eventType, resetInactivityTimeout);
});

// Gérer le menu burger
burgerButton.addEventListener('click', () => {
    const isActive = menuOverlay.classList.toggle('visible');
    burgerButton.innerHTML = isActive ? '✕' : '&#9776;'; // Change l'icône en 'X' si le menu est actif
});

// Initialiser le délai d'inactivité au chargement de la page
resetInactivityTimeout();


