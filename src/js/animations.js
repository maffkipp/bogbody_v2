const body = document.querySelector('body');

// Function for adding and removing animation classes based on scroll position
function animationInOut(element, animationIn, animationOut, boundingHeight) {
    const bodyRect = body.getBoundingClientRect();
    const classes = element.classList;

    // swaps out animation classes depending on if element is in view
    if ((bodyRect.y + boundingHeight <= 100 && 
        bodyRect.y + boundingHeight >= -500) || 
        bodyRect.y >= -200 ) {
        if (classes.contains(animationIn)) { classes.remove(animationIn) }
        classes.add(animationOut);
    }
    else { if (classes.contains(animationOut)) { classes.remove(animationOut) }
        classes.add(animationIn);
    }
}

// animations for music player
const bandcamp = document.querySelector('iframe');
const musicText = document.querySelector('.music-text-container');
const originalBandcampTop = bandcamp.offsetTop;

function animateEmbeddedPlayer() {
    animationInOut(bandcamp, 'fadeInRight', 'fadeOutRight', originalBandcampTop);
}

function animateMusicText() {
    animationInOut(musicText, 'fadeInLeft', 'fadeOutLeft', originalBandcampTop);
}

document.addEventListener('scroll', animateEmbeddedPlayer);
document.addEventListener('scroll', animateMusicText);