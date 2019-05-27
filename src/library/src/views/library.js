
(function () {
    'use strict';
    function View() {
        var self = this;
        const $booksWrapper = document.querySelector('.books');
        const $filterTop = document.querySelector(".filter");
        const $searchInput = document.querySelector("#search");
        const $searchButton = document.querySelector("#search_button");
        

        const $closeButton = document.querySelector("#close-button");
        const $openButton = document.querySelector(".button-book-add");
        const $form = document.querySelector(".book_add");
        const $pushBook = document.querySelector(".submit");
        

        $filterTop.addEventListener("click", self.showFilter);
        // $searchInput.addEventListener("input", debounce(self.search, 1000));
        $openButton.addEventListener("click", self.openCloseModal);
        $closeButton.addEventListener("click", self.openCloseModal);
        $pushBook.addEventListener("click", self.validateBook);
    }

    View.prototype.setFilterActive = function (id) {
        let filterTopItem = self.$filterTop.children;
        for (let i = 0; i < filterTopItem.length; i++) {
            filterTopItem[i].classList.remove("active");
        }
        id.classList.toggle("active");
    }

    // Render books
    View.prototype.renderBooks = function (books) {
        books.forEach(function (anotherBook) {

            let book = createBook(anotherBook);
            const $booksWrapper = document.querySelector('.books');
            const $searchInput = document.querySelector("#search");
            const $searchButton = document.querySelector("#search_button");
            $booksWrapper.appendChild(book);
        });
        if (!books.length) {
            $booksWrapper.innerHTML = "Books not found..."
        }
        // showButtonDelete();








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
            var rating = createRating(currentRating);
            bookWrapper.appendChild(rating);

            return bookWrapper;
        }
        function createStar(stars, currentRating) {
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
        }

        function createRating(currentRating) {
            let stars = document.createElement('div');
            let currentIndex;
            createStar(stars, currentRating);
            // Array all stars
            let allItems = Array.from(stars.querySelectorAll('.fa-star'));
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
                // Selected element
                let myTarget = e.target;
                // Find the selected element in the array and put its index variable
                currentIndex = allItems.findIndex(elem => elem === myTarget);
                cStars(currentIndex);
            });

            stars.addEventListener('click', function (e) {
                // Selected element
                let myTarget = e.target;
                // Find the selected element in the array and put its index variable
                currentIndex = allItems.findIndex(elem => elem === myTarget);
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
        function showButtonDelete() {
            if ($searchInput.value !== "") {
                $searchButton.firstChild.classList.remove('fa-search')
                $searchButton.firstChild.classList.add('fa-times')
            } else {
                $searchButton.firstChild.classList.remove('fa-times')
                $searchButton.firstChild.classList.add('fa-search')
            }
        }
    }

    View.prototype.openCloseModal = function () {
        const $modal = document.querySelector("#modal");
        const $modalOverlay = document.querySelector("#modal-overlay");
        $modal.classList.toggle("closed");
        $modalOverlay.classList.toggle("closed");
    }

    View.prototype.addBook = function (value) {
        let book = {};
        book.id = setId();
        book.title = setFirstSymbolUpperCase(value.elements.title.value);
        book.author = {
            firstName: setFirstSymbolUpperCase(value.elements.firstName.value),
            lastName: setFirstSymbolUpperCase(value.elements.lastName.value)
        };
        book.cost = value.elements.cost.value;
        book.image_url = value.elements.image_url.value;
        book.rating = 0;
        book.categories = Array.from(document.querySelectorAll("input.checkbox:checked")).map(function (elem) {
            return elem.value;
        });
        book.createdAt = new Date().getTime();
        book.updatedAt = new Date().getTime();
        self.books.push(book);
        self.$booksWrapper.innerHTML = '';
        renderBooks(books);
    }

    View.prototype.setId = function () {
        return +Date.now() + (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
    }

    View.prototype.isNumber = function (number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    View.prototype.setFirstSymbolUpperCase = function (stringValue) {
        return stringValue.charAt(0).toUpperCase() + stringValue.slice(1);
    }

    View.prototype.validateBook = function () {
        let $form = document.forms.book_add;
        const $errorMessage = document.querySelector(".error_message");
        let isValidateData = $form.elements.title.value !== ""
            && $form.elements.firstName.value !== ""
            && $form.elements.lastName.value !== ""
            && $form.elements.cost.value !== ""
            && (+$form.elements.cost.value)
            && (+$form.elements.cost.value) >= 0;

        if (isValidateData) {
            $errorMessage.classList.add("hidden");
            addBook($form);
            $form.elements.title.value = "";
            $form.elements.firstName.value = "";
            $form.elements.lastName.value = "";
            $form.elements.cost.value = "";
            openCloseModal();
        } else {
            $errorMessage.classList.remove("hidden");
        }
    }

    window.View = View;

}());