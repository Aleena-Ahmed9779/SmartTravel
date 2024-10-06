// JavaScript for synchronizing effects with slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const slideInterval = 3000; // Time in milliseconds for each slide

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === index) ? '1' : '0';
            if (i === index) {
                const overlay = slide.querySelector('.overlay');
                // Reset animations
                overlay.querySelectorAll('.fade-in').forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; // Trigger a reflow
                    el.style.animation = '';
                });
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, slideInterval);
});
