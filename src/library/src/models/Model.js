let books = [];
let filterBooks = [];

callApi(urlBooks, renderBooks);

function saveBooks(receivedBooks) {
    books = receivedBooks;
    filterBooks = books.sort((a, b) => a.id - b.id);
}

// Render books
function renderBooks(books) {

    books.forEach(function (anotherBook) {

        let book = createBook(anotherBook);
        booksWrapper.appendChild(book);
    });
    if (books.length === 0) {
        booksWrapper.innerHTML = "Books not found..."
    }
    showButtonDelete();
}

function showFilter(event) {
    searchInput.value = ""
    let selectorFilterId = document.querySelector(`#${event.target.id}`);
    switch (event.target.id) {
        case 'most_recent':
            filterBooks = books.sort((a, b) => b.updatedAt - a.updatedAt);
            break;
        case 'most_popular':
            filterBooks = books.sort((a, b) => b.rating - a.rating);
            break;
        case 'free_books':
            filterBooks = books.filter((item) => item.cost <= 0);
            break;
        default:
            filterBooks = books.sort((a, b) => a.id - b.id);
    }
    setFilterActive(selectorFilterId);
    booksWrapper.innerHTML = '';
    renderBooks(filterBooks);
}

function setFilterActive(id) {
    let filterTopItem = filterTop.children;
    for (let i = 0; i < filterTopItem.length; i++) {
        filterTopItem[i].classList.remove("active");
    }
    id.classList.toggle("active");
}

function search() {
    let value = searchInput.value.toLowerCase();
    let searchBooks = filterBooks.filter((item) =>
        (item.author.firstName.toLowerCase().indexOf(value) > -1
            || item.author.lastName.toLowerCase().indexOf(value) > -1
            || item.title.toLowerCase().indexOf(value) > -1)
    );
    booksWrapper.innerHTML = '';
    renderBooks(searchBooks);
}

function showButtonDelete() {
    if (searchInput.value !== "") {
        searchButton.firstChild.classList.remove('fa-search')
        searchButton.firstChild.classList.add('fa-times')
    } else {
        searchButton.firstChild.classList.remove('fa-times')
        searchButton.firstChild.classList.add('fa-search')
    }
}