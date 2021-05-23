const libraryList = document.querySelector('#library-list');
const newBookForm = document.querySelector('#form-popup');

// submitInput.addEventListener('click', () => {
//     addBookToLibrary();
//     refreshLibrary();
//     closeForm();
// })

document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'addButton'){
          openForm();
     }
 });

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
    libraryList.appendChild(addCardBtn())
}

function updateCard(book) {
    let card = document.createElement("div");
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let readContainer = document.createElement('div')
    let read = document.createElement('button');

    card.className = 'card shadow';
    title.className = 'card-title';
    author.className = 'card-author';
    pages.className = 'card-pages';
    readContainer.className = 'card-read'
    read.className = 'card-readBtn';

    if (!book.read) card.classList.add('card-notcompleted');
    else card.classList.add('card-completed');
    title.innerText = book.title;
    author.innerText = `Written by ${book.author}`;
    pages.innerText = `Pages: ${book.pages}`;
    read.innerText = book.read ? 'Completed' : 'Not Completed yet';

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    readContainer.appendChild(read);
    card.appendChild(readContainer);

    return card;
}

function addCardBtn() {
    let btn = document.createElement('div');
    let plusSvg = document.createElement('img');
    btn.id = 'addButton';
    btn.classList.add('shadow');
    plusSvg.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM0OS4wMyAzNDkuMDMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0zNDkuMDMsMTQxLjIyNnY2Ni41NzljMCw1LjAxMi00LjA2MSw5LjA3OS05LjA3OSw5LjA3OUgyMTYuODg0djEyMy4wNjdjMCw1LjAxOS00LjA2Nyw5LjA3OS05LjA3OSw5LjA3OWgtNjYuNTc5ICAgYy01LjAwOSwwLTkuMDc5LTQuMDYxLTkuMDc5LTkuMDc5VjIxNi44ODRIOS4wNzljLTUuMDE2LDAtOS4wNzktNC4wNjctOS4wNzktOS4wNzl2LTY2LjU3OWMwLTUuMDEzLDQuMDYzLTkuMDc5LDkuMDc5LTkuMDc5ICAgaDEyMy4wNjhWOS4wNzljMC01LjAxOCw0LjA2OS05LjA3OSw5LjA3OS05LjA3OWg2Ni41NzljNS4wMTIsMCw5LjA3OSw0LjA2MSw5LjA3OSw5LjA3OXYxMjMuMDY4aDEyMy4wNjcgICBDMzQ0Ljk3LDEzMi4xNDcsMzQ5LjAzLDEzNi4yMTMsMzQ5LjAzLDE0MS4yMjZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==';
    btn.addEventListener('click', openForm);
    btn.appendChild(plusSvg);
    return btn;
}

function clearLibrary() {
    while (libraryList.firstChild) {
        libraryList.removeChild(libraryList.lastChild);
    }
}

function openForm() {
    newBookForm.style.display = "flex";
}
function closeForm() {
    newBookForm.style.display = "none";
}