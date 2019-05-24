(function () {
    'use strict';
    function Model(view) {
        this.view = view;
        this.books = [];
        this.filterBooks = [];
    }
    Model.prototype.saveBooks = function (receivedBooks) {
        this.books = receivedBooks;
        this.filterBooks = this.books.sort((a, b) => a.id - b.id);
        // this.view.renderBooks(filterBooks);
    }

    Model.prototype.showFilter = function (event) {
        this.view.searchInput.value = ""
        let selectorFilterElemId = document.querySelector(`#${event.target.id}`);
        switch (event.target.id) {
            case 'most_recent':
                this.filterBooks = books.sort((a, b) => b.updatedAt - a.updatedAt);
                break;
            case 'most_popular':
                this.filterBooks = books.sort((a, b) => b.rating - a.rating);
                break;
            case 'free_books':
                this.filterBooks = books.filter((item) => item.cost <= 0);
                break;
            default:
                filterBooks = books.sort((a, b) => a.id - b.id);
        }
        setFilterActive(selectorFilterElemId);
        booksWrapper.innerHTML = '';
        this.view.renderBooks(filterBooks);
    }

    Model.prototype.setFilterActive = function (id) {
        let filterTopItem = filterTop.children;
        for (let i = 0; i < filterTopItem.length; i++) {
            filterTopItem[i].classList.remove("active");
        }
        id.classList.toggle("active");
    }

    Model.prototype.getSearch = function (item) {
        const value = this.view.searchInput.value.toLowerCase();
        return (item.author.firstName.toLowerCase().indexOf(value) > -1
            || item.author.lastName.toLowerCase().indexOf(value) > -1
            || item.title.toLowerCase().indexOf(value) > -1);
    }

    Model.prototype.search = function () {
        let searchBooks = filterBooks.filter(getSearch);
        booksWrapper.innerHTML = '';
        this.view.renderBooks(searchBooks);
    }
    window.Model = Model;
})();