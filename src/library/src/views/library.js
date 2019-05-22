
const booksWrapper = document.querySelector('.books');
const filterTop = document.querySelector(".filter");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search_button");

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
        // Reset rating
        if (currentIndex + 1 === activeItems) {
            currentIndex = -1;
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