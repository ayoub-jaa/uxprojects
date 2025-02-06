document.addEventListener("DOMContentLoaded", () => {
	// Select elements
	const chevron = document.getElementById("chevron");
	const pulseText = document.getElementById("pulse-text");

	// Bounce effect for chevron
	setInterval(() => {
		chevron.classList.add("bounce");
		setTimeout(() => {
			chevron.classList.remove("bounce");
		}, 1000); // Match the transition time in CSS (0.3s)
	}, 1000); // Repeat every 1 second

	// Pulse effect for text
	setInterval(() => {
		pulseText.classList.add("pulse");
		setTimeout(() => {
			pulseText.classList.remove("pulse");
		}, 1000); // Match the transition time in CSS (0.3s)
	}, 1500); // Repeat every 1.5 seconds
});