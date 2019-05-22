"use strict"

callApi(urlBooks, renderBooks);
// Render books
function renderBooks(books) {
    let filterBooks = books.sort((a, b) => a.id - b.id);
    const booksWrapper = document.querySelector('.books');
    const filterTop = document.querySelector(".filter");
    const searchInput = document.querySelector("#search");
    const searchButton = document.querySelector("#search_button");

    filterTop.addEventListener("click", showFilter);
    searchInput.addEventListener("input", debounce(search, 1000));

    showBooks(books);

    function showFilter(event) {
        searchInput.value = ""
        let selectorFilterId = document.querySelector(`#${event.target.id}`);
        switch (event.target.id) {
            case 'most_recent':
                filterBooks = books.sort((a, b) => b.updatedAt - a.updatedAt);
                break;
            case 'most_popular':
                filterBooks = books.sort((a, b) => b.rating - a.rating);
                break;
            case 'free_books':
                filterBooks = books.filter((item) => item.cost <= 0);
                break;
            default:
                filterBooks = books.sort((a, b) => a.id - b.id);
        }
        setFilterActive(selectorFilterId);
        booksWrapper.innerHTML = '';
        showBooks(filterBooks);
    }

    function setFilterActive(id) {
        let filterTopItem = filterTop.children;
        for (let i = 0; i < filterTopItem.length; i++) {
            filterTopItem[i].classList.remove("active");
        }
        id.classList.toggle("active");
    }

    function search() {
        let value = searchInput.value.toLowerCase();
        let searchBooks = filterBooks.filter((item) =>
            (item.author.firstName.toLowerCase().indexOf(value) > -1
                || item.author.lastName.toLowerCase().indexOf(value) > -1
                || item.title.toLowerCase().indexOf(value) > -1)
        );
        booksWrapper.innerHTML = '';
        showBooks(searchBooks);
    }

    function showButtonDelete() {
        if (searchInput.value !== "") {
            searchButton.firstChild.classList.remove('fa-search')
            searchButton.firstChild.classList.add('fa-times')
        } else {
            searchButton.firstChild.classList.remove('fa-times')
            searchButton.firstChild.classList.add('fa-search')
        }
    }

    function showBooks(books) {
        books.forEach(function (anotherBook) {

            let book = createBook(anotherBook);
            booksWrapper.appendChild(book);
        });
        if (books.length === 0) {
            booksWrapper.innerHTML = "Books not found..."
        }
        showButtonDelete();
    }
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

    let currentRating = anotherBook.rating;
    var rating = createRating(rating, currentRating);
    bookWrapper.appendChild(rating);

    return bookWrapper;
}

function createRating(rating, currentRating) {
    let stars = document.createElement('div');
    stars.classList.add('book-rating');
    for (let i = 1; i <= currentRating; i++) {
        let star = document.createElement('i');
        star.classList.add('fas');
        star.classList.add('fa-star');
        stars.appendChild(star);
    }
    let emptyStars = 5 - currentRating;
    for (let i = 1; i <= emptyStars; i++) {
        let star = document.createElement('i');
        star.classList.add('far');
        star.classList.add('fa-star');
        stars.appendChild(star);
    }
    // Array all stars
    let allItems = stars.querySelectorAll('.fa-star');
    // Amount active star
    let activeItems = stars.querySelectorAll('.fa-star.fas').length;
    // The function checks where clicked and changes classes
    let cStars = function (nowPos) {
        // Remove fas and add far class from all elements.
        for (let i = 0; allItems.length > i; i++) {
            allItems[i].classList.remove('fas');
            allItems[i].classList.add('far');
        }
        //Add fas class to selected elements
        for (let i = 0; nowPos + 1 > i; i++) {

            allItems[i].classList.toggle('fas');
        }
    }
    // Hover
    stars.addEventListener('mouseover', function (e) {
        let myTarget = e.target;
        // Array length
        let i = allItems.length;
        // Find the selected element in the array and put its index variable
        while (i--) {
            if (allItems[i] === myTarget) {
                var currentIndex = i;
                break;
            }
        }
        cStars(currentIndex);
    });

    stars.addEventListener('click', function (e) {
        // Selected element
        let myTarget = e.target;
        // Array length
        let i = allItems.length;
        // Find the selected element in the array and put its index variable
        while (i--) {
            if (allItems[i] === myTarget) {
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