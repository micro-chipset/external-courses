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

// Нужно доделать. Пока только вывод 5 звезд.
function createRating(rating) {
    let stars = document.createElement('div');
    stars.classList.add('book-rating');
    for (let i = 1; i <= 5; i++) {
        let star = document.createElement('i');
        star.classList.add('fa');
        star.classList.add('fa-star');
        stars.appendChild(star);
    }
    return stars;
}