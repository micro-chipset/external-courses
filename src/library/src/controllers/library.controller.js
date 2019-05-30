(function () {
    'use strict';
    function Controller() {
        this.model = new Model();
        this.view = new View(this);
        var self = this;

        const urlBooks = 'https://rsu-library-api.herokuapp.com/books';
        callApi(urlBooks, function (err, data) {
            saveBooks(data, function (books) {
                self.view.renderBooks(books)
            })
        });

        function saveBooks(receivedBooks) {
            self.model.books = receivedBooks;
            self.model.books = self.model.books.sort((a, b) => a.id - b.id);
            self.view.renderBooks(self.model.books);
        }
    }

    Controller.prototype.getFilter = function(id){
        return this.model.getFilter(id);
    };

    Controller.prototype.getSearch = function(value){
        return this.model.getSearch(value);
    };

    Controller.prototype.addBook = function(){
        this.model.books.push(this.view.newBook);
    };

    Controller.prototype.getBooks = function () {
        return this.model.books;
    };

    window.Controller = Controller;
})();