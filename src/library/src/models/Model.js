(function () {
    'use strict';
    function Model() {
        this.books = [];
        this.search = '';
        this.filter = '';
    }

    Model.prototype.filterBooks = function (id) {
        this.filter = id;
        return this.checkFiltered();
    }

    Model.prototype.checkFiltered = function () {
        let books = this.books;
        if (this.search.length !== 0) {
            books = this.calculateSearch(books);
        }
        if (this.filter.length !== 0) {
            books = this.calculateFilter(books);
        }
        return books;
    }

    Model.prototype.calculateFilter = function (filterBooks) {
        switch (this.filter) {
            case 'most_recent':
                return filterBooks.sort((a, b) => b.updatedAt - a.updatedAt);
            case 'most_popular':
                return filterBooks.sort((a, b) => b.rating - a.rating);
            case 'free_books':
                return filterBooks.filter((item) => item.cost <= 0);
            default:
                return filterBooks.sort((a, b) => a.id - b.id);
        }
    }
    Model.prototype.calculateSearch = function (searchBooks) {
        return searchBooks.filter((item) =>
            (item.author.firstName.toLowerCase().indexOf(this.search) > -1
                || item.author.lastName.toLowerCase().indexOf(this.search) > -1
                || item.title.toLowerCase().indexOf(this.search) > -1)
        );
    }

    Model.prototype.searchBooks = function (value) {
        this.search = value;
        return this.checkFiltered();
    }

    window.Model = Model;
})();