(function () {
    'use strict';
    function Model() {
        this.books = [];
        this.search = '';
    }

    Model.prototype.setFilter = function (id) {
        let filterBooks = this.books;
        if (this.search.length !== 0) {
            filterBooks = this.calculateSearch();
        }
        switch (id) {
            case 'most_recent':
                return filterBooks = filterBooks.sort((a, b) => b.updatedAt - a.updatedAt);
            case 'most_popular':
                return filterBooks = filterBooks.sort((a, b) => b.rating - a.rating);
            case 'free_books':
                return filterBooks = filterBooks.filter((item) => item.cost <= 0);
            default:
                return filterBooks = filterBooks.sort((a, b) => a.id - b.id);
        }
    }

    Model.prototype.calculateSearch = function () {
        return this.books.filter((item) =>
            (item.author.firstName.toLowerCase().indexOf(this.search) > -1
                || item.author.lastName.toLowerCase().indexOf(this.search) > -1
                || item.title.toLowerCase().indexOf(this.search) > -1)
        );
    }

    Model.prototype.setSearch = function (value) {
        this.search = value;
        return this.calculateSearch();
    }

    window.Model = Model;
})();