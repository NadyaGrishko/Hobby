var loadJs=function(e,a){var t=document,r="string"==typeof a?t.querySelector(a):a,c=r||t.getElementsByTagName("head")[0],n=t.createElement("script");n.src=e,n.async=!0,c.appendChild(n)},loadMaps=function(){var e=document.querySelectorAll("[data-map-src]");[].forEach.call(e,function(e){var a=e.getAttribute("data-map-src");loadJs(a,e)})};

window.onload = function() {
    loadMaps();
};
