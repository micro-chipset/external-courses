function callApi(url, callback) {
    return fetch(url)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }
            throw new Error(response);
        })
        .then(data => {
            callback(null, data);
        })
        .catch(function (error) {
            console.log(`There was a problem with the request: ${error}`);
            callback(error);
        });
}