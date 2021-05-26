const libraryList = document.querySelector('#library-list');
const newBookForm = document.querySelector('#form-popup');
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

document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'addButton'){
          openForm();
     }
 });

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let myLibrary = [
    new Book("The Melancholy of Haruhi Suzumiya", "Nagaru Tanigawa", 206, false),
    new Book("No Game No Life", "Yuu Kamiya", 176, true),
];

function addBookToLibrary() {
    return myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked));
}

window.onload = refreshLibrary();

function refreshLibrary() {
    clearLibrary() 
    myLibrary.forEach((book, index) => {
        book.id = index;
        libraryList.appendChild(updateCard(book));
    })
    libraryList.appendChild(addCardBtn())
}

function toggleRead(book) {
    book.read = !book.read;
    refreshLibrary();
    return
}

function deleteCard(id) {
    myLibrary.splice(id, 1);
    refreshLibrary();
    return console.log('success')
}

function updateCard(book) {
    let card = document.createElement("div");
    let title = document.createElement('h1');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let ctrlContainer = document.createElement('div')
    let readBtn = document.createElement('button');
    let delBtn = document.createElement('i');

    title.textContent = book.title;
    author.textContent = `Written by ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    readBtn.textContent = book.read ? 'Completed' : 'Reading';

    card.className = 'card shadow';
    title.className = 'card-title';
    author.className = 'card-author';
    pages.className = 'card-pages';
    ctrlContainer.className = 'card-controls'
    readBtn.className = 'card-readBtn';
    delBtn.className = 'card-delBtn fas fa-trash'

    if (book.read) card.classList.add('card-notcompleted');
    else card.classList.add('card-completed');

    delBtn.addEventListener('click', () => deleteCard(book.id));
    readBtn.addEventListener('click', () => toggleRead(book))

    card.dataset.id = book.id;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    ctrlContainer.appendChild(readBtn);
    ctrlContainer.appendChild(delBtn);
    card.appendChild(ctrlContainer);

    return card;
}

function addCardBtn() {
    let btn = document.createElement('div');
    let plus = document.createElement('i');
    btn.id = 'addButton';
    btn.classList.add('shadow');
    btn.addEventListener('click', openForm);
    plus.className = "fas fa-plus-square fa-lg";
    plus.id = 'add-icon';
    btn.appendChild(plus);
    return btn;
}

function clearLibrary() {
    while (libraryList.firstChild) {
        libraryList.removeChild(libraryList.lastChild);
    }
}

function openForm() {
    newBookForm.classList.add('shown');
}
function closeForm() {
    newBookForm.classList.remove('shown');
}
