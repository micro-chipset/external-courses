(function () {
    'use strict';
    function Controller(model, view) {

        this.model = model;
        this.view = view;
        
        const urlBooks = 'https://rsu-library-api.herokuapp.com/books';
        callApi(urlBooks, function (err, data) {
            this.model.saveBooks(data, function (filtereBooks) {
                this.view.renderBooks(filtereBooks)
            })
        });
    }
    window.Controller = Controller;
})();