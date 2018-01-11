(() => {
    const bandcamp = document.querySelector('.bandcamp-embed');

    // checks if url matches and changes src attribute if not
    function changeSrcAttribute(url, target) {
        if (target.getAttribute('src') !== url) {
            target.setAttribute('src', url);
        }
    }

    // calls changeSrcAttribute for various screen widths to change bandcamp player type
    function setBandcampType() {
        if (window.innerWidth <= 600) {
            changeSrcAttribute('https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/', bandcamp);
        } else if (window.innerWidth <= 800) {
            changeSrcAttribute('https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/', bandcamp);
        } else {
            changeSrcAttribute('https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/', bandcamp);
        }
    }

    // calls function on resize and page load
    window.addEventListener('resize', setBandcampType);
    window.onload(setBandcampType());
})();

