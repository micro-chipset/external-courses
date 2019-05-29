(function () {
    'use strict';
    function View(controller) {

        this.controller = controller;
        var self = this;
        this.newBook = {};

        const $filterTop = document.querySelector(".filter");
        const $filterTopItem = $filterTop.children;
        const $searchInput = document.querySelector("#search");
        const $searchButton = document.querySelector("#search_button");
        const $booksWrapper = document.querySelector('.books');
        const $closeButton = document.querySelector("#close-button");
        const $openButton = document.querySelector(".button-book-add");
        const $pushBook = document.querySelector(".submit");
        const $modal = document.querySelector("#modal");
        const $modalOverlay = document.querySelector("#modal-overlay");
        const $form = document.forms.book_add;
        const $errorMessage = document.querySelector(".error_message");

        $filterTop.addEventListener("click", filter);
        $searchInput.addEventListener("input", debounce(search, 1000));
        $openButton.addEventListener("click", openCloseModal);
        $closeButton.addEventListener("click", openCloseModal);
        $pushBook.addEventListener("click", validateBook);

        function setFilterActive(selectorElemId) {
            for (let i = 0; i < $filterTopItem.length; i++) {
                $filterTopItem[i].classList.remove("active");
            }
            selectorElemId.classList.toggle("active");
        }

        function filter(event) {
            // $searchInput.value = ""
            let filterElemId = event.target.id;
            const $selectorFilterElemId = document.querySelector(`#${filterElemId}`);
            setFilterActive($selectorFilterElemId);
            $booksWrapper.innerHTML = '';
            self.renderBooks(controller.setFilter(filterElemId));
        }

        function search() {
            const value = $searchInput.value.toLowerCase();
            $booksWrapper.innerHTML = '';
            self.renderBooks(controller.setSearch(value));
        }

        function addBook(value) {
            self.newBook.id = setId();
            self.newBook.title = setFirstSymbolUpperCase(value.elements.title.value);
            self.newBook.author = {
                firstName: setFirstSymbolUpperCase(value.elements.firstName.value),
                lastName: setFirstSymbolUpperCase(value.elements.lastName.value)
            };
            self.newBook.cost = +value.elements.cost.value;
            self.newBook.image_url = value.elements.image_url.value;
            self.newBook.rating = 0;
            self.newBook.categories = Array.from(document.querySelectorAll("input.checkbox:checked")).map(function (elem) {
                return elem.value;
            });
            self.newBook.createdAt = new Date().getTime();
            self.newBook.updatedAt = new Date().getTime();
            controller.addBook();
            $booksWrapper.innerHTML = '';
            const $selectorDefaultElemId = document.querySelector('#all_books');
            setFilterActive($selectorDefaultElemId);
            self.renderBooks(controller.getBooks());
        }

        function setFirstSymbolUpperCase(stringValue) {
            return stringValue.charAt(0).toUpperCase() + stringValue.slice(1);
        }

        function openCloseModal() {
            $modal.classList.toggle("closed");
            $modalOverlay.classList.toggle("closed");
        }

        function validateBook() {
            let isValidateData = $form.elements.title.value !== ""
                && $form.elements.firstName.value !== ""
                && $form.elements.lastName.value !== ""
                && $form.elements.cost.value !== ""
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

        function _createStar   (stars, currentRating) {
            stars.classList.add('book-rating');
            for (let i = 1; i <= currentRating; i++) {
                const $star = document.createElement('i');
                $star.classList.add('fas');
                $star.classList.add('fa-star');
                stars.appendChild($star);
            }
            let emptyStars = 5 - currentRating;
            for (let i = 1; i <= emptyStars; i++) {
                const $star = document.createElement('i');
                $star.classList.add('far');
                $star.classList.add('fa-star');
                stars.appendChild($star);
            }
        }

        function _createRating (currentRating) {
            let $stars = document.createElement('div');
            let currentIndex;
            _createStar($stars, currentRating);
            // Array all stars
            let allItems = Array.from($stars.querySelectorAll('.fa-star'));
            // Amount active star
            let activeItems = $stars.querySelectorAll('.fa-star.fas').length;
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
            $stars.addEventListener('mouseover', function (e) {
                // Selected element
                let myTarget = e.target;
                // Find the selected element in the array and put its index variable
                currentIndex = allItems.findIndex(elem => elem === myTarget);
                cStars(currentIndex);
            });

            $stars.addEventListener('click', function (e) {
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
                activeItems = $stars.querySelectorAll('.book-rating .fa-star.fas').length;
            });

            $stars.addEventListener('mouseleave', function (e) {
                cStars(+activeItems - 1);
            });

            return $stars;
        }

        this._showButtonDelete = function () {
            if ($searchInput.value !== "") {
                $searchButton.firstChild.classList.remove('fa-search')
                $searchButton.firstChild.classList.add('fa-times')
            } else {
                $searchButton.firstChild.classList.remove('fa-times')
                $searchButton.firstChild.classList.add('fa-search')
            }
        }

        this._createBook = function (anotherBook) {
            const $bookWrapper = document.createElement('article');

            const $bookImg = document.createElement('img');
            $bookImg.classList.add('book-img')
            $bookImg.src = anotherBook.image_url;
            $bookImg.alt = anotherBook.title;
            $bookWrapper.appendChild($bookImg);

            const $bookTitle = document.createElement('h2');
            $bookTitle.classList.add('book-title');
            $bookWrapper.appendChild($bookTitle);
            let textTitle = document.createTextNode(anotherBook.title);
            $bookTitle.appendChild(textTitle);

            const $bookAuthor = document.createElement('p');
            $bookAuthor.classList.add('book-author');
            $bookWrapper.appendChild($bookAuthor);
            let textAuthor = document.createTextNode(`by ${anotherBook.author.firstName} ${anotherBook.author.lastName}`);
            $bookAuthor.appendChild(textAuthor);

            let currentRating = anotherBook.rating;
            var rating = _createRating(currentRating);
            $bookWrapper.appendChild(rating);

            return $bookWrapper;
        }
    }

    View.prototype.renderBooks = function (books) {
        const $booksWrapper = document.querySelector('.books');

        books.forEach((anotherBook) => {
            let book = this._createBook(anotherBook);
            $booksWrapper.appendChild(book);
        });

        this._showButtonDelete();

        if (!books.length) {
            $booksWrapper.innerHTML = "Books not found..."
        }
    }
    
    window.View = View;
}());