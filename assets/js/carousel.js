// JavaScript pour le carrousel
document.querySelector('.carousel').addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        this.scrollLeft += 300;  // Scroll to the right
    } else {
        this.scrollLeft -= 300;  // Scroll to the left
    }
});
