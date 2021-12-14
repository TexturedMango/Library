const tableh = document.querySelector('#tableh')

let myLibrary = [
    {
        name: 'TestBook1',
        author: 'TestMan1',
        pages: 123,
        read: true
    },
    {
        name: 'TestBook2',
        author: 'TestMan2',
        pages: 666,
        read: false
    }
]
class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
function validateForm() {
    let title = document.formy.title.value;
    let author = document.formy.author.value;
    let pages = document.formy.pages.value;
    let read = document.formy.read.checked;

    if (title == "") {
        alert("Title must be filled out");
        return false;
    }
    if (author == "") {
        alert("Author must be filled out");
        return false;
    }
    if (pages == "") {
        alert("Pages must be filled out");
        return false;
    }
    if (isNaN(pages) || pages < 0 ) {
        alert("Pages must be a positive number")
        return false;
    }
    addBookToLibrary(title, author, pages, read);
    clearInput()
}
function addBookToLibrary (title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    let newRow = document.createElement('tr')
    let cell_1 = document.createElement('td')
    let cell_2 = document.createElement('td')
    let cell_3 = document.createElement('td')
    let cell_4 = document.createElement('td')
    cell_1.innerHTML = newBook.name
    cell_2.innerHTML = newBook.author
    cell_3.innerHTML = newBook.pages
    if (newBook.read == true) {
        cell_4.innerHTML = 'Yes'
    } else {cell_4.innerHTML = 'No'}

    let cell_5 = document.createElement('td')
    let newButton = document.createElement('button')
    newButton.innerHTML = "Remove"
    newButton.addEventListener('click', () => {newRow.remove()})
    cell_5.appendChild(newButton)

    spacer = document.createElement('span')
    spacer.innerHTML = ' '
    cell_5.appendChild(spacer)

    let markButton = document.createElement('button')
    markButton.innerHTML = "Toggle Read"
    markButton.addEventListener('click', () => {
        if (newBook.read == true) {
            newBook.read = false
            cell_4.innerHTML = 'No'
        } else {
            newBook.read = true
            cell_4.innerHTML = 'Yes'
        }
    })
    cell_5.appendChild(markButton)

    newRow.appendChild(cell_1)
    newRow.appendChild(cell_2)
    newRow.appendChild(cell_3)
    newRow.appendChild(cell_4)
    newRow.appendChild(cell_5)
    tableh.appendChild(newRow)
}

myLibrary.forEach((book) => {
    addBookToLibrary (book.name, book.author, book.pages, book.read)
})

function clearInput() {
    document.formy.title.value = ''
    document.formy.author.value = ''
    document.formy.pages.value = ''
    document.formy.read.checked = false
}

function debug() {
    myLibrary.forEach((book) => {
        console.log(book)
    })
}