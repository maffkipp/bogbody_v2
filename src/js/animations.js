(() => {
    const body = document.querySelector('body');


    // Function for adding and removing animation classes based on scroll position
    function animationInOut(element, animationIn, animationOut, boundingHeight) {
        const bodyRect = body.getBoundingClientRect();
        const classes = element.classList;

        // swaps out animation classes depending on if element is in view
        if (bodyRect.y + boundingHeight <= 200) {
            if (classes.contains(animationOut)) { classes.remove(animationOut) }
            classes.add(animationIn);
        }
        else { if (classes.contains(animationIn)) { classes.remove(animationIn) }
            classes.add(animationOut);
        }
    }


    // animations for music section
    (() => {
        const music = document.querySelector('#music');
        const bandcamp = document.querySelector('iframe');
        const musicText = document.querySelector('.music-text-container');
        const originalMusicTop = music.offsetTop;

        function animateEmbeddedPlayer() {
            animationInOut(bandcamp, 'fadeInRight', 'fadeOutRight', originalMusicTop);
        }

        function animateMusicText() {
            animationInOut(musicText, 'fadeInLeft', 'fadeOutLeft', originalMusicTop);
        }

        document.addEventListener('scroll', animateEmbeddedPlayer);
        document.addEventListener('scroll', animateMusicText);
    })();

    // animations for about section
    (() => {
        const about = document.querySelector('#about');
        const aboutText = document.querySelector('.about-text-container');
        const originalAboutTop = about.offsetTop;

        function animateAboutText() {
            animationInOut(aboutText, 'fadeInRight', 'fadeOutRight', originalAboutTop);
        }

        document.addEventListener('scroll', animateAboutText);
    })();

    // animations for youtube section
    (() => {
        const videos = document.querySelector('#videos');
        const youtubeContainer = document.querySelector('.youtube-container');
        const originalVideosTop = videos.offsetTop;

        function animateVideosText() {
            animationInOut(youtubeContainer, 'fadeInUp', 'fadeOutDown', originalVideosTop);
        }

        document.addEventListener('scroll', animateVideosText);
    })();

    // animations for schedule section
    (() => {
        const schedule = document.querySelector('#schedule');
        const scheduleContainer = document.querySelector('.schedule-text-container');
        const originalScheduleTop = schedule.offsetTop;

        function animateScheduleText() {
            animationInOut(scheduleContainer, 'fadeInUp', 'fadeOutDown', originalScheduleTop);
        }

        document.addEventListener('scroll', animateScheduleText);
    })();
})();