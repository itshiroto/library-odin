const titleInput = document.querySelector('#input-title');
const authorInput = document.querySelector('#input-author');
const pagesInput = document.querySelector('#input-pages');
const readInput = document.querySelector('[data-read]');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'completed' : 'not read yet';
}

function addBookToLibrary() {
    return myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked));
}