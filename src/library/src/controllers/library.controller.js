(function () {
    'use strict';
    function Controller(model, view) {
        var self = this;
        this.model = model;
        this.view = view;
        
        const urlBooks = 'https://rsu-library-api.herokuapp.com/books';
        callApi(urlBooks, function (err, data) {
            self.model.saveBooks(data, function (filtereBooks) {
                self.view.renderBooks(filtereBooks)
            })
        });
    }
    window.Controller = Controller;
})();