/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(6);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(14);

var _smoothScroll = __webpack_require__(4);

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// local js imports
var scroll = new _smoothScroll2.default('a[href*="#"]', {
    speed: 700,
    easing: 'easeInOutCubic'
});

// smooth scroll implementation

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    // element selectors
    var body = document.querySelector('body');
    var header = document.querySelector('header');
    var navbar = document.querySelector('.navbar-container');

    // getting initial values for element positions
    var originalNavbarTop = navbar.offsetTop;
    var headerBottom = header.getBoundingClientRect().bottom - body.getBoundingClientRect().y;

    // fixes navbar after title, adds background shadow after header
    function grabNavbar() {
        var navbarRect = navbar.getBoundingClientRect();
        var bodyRect = body.getBoundingClientRect();

        bodyRect.y + originalNavbarTop <= 0 ? navbar.classList.add('fixed') : navbar.classList.remove('fixed');

        headerBottom + bodyRect.y <= 0 ? navbar.classList.add('nav-shadow') : navbar.classList.remove('nav-shadow');
    }

    // event listeners
    document.addEventListener('scroll', grabNavbar);
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var body = document.querySelector('body');

    // Function for adding and removing animation classes based on scroll position
    function animationInOut(element, animationIn, animationOut, boundingHeight) {
        var bodyRect = body.getBoundingClientRect();
        var classes = element.classList;

        // swaps out animation classes depending on if element is in view
        if (bodyRect.y + boundingHeight <= 200) {
            if (classes.contains(animationOut)) {
                classes.remove(animationOut);
            }
            classes.add(animationIn);
        } else {
            if (classes.contains(animationIn)) {
                classes.remove(animationIn);
            }
            classes.add(animationOut);
        }
    }

    // animations for music section
    (function () {
        var music = document.querySelector('#music');
        var bandcamp = document.querySelector('iframe');
        var musicText = document.querySelector('.music-text-container');
        var originalMusicTop = music.offsetTop;

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
    (function () {
        var about = document.querySelector('#about');
        var aboutText = document.querySelector('.about-text-container');
        var originalAboutTop = about.offsetTop;

        function animateAboutText() {
            animationInOut(aboutText, 'fadeInRight', 'fadeOutRight', originalAboutTop);
        }

        document.addEventListener('scroll', animateAboutText);
    })();

    // animations for youtube section
    (function () {
        var videos = document.querySelector('#videos');
        var youtubeContainer = document.querySelector('.youtube-container');
        var originalVideosTop = videos.offsetTop;

        function animateVideosText() {
            animationInOut(youtubeContainer, 'fadeInUp', 'fadeOutDown', originalVideosTop);
        }

        document.addEventListener('scroll', animateVideosText);
    })();

    // animations for schedule section
    (function () {
        var schedule = document.querySelector('#schedule');
        var scheduleContainer = document.querySelector('.schedule-text-container');
        var originalScheduleTop = schedule.offsetTop;

        function animateScheduleText() {
            animationInOut(scheduleContainer, 'fadeInUp', 'fadeOutDown', originalScheduleTop);
        }

        document.addEventListener('scroll', animateScheduleText);
    })();
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t(e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(o)}return e},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},i=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},s=function(e){return e?a(e)+e.offsetTop:0},l=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},f=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(a,d){var m,h,g,p,v,b,y,S={};S.cancelScroll=function(){cancelAnimationFrame(y)},S.animateScroll=function(t,a,r){var f=o(m||n,r||{}),d="[object Number]"===Object.prototype.toString.call(t),h=d||!t.tagName?null:t;if(d||h){var g=e.pageYOffset;f.header&&!p&&(p=document.querySelector(f.header)),v||(v=s(p));var b,y,E,I=d?t:c(h,v,parseInt("function"==typeof f.offset?f.offset():f.offset,10)),O=I-g,A=u(),C=0,w=function(n,o){var r=e.pageYOffset;if(n==o||r==o||(g<o&&e.innerHeight+r)>=A)return S.cancelScroll(),l(t,o,d),f.after(t,a),b=null,!0},Q=function(t){b||(b=t),C+=t-b,y=C/parseInt(f.speed,10),y=y>1?1:y,E=g+O*i(f,y),e.scrollTo(0,Math.floor(E)),w(E,I)||(e.requestAnimationFrame(Q),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),f.before(t,a),S.cancelScroll(),e.requestAnimationFrame(Q)}};var E=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),S.animateScroll(h,g),h=null,g=null)},I=function(t){if(!f()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(a))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=r(decodeURIComponent(g.hash))}catch(e){n=r(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?E():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),E()))}},O=function(e){b||(b=setTimeout((function(){b=null,v=s(p)}),66))};return S.destroy=function(){m&&(document.removeEventListener("click",I,!1),e.removeEventListener("resize",O,!1),S.cancelScroll(),m=null,h=null,g=null,p=null,v=null,b=null,y=null)},S.init=function(a){t&&(S.destroy(),m=o(n,a||{}),p=m.header?document.querySelector(m.header):null,v=s(p),document.addEventListener("click",I,!1),e.addEventListener("hashchange",E,!1),p&&e.addEventListener("resize",O,!1))},S.init(d),S}}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var bandcamp = document.querySelector('.bandcamp-embed');

    // checks if url matches and changes src attribute if not
    function changeSrcAttribute(url, target) {
        if (target.getAttribute('src') !== url) {
            target.setAttribute('src', url);
        }
    }

    // calls changeSrcAttribute for various screen widths to change bandcamp player type
    function setBandcampType() {
        if (window.innerWidth <= 600 || window.innerHeight <= 600) {
            changeSrcAttribute('https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/', bandcamp);
        } else if (window.innerWidth <= 800 || window.innerHeight <= 800) {
            changeSrcAttribute('https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/', bandcamp);
        } else {
            changeSrcAttribute('https://bandcamp.com/EmbeddedPlayer/album=1684609420/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/', bandcamp);
        }
    }

    // calls function on resize and page load
    window.addEventListener('resize', setBandcampType);
    window.addEventListener('DOMContentLoaded', setBandcampType);
})();

/***/ })
/******/ ]);