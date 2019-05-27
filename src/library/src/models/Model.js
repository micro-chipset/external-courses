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
        this.view.renderBooks(this.filterBooks);
        // cb(this.filterBooks);
    }

    Model.prototype.showFilter = function (event) {
        this.view.$searchInput.value = ""
        let selectorFilterElemId = document.querySelector(`#${event.target.id}`);
        switch (event.target.id) {
            case 'most_recent':
                this.filterBooks = this.books.sort((a, b) => b.updatedAt - a.updatedAt);
                break;
            case 'most_popular':
                this.filterBooks = this.books.sort((a, b) => b.rating - a.rating);
                break;
            case 'free_books':
                this.filterBooks = this.books.filter((item) => item.cost <= 0);
                break;
            default:
                this.filterBooks = this.books.sort((a, b) => a.id - b.id);
        }
        this.view.setFilterActive(selectorFilterElemId);
        this.view.$booksWrapper.innerHTML = '';
        this.view.renderBooks(this.filterBooks);
    }

    Model.prototype.getSearch = function (item) {
        const value = this.view.searchInput.value.toLowerCase();
        return (item.author.firstName.toLowerCase().indexOf(value) > -1
            || item.author.lastName.toLowerCase().indexOf(value) > -1
            || item.title.toLowerCase().indexOf(value) > -1);
    }

    Model.prototype.search = function () {
        let searchBooks = filterBooks.filter(getSearch);
        this.view.$booksWrapper.innerHTML = '';
        this.view.renderBooks(searchBooks);
    }
    window.Model = Model;
})();