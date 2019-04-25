"use strict"

resize();
window.addEventListener('resize', resize);

function resize() {
    var article = document.getElementById("article");
    article.style.height = document.documentElement.clientHeight - 50 + 'px';
}