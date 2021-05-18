const libraryList = document.querySelector('#library-list');

// submitInput.addEventListener('click', () => {
//     addBookToLibrary();
//     refreshLibrary();
//     closeForm();
// })

let myLibrary = [
    new Book("The Melancholy of Haruhi Suzumiya", "Nagaru Tanigawa", 206, false),
    new Book("No Game No Life", "Yuu Kamiya", 176, true),
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const titleInput = document.querySelector('#input-title');
    const authorInput = document.querySelector('#input-author');
    const pagesInput = document.querySelector('#input-pages');
    const readInput = document.querySelector('[data-read]');
    return myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked));
}

window.onload = refreshLibrary();

function refreshLibrary() {
    clearLibrary() 
    myLibrary.forEach(book => {
        libraryList.appendChild(updateCard(book));
    })
    libraryList.appendChild(addCardOptional())
}

function updateCard(book) {
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

    if (!book.read) card.classList.add('card-notcompleted');
    else card.classList.add('card-completed');
    title.innerText = book.title;
    author.innerText = `Written by ${book.author}`;
    pages.innerText = `Pages: ${book.pages}`;
    read.innerText = book.read ? 'Completed' : 'Not Completed yet';

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    return card;
}

function addCardOptional() {
    let form = document.createElement('form');
    form.innerHTML = `<div class="form-input">
            <label for="input-title">Title: </label>
            <input type="text" name="input-title" id='input-title'>
        </div>
        <div class="form-input">
            <label for="input-author">Author: </label>
            <input type="text" name="input-author" id='input-author'>            
        </div>
        <div class="form-input">
            <label for="input-pages">Pages: </label>
            <input type="text" name="input-pages" id='input-pages'>
        </div>
        <div class="form-input">
            <label for="input-read">Completed: </label>
            <input type="checkbox" name="input-read" data-read>
        </div>
        <button type="button" id='submitInputBtn'>Submit</button>`
    return form;
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