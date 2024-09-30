window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.crazy-navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.7)';
    }
});

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.transform === 'translateX(0%)') {
        navLinks.style.transform = 'translateX(100%)';
    } else {
        navLinks.style.transform = 'translateX(0%)';
    }
}

const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'rotate(360deg) scale(1.2)';
    logo.style.transition = 'transform 1s ease-in-out';
});

logo.addEventListener('mouseout', () => {
    logo.style.transform = 'rotate(0deg) scale(1)';
    logo.style.transition = 'transform 1s ease-in-out';
});
