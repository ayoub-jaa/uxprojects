document.addEventListener("DOMContentLoaded", () => {
	// Fonction pour gérer la page index.html
	function handleIndexPage() {
		// Sélectionner les éléments
		const chevron = document.getElementById("chevron");
		const pulseText = document.getElementById("pulse-text");

		// Ajouter l'animation de rebond
		setInterval(() => {
			chevron.classList.add("bounce");
			pulseText.classList.add("bounce");

			// Retirer les classes après 500ms (durée de l'animation)
			setTimeout(() => {
				chevron.classList.remove("bounce");
				pulseText.classList.remove("bounce");
			}, 500);
		}, 1500); // Répéter toutes les 1.5 secondes
	}

	// Fonction pour gérer la page des logos (Professional Projects)
	function handleLogosPage() {
		// Sélectionner les logos
		const geodisLogo = document.querySelector(".logos a:nth-child(1) img");
		const boursoramaLogo = document.querySelector(".logos a:nth-child(2) img");

		// Vérifier que les logos existent
		if (!geodisLogo || !boursoramaLogo) return;

		// Fonction pour alterner les animations
		function triggerBounce() {
			// Animation pour le logo GEODIS
			geodisLogo.classList.add("bounce");
			setTimeout(() => {
				geodisLogo.classList.remove("bounce");

				// Animation pour le logo BoursoBank
				boursoramaLogo.classList.add("bounce");
				setTimeout(() => {
					boursoramaLogo.classList.remove("bounce");
				}, 1000); // Durée de l'animation pour BoursoBank
			}, 1000); // Durée de l'animation pour GEODIS
		}

		// Répéter l'animation toutes les 2 secondes
		setInterval(triggerBounce, 2000);
	}

	// Détection de la page active
	if (document.body.id === "index-page") {
		handleIndexPage();
	} else if (document.body.id === "professional-page") {
		handleLogosPage();
	}
});
