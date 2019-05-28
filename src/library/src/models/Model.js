(function () {
    'use strict';
    function Model() {
        this.books = [];
        this.filterBooks = [];
    }

    Model.prototype.setFilter = function (id) {
        switch (id) {
            case 'most_recent':
                return this.filterBooks = this.books.sort((a, b) => b.updatedAt - a.updatedAt);
            case 'most_popular':
                return this.filterBooks = this.books.sort((a, b) => b.rating - a.rating);
            case 'free_books':
                return this.filterBooks = this.books.filter((item) => item.cost <= 0);
            default:
                return this.filterBooks = this.books.sort((a, b) => a.id - b.id);
        }
    }

    Model.prototype.setSearch = function (value) {
        return this.filterBooks.filter((item) =>
            (item.author.firstName.toLowerCase().indexOf(value) > -1
                || item.author.lastName.toLowerCase().indexOf(value) > -1
                || item.title.toLowerCase().indexOf(value) > -1)
        );
    }

    window.Model = Model;
})();