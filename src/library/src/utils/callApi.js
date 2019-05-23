function callApi(url, callback) {
    return fetch(url)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }
        })
        .then(data => {
            saveBooks(data);
            callback(data);
        })
        .catch(function (error) {
            console.log(`There was a problem with the request: ${error}`);
        });
}