(function () {
    'use strict';
    function Controller() {
        this.model = new Model();
        this.view = new View(this);
        var self = this;

        const urlBooks = 'https://rsu-library-api.herokuapp.com/books';
        callApi(urlBooks, function (err, data) {
            saveBooks(data, function (filtereBooks) {
                self.view.renderBooks(filtereBooks)
            })
        });

        function saveBooks(receivedBooks) {
            self.model.books = receivedBooks;
            self.model.filterBooks = self.model.books.sort((a, b) => a.id - b.id);
            self.view.renderBooks(self.model.filterBooks);
        }
    }

    Controller.prototype.setFilter = function(id){
        return this.model.setFilter(id);
    };

    Controller.prototype.setSearch = function(value){
        return this.model.setSearch(value);
    };

    Controller.prototype.addBook = function(){
        this.model.books.push(this.view.newBook);
    };

    Controller.prototype.getBooks = function () {
        return this.model.books;
    };

    window.Controller = Controller;
})();