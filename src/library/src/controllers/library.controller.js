(function () {
    'use strict';
    function Controller(model, view) {
        var self = this;
        this.model = model;
        this.view = view;
        
        const urlBooks = 'https://rsu-library-api.herokuapp.com/books';
        callApi(urlBooks, function (err, data) {
            saveBooks(data, function (filtereBooks) {
                self.view.renderBooks(filtereBooks)
            })
        });
        function saveBooks (receivedBooks) {
            self.model.books = receivedBooks;
            self.model.filterBooks = self.model.books.sort((a, b) => a.id - b.id);
            self.view.renderBooks(self.model.filterBooks);
            // cb(this.filterBooks);
        }
    }
    window.Controller = Controller;
})();