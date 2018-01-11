(() => {
    const bandcamp = document.querySelector('.bandcamp-embed');

    function setBandcampType() {
        if (window.innerWidth <= 800) {
            if (bandcamp.getAttribute('src') !== 'https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/') {
                bandcamp.setAttribute('src', 'https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/');
            }
        } else {
            if (bandcamp.getAttribute('src') !== 'https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/') {
                bandcamp.setAttribute('src', 'https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/');
            }
        }
    }

    window.addEventListener('resize', setBandcampType);
    window.onload(setBandcampType());
})();