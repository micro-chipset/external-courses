const urlBooks = 'https://rsu-library-api.herokuapp.com/books';
callApi(urlBooks, function (err, data) {
    saveBooks(data, function (filtereBooks) {
        renderBooks(filtereBooks)
    })
});