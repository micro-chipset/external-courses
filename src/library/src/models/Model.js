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