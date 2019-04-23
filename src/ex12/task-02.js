"use strict"

let dropdown = document.querySelector('.dropdown');
let list = document.querySelector('.dropdown-list');
let topMenu = document.querySelector('.dropdown-top-menu');

function onTopMenuClick() {
    dropdown.classList.toggle('open');
}

function onTopMenuIn() {
    topMenu.classList.add('shadow');
}

function onTopMenuOut() {
    topMenu.classList.remove('shadow');
}

function onListIn(event) {
    if (event.target.tagName == 'LI') {
        event.target.classList.add('hover');
    }
}

function onListOut(event) {
    if (event.target.tagName == 'LI') {
        event.target.classList.remove('hover');
    }
}

topMenu.addEventListener('click', onTopMenuClick);
topMenu.addEventListener('mouseover', onTopMenuIn);
topMenu.addEventListener('mouseout', onTopMenuOut);
list.addEventListener('mouseover', onListIn);
list.addEventListener('mouseout', onListOut);