let books = [];
let filterBooks = [];

function saveBooks(receivedBooks) {
    books = receivedBooks;
    filterBooks = books.sort((a, b) => a.id - b.id);
    renderBooks(books);
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

function getSearch(item) {
    const value = searchInput.value.toLowerCase();
    return (item.author.firstName.toLowerCase().indexOf(value) > -1
        || item.author.lastName.toLowerCase().indexOf(value) > -1
        || item.title.toLowerCase().indexOf(value) > -1);
}

function search() {
    let searchBooks = filterBooks.filter(getSearch);
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