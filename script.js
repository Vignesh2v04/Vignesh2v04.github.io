document.addEventListener('DOMContentLoaded', function () {
    // Typed.js Animation for the hero section
    if (document.querySelector('.typed-text')) {
        const typed = new Typed('.typed-text', {
            strings: ["Full Stack Developer", "Python Developer", "Problem Solver"],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 2000,
            loop: true
        });
    }
});