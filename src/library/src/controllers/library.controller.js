const urlBooks = 'https://rsu-library-api.herokuapp.com/books';
callApi(urlBooks, renderBooks);
filterTop.addEventListener("click", showFilter);
searchInput.addEventListener("input", debounce(search, 1000));