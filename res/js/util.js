// Theme
const themeToggle = document.getElementById('theme-toggle'),
    mainElement = document.documentElement,
    savedTheme = localStorage.getItem('theme'),
    hoverTitle = document.querySelector('a#theme-toggle i[title="Theme"]'),
    projectClick = document.getElementsByClassName('project-click');

function toggleIcon(isDark) {
    if(isDark) {
        hoverTitle.classList.add('fa-sun');
        hoverTitle.classList.remove('fa-moon');
    } else {
        hoverTitle.classList.add('fa-moon');
        hoverTitle.classList.remove('fa-sun');
    }
}

function setTheme(theme) {
    mainElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Copied ' + text + ' to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

if(savedTheme) {
    const isLight = savedTheme === 'light';
    setTheme(savedTheme);
    toggleIcon(!isLight);
    hoverTitle.title = (isLight ? 'Dark mode' : 'Light mode');
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
    toggleIcon(prefersDark);
    hoverTitle.title = (!prefersDark ? 'Dark' : 'Light') + " mode";
}

themeToggle.addEventListener('click', () => {
    const theme = mainElement.getAttribute('data-theme'),
        newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    toggleIcon(theme === 'light');
    hoverTitle.title = (theme.charAt(0).toUpperCase() + theme.slice(1)) + " mode";
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Copy to clipboard
Array.from(projectClick).forEach(element => {
    element.addEventListener('click', function(event) {
        copyTextToClipboard("play.wiyt.space");
    });
});

// Current year
document.getElementById('year').innerHTML = new Date().getFullYear();