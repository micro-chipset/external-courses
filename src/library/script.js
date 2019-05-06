"use strict"

// XMLHttpRequest books
let booksObject = booksRequest();
function booksRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rsu-library-api.herokuapp.com/books', false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// Render all books
renderBooks();
function renderBooks() {
    booksObject.forEach(function (anotherBook) {
        let booksWrapper = document.querySelector('.books');
        let book = createBook(anotherBook);
        booksWrapper.appendChild(book);
    });
}

// Create Book
function createBook(anotherBook) {
    let bookWrapper = document.createElement('article');

    let bookImg = document.createElement('img');
    bookImg.classList.add('book-img')
    bookImg.src = anotherBook.image_url;
    bookImg.alt = anotherBook.title;
    bookWrapper.appendChild(bookImg);

    let bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookWrapper.appendChild(bookTitle);
    let textTitle = document.createTextNode(anotherBook.title);
    bookTitle.appendChild(textTitle);

    let bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookWrapper.appendChild(bookAuthor);
    let textAuthor = document.createTextNode(`by ${anotherBook.author.firstName} ${anotherBook.author.lastName}`);
    bookAuthor.appendChild(textAuthor);

    var rating = createRating(rating);
    bookWrapper.appendChild(rating);

    return bookWrapper;
}

function createRating(rating) {
    let stars = document.createElement('div');
    stars.classList.add('book-rating');
    for (let i = 1; i <= 5; i++) {
        let star = document.createElement('i');
        star.classList.add('far');
        star.classList.add('fa-star');
        stars.appendChild(star);
    }
    // Array all stars
    var allItems = stars.querySelectorAll('.fa-star');
    // Amount active star
    var activeItems = stars.querySelectorAll('.fa-star.fas').length;
    // The function checks where clicked and changes classes
    var cStars = function (nowPos) {
        // Remove fas class from all elements.
        for (var i = 0; allItems.length > i; i++) {
            allItems[i].classList.remove('fas');
        }
        //Add fas class to selected elements
        for (var i = 0; nowPos + 1 > i; i++) {

            allItems[i].classList.toggle('fas');
        }
    }
    // Hover
    stars.addEventListener('mouseover', function (e) {
        var myTarget = e.target;
        // Array length
        var i = allItems.length;
        // Find the selected element in the array and put its index variable
        while (i--) {
            if (allItems[i] == myTarget) {
                var currentIndex = i;
                break;
            }
        }
        cStars(currentIndex);
    });

    stars.addEventListener('click', function (e) {
        // Selected element
        var myTarget = e.target;
        // Array length
        var i = allItems.length;
        // Find the selected element in the array and put its index variable
        while (i--) {
            if (allItems[i] == myTarget) {
                var currentIndex = i;
                break;
            }
        }
        cStars(currentIndex);
        // Change amount active star 
        activeItems = stars.querySelectorAll('.book-rating .fa-star.fas').length;
    });

    stars.addEventListener('mouseleave', function (e) {
        cStars(+activeItems - 1);
    });

    return stars;
}