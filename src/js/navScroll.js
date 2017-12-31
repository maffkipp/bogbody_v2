// element selectors
const body = document.querySelector('body');
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar-container');

// getting initial values for element positions
const originalNavbarTop = navbar.offsetTop;
const headerBottom = 
    header.getBoundingClientRect().bottom - body.getBoundingClientRect().y;

// fixes navbar after title, adds background shadow after header
function grabNavbar() {
    const navbarRect = navbar.getBoundingClientRect();
    const bodyRect = body.getBoundingClientRect();

    (bodyRect.y + originalNavbarTop <= 0) ? 
        navbar.classList.add('fixed') : navbar.classList.remove('fixed');

    (headerBottom + bodyRect.y <= 0) ?
        navbar.classList.add('nav-shadow') : navbar.classList.remove('nav-shadow');
}

// event listeners
document.addEventListener('scroll', grabNavbar);
