document.addEventListener("DOMContentLoaded", () => {
	// Sélectionner les éléments
	const chevron = document.getElementById("chevron");
	const pulseText = document.getElementById("pulse-text");

	// Ajouter l'animation en boucle
	setInterval(() => {
		// Ajouter la classe d'animation
		chevron.classList.add("bounce");
		pulseText.classList.add("bounce");

		// Retirer la classe d'animation après la durée définie
		setTimeout(() => {
			chevron.classList.remove("bounce");
			pulseText.classList.remove("bounce");
		}, 500); // 500ms correspond à la durée de l'animation en CSS
	}, 1500); // Répéter toutes les 1.5 secondes
});
