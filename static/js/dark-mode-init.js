!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("darkmode-js",[],t):"object"==typeof exports?exports["darkmode-js"]=t():e["darkmode-js"]=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(1));var r=o.default;t.default=r,o.IS_BROWSER&&function(e){e.Darkmode=o.default}(window),e.exports=t.default},function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.IS_BROWSER=void 0;var r="undefined"!=typeof window;t.IS_BROWSER=r;var a=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r){t=Object.assign({},{bottom:"32px",right:"32px",left:"unset",time:"0.3s",mixColor:"#fff",backgroundColor:"#fff",buttonColorDark:"#100f2c",buttonColorLight:"#fff",label:"",saveInCookies:!0,autoMatchOsTheme:!0},t);var n="\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(t.mixColor,";\n        transition: all ").concat(t.time," ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(t.right,";\n        bottom: ").concat(t.bottom,";\n        left: ").concat(t.left,";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(t.buttonColorDark,";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(t.right,";\n        bottom: ").concat(t.bottom,";\n        left: ").concat(t.left,";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(t.buttonColorLight,";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: ").concat(t.backgroundColor,";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    "),o=document.createElement("div"),a=document.createElement("button"),i=document.createElement("div");a.innerHTML=t.label,a.classList.add("darkmode-toggle--inactive"),o.classList.add("darkmode-layer"),i.classList.add("darkmode-background");var d="true"===window.localStorage.getItem("darkmode"),s=t.autoMatchOsTheme&&window.matchMedia("(prefers-color-scheme: dark)").matches,l=null===window.localStorage.getItem("darkmode");(!0===d&&t.saveInCookies||l&&s)&&(o.classList.add("darkmode-layer--expanded","darkmode-layer--simple","darkmode-layer--no-transition"),a.classList.add("darkmode-toggle--white"),document.body.classList.add("darkmode--activated")),document.body.insertBefore(a,document.body.firstChild),document.body.insertBefore(o,document.body.firstChild),document.body.insertBefore(i,document.body.firstChild),this.addStyle(n),this.button=a,this.layer=o,this.saveInCookies=t.saveInCookies,this.time=t.time}}var t,n,a;return t=e,(n=[{key:"addStyle",value:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),document.head.appendChild(t)}},{key:"showWidget",value:function(){var e=this;if(r){var t=this.button,n=this.layer,o=1e3*parseFloat(this.time);t.classList.add("darkmode-toggle"),t.classList.remove("darkmode-toggle--inactive"),t.setAttribute("aria-label","Activate dark mode"),t.setAttribute("aria-checked","false"),t.setAttribute("role","checkbox"),n.classList.add("darkmode-layer--button"),t.addEventListener("click",(function(){var r=e.isActivated();r?(n.classList.remove("darkmode-layer--simple"),t.setAttribute("disabled",!0),setTimeout((function(){n.classList.remove("darkmode-layer--no-transition"),n.classList.remove("darkmode-layer--expanded"),t.removeAttribute("disabled")}),1)):(n.classList.add("darkmode-layer--expanded"),t.setAttribute("disabled",!0),setTimeout((function(){n.classList.add("darkmode-layer--no-transition"),n.classList.add("darkmode-layer--simple"),t.removeAttribute("disabled")}),o)),t.classList.toggle("darkmode-toggle--white"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!r)}))}}},{key:"toggle",value:function(){if(r){var e=this.layer,t=this.isActivated(),n=this.button;e.classList.toggle("darkmode-layer--simple"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!t),n.setAttribute("aria-label","De-activate dark mode"),n.setAttribute("aria-checked","true")}}},{key:"isActivated",value:function(){return r?document.body.classList.contains("darkmode--activated"):null}}])&&o(t.prototype,n),a&&o(t,a),e}();t.default=a}])}));

/* VARIABLE DEFINITIONS */
const lightTheme = {
    '--primary': '#79aec8',
    '--secondary': '#417690',
    '--accent': '#f5dd5d',
    '--primary-fg': '#fff',
    '--body-fg': '#333',
    '--body-bg': '#fff',
    '--body-quiet-color': '#666',
    '--body-loud-color': '#000',
    '--header-color': '#ffc',
    '--header-branding-color': '#f5dd5d',
    '--header-bg': '#417690',
    '--header-link-color': '#fff',
    '--breadcrumbs-fg': '#c4dce8',
    '--breadcrumbs-link-fg': '#fff',
    '--breadcrumbs-bg': '#79aec8',
    '--link-fg': '#447e9b',
    '--link-hover-color': '#036',
    '--link-selected-fg': '#5b80b2',
    '--hairline-color': '#e8e8e8',
    '--border-color': '#ccc',
    '--error-fg': '#ba2121',
    '--message-success-bg': '#dfd',
    '--message-warning-bg': '#ffc',
    '--message-error-bg': '#ffefef',
    '--darkened-bg': '#f8f8f8',
    '--selected-bg': '#e4e4e4',
    '--selected-row': '#ffc',
    '--button-fg': '#fff',
    '--button-bg': '#79aec8',
    '--button-hover-bg': '#609ab6',
    '--default-button-bg': '#417690',
    '--default-button-hover-bg': '#205067',
    '--close-button-bg': '#888;',
    '--close-button-hover-bg': '#747474',
    '--delete-button-bg': '#ba2121',
    '--delete-button-hover-bg': '#a41515',
    '--object-tools-fg': '#fff',
    '--object-tools-bg': '#888',
    '--object-tools-hover-bg': '#a41515',
}

const darkTheme =  {
    '--primary': '#264b5d',
    '--primary-fg': '#eee',
    '--body-fg': '#eeeeee',
    '--body-bg': '#121212',
    '--body-quiet-color': '#e0e0e0',
    '--body-loud-color': '#ffffff',
    '--header-bg': '#284756',
    '--breadcrumbs-link-fg': '#e0e0e0',
    '--breadcrumbs-bg': '#264b5d',
    '--link-fg': '#81d4fa',
    '--link-hover-color': '#4ac1f7',
    '--link-selected-fg': '#6f94c6',
    '--hairline-color': '#272727',
    '--border-color': '#353535',
    '--error-fg': '#e35f5f',
    '--message-success-bg': '#006b1b',
    '--message-warning-bg': '#583305',
    '--message-error-bg': '#570808',
    '--darkened-bg': '#212121',
    '--selected-bg': '#1b1b1b',
    '--selected-row': '#00363a',
    '--close-button-bg': '#333333',
    '--close-button-hover-bg': '#666666',
}

function setColorTheme(theme) {
    if (theme === 'dark') {
        for (const property in darkTheme) {
            document.documentElement.style.setProperty(property, darkTheme[property])
        }
    } else {
        for (const property in lightTheme) {
            document.documentElement.style.setProperty(property, lightTheme[property])
        }
    }
}

function initDarkMode(darkmode) {
    if (darkmode) {
        setColorTheme('dark')
        document.querySelector('body').classList.add('darkmode--activated')
    } else {
        setColorTheme('light')
        document.querySelector('body').classList.remove('darkmode--activated')
    }
}

var darkmode = JSON.parse(localStorage.getItem('darkmode'))
initDarkMode(darkmode)
