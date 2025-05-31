document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 320}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});
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
