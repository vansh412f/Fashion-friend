document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to start the animation
                entry.target.classList.add('visible');
                // Stop observing the element once it's been animated
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); // Trigger when at least 30% of the element is visible

    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        observer.observe(feature); // Start observing each feature
    });
});
