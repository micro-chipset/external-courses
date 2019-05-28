(function () {
    'use strict';
    function Model() {
        this.books = [];
        this.state = {
            filteredBooksArray: '',
            isFilter: false
        };
    }

    Model.prototype.setFilter = function (id) {
        let filterBooks = this.books;
        if (this.state.isFilter && this.state.filteredBooksArray.length !== 0) {
            filterBooks = this.state.filteredBooksArray;
        }
        switch (id) {
            case 'most_recent':
                this.state.isFilter = 'most_recent';
                return this.state.filteredBooksArray = filterBooks.sort((a, b) => b.updatedAt - a.updatedAt);
            case 'most_popular':
                this.state.isFilter = 'most_popular';
                return this.state.filteredBooksArray = filterBooks.sort((a, b) => b.rating - a.rating);
            case 'free_books':
                this.state.isFilter = 'free_books';
                return this.state.filteredBooksArray = filterBooks.filter((item) => item.cost <= 0);
            default:
                this.state.isFilter = 'all_books';
                return this.state.filteredBooksArray = filterBooks.sort((a, b) => a.id - b.id);
        }
    }

    Model.prototype.setSearch = function (value) {
        let filterBooks;
        if (!this.state.isFilter || value.length === 0) {
            filterBooks = this.books;
        } else {
            filterBooks = this.state.filteredBooksArray;
        }
        this.state.isFilter = true;
        this.state.filteredBooksArray = filterBooks.filter((item) =>
            (item.author.firstName.toLowerCase().indexOf(value) > -1
                || item.author.lastName.toLowerCase().indexOf(value) > -1
                || item.title.toLowerCase().indexOf(value) > -1)
        );
        return this.state.filteredBooksArray;
    }

    window.Model = Model;
})();