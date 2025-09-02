// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Current year
document.getElementById('year').innerHTML = new Date().getFullYear();

// Theme
const themeToggle = document.getElementById('theme-toggle'),
    mainElement = document.documentElement,
    savedTheme = localStorage.getItem('theme'),
    hoverTitle = document.querySelector('a#theme-toggle i[title="Theme"]');
function toggleIcon(isDark) {
    if(isDark) {
        hoverTitle.classList.remove('fa-moon');
        hoverTitle.classList.add('fa-sun');
    } else {
        hoverTitle.classList.remove('fa-sun');
        hoverTitle.classList.add('fa-moon');
    }
}
addEventListener("DOMContentLoaded", (event) => {
    if(savedTheme) {
        const isLight = savedTheme === 'light';
        mainElement.setAttribute('data-theme', savedTheme);
        toggleIcon(!isLight);
        hoverTitle.title = (isLight ? 'Dark mode' : 'Light mode');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        mainElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        toggleIcon(prefersDark);
    }
    themeToggle.addEventListener('click', () => {
        const theme = mainElement.getAttribute('data-theme'),
            newTheme = theme === 'light' ? 'dark' : 'light';
        mainElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleIcon(theme === 'light');
        hoverTitle.title = (theme.charAt(0).toUpperCase() + theme.slice(1)) + " mode";
    });
});