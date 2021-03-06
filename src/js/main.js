// local js imports
import './navScroll.js';
import './animations.js';
import './mediaQueries.js';

// smooth scroll implementation
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 700,
    easing: 'easeInOutCubic'
});
