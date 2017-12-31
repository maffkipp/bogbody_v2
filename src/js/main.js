// element selectors
const body = document.querySelector('body');
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar-container');

// getting initial values for element positions
const originalNavbarTop = navbar.offsetTop;
const headerBottom = header.getBoundingClientRect().bottom;

function grabNavbar() {
    // recalculate distance from top of viewport on scroll
    const navbarRect = navbar.getBoundingClientRect();
    const bodyRect = body.getBoundingClientRect();
    // grabs navbar at top
    (bodyRect.y + originalNavbarTop <= 0) ? 
        navbar.classList.add('fixed') : navbar.classList.remove('fixed');
    // adds navbar background after header
    (headerBottom + bodyRect.y <= 0) ?
        navbar.classList.add('nav-shadow') : navbar.classList.remove('nav-shadow');
}

// event listeners
document.addEventListener('scroll', grabNavbar);