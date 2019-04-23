"use strict"

resize();
window.addEventListener('resize', go);

function resize() {
    var article = document.getElementById("article");
    article.style.width = document.documentElement.clientWidth - 50 + 'px';
    article.style.height = document.documentElement.clientHeight - 50 + 'px';
}