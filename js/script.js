document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    let isDragging = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        carousel.classList.add('dragging');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.classList.remove('dragging');
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.classList.remove('dragging');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust the multiplier for sensitivity
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Auto-scroll functionality
    let isHovered = false;

    carousel.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    carousel.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    function autoScroll() {
        if (!isHovered) {
            carousel.scrollLeft += 1; // Adjust the speed of scrolling
        }
        requestAnimationFrame(autoScroll);
    }

    autoScroll();
});
