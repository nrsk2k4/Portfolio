// document.addEventListener("DOMContentLoaded", () => {
//     const themeToggle = document.getElementById("theme-toggle");
//     const body = document.body;
//     const menuIcon = document.getElementById("menu-icon");
//     const mobileMenu = document.getElementById("mobile-menu");

//     // Load saved theme
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//         body.classList.add(savedTheme);
//         themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
//     }

//     // Toggle theme
//     themeToggle.addEventListener("click", () => {
//         body.classList.toggle("dark");
//         body.classList.toggle("light");

//         const currentTheme = body.classList.contains("dark") ? "dark" : "light";
//         localStorage.setItem("theme", currentTheme);
//         themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
//     });

//     // Mobile Menu Toggle
//     menuIcon.addEventListener("click", () => {
//         mobileMenu.classList.toggle("show");
//     });

//     // Smooth Scrolling for Navigation
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");

        const currentTheme = body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    });

    // Scroll Animation for About Section
    const aboutSection = document.querySelector(".about");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

