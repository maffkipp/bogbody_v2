const body = document.querySelector('body');


// animations for music player
const bandcamp = document.querySelector('iframe');
const originalBandcampTop = bandcamp.offsetTop;

function animateEmbeddedPlayer() {
    const bodyRect = body.getBoundingClientRect();
    const classes = bandcamp.classList;

    // swaps out animation classes depending on if the player is in viewport
    if (bodyRect.y + originalBandcampTop <= 100 && bodyRect.y + originalBandcampTop >= -500) {
        if (classes.contains('fadeInRight')) { classes.remove('fadeInRight') }
        classes.add('fadeOutRight');
    }
    else { if (classes.contains('fadeOutRight')) { classes.remove('fadeOutRight') }
        classes.add('fadeInRight');
    }
}

document.addEventListener('scroll', animateEmbeddedPlayer);