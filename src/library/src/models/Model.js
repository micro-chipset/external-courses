(function () {
    'use strict';
    function Model() {
        this.books = [];
        this.search = '';
        this.filter = '';
    }

    Model.prototype.filterBooks = function (id) {
        let filterBooks = this.books;
        this.filter = id;
        filterBooks = this.state(this.filter, this.search)
        return this.calculateFilter(filterBooks);
    }

    Model.prototype.state = function (filter, search) {
        let books = this.books;
        if (search.length !== 0) {
            return this.calculateSearch(books);
        }
        if (filter.length !== 0) {
            return  this.calculateFilter(books);
        }
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
        let searchBooks = this.books;
        this.search = value;
        searchBooks = this.state(this.filter, this.search);
        return this.calculateSearch(searchBooks);
    }

    window.Model = Model;
})();