document.addEventListener('DOMContentLoaded', function () {
    // Typed.js Animation
    if (document.querySelector('.typed-text')) {
        const typed = new Typed('.typed-text', {
            strings: ["Full Stack Developer", "Python Developer", "Problem Solver"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });
    }
});