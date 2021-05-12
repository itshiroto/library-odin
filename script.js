const libraryList = document.querySelector('#library-list');
const newBookForm = document.querySelector('#form-newbook');
const newBookBtn = document.querySelector('#form-showbutton')
const titleInput = document.querySelector('#input-title');
const authorInput = document.querySelector('#input-author');
const pagesInput = document.querySelector('#input-pages');
const readInput = document.querySelector('[data-read]');
const submitInput = document.querySelector('#submitInputBtn')

submitInput.addEventListener('click', () => {
    addBookToLibrary();
    refreshLibrary();
    closeForm();
})

let myLibrary = [
    new Book("The Melancholy of Haruhi Suzumiya", "Nagaru Tanigawa", 206, false),
    new Book("No Game No Life", "Yuu Kamiya", 176, true),
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'Completed' : 'Not Completed yet';
}

function addBookToLibrary() {
    return myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked));
}

window.onload = refreshLibrary();

function refreshLibrary() {
    clearLibrary() 
    myLibrary.forEach(book => {
        let card = document.createElement("div");
        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('p');

        card.className = 'card shadow';
        title.className = 'card-title';
        author.className = 'card-author';
        pages.className = 'card-pages';
        read.className = 'card-read';

        title.innerText = book.title;
        author.innerText = `Written by ${book.author}`;
        pages.innerText = `Pages: ${book.pages}`;
        read.innerText = book.read;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        libraryList.appendChild(card);
    })
}

function clearLibrary() {
    while (libraryList.firstChild) {
        libraryList.removeChild(libraryList.lastChild);
  }
}

function openForm() {
    newBookForm.style.display = "flex";
    newBookBtn.style.display = 'none';
}
function closeForm() {
    newBookForm.style.display = "none";
    newBookBtn.style.display = 'block';
}