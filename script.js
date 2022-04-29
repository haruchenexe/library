let Library = []

let LibraryInfos = {
    Book: function (author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.addBookToLibrary = function() {
            Library.push(this.author, this.title, this.pages, this.read)
        }
    }
}

let submitValue = document.getElementById('submit')
submitValue.addEventListener('click', formResults)

let row = 1;

function formResults(e) {
    let bookStorage = Object.create(LibraryInfos)
    let authorValue = document.getElementById('author').value;
    let titleValue = document.getElementById('title').value;
    let pageValue = document.getElementById('pages').value;
    let readValue = document.getElementById('readbook').value
    let displayValue = document.getElementById('display');
    let clearRow = document.getElementById('clearRow');

    if ((authorValue && titleValue) == "") {
        alert('Please fill in the form')
    } else {
        let clearBtn = document.createElement('button');
        clearBtn.setAttribute('id', 'clearBtn');
        clearBtn.setAttribute('value', 'Clear');
    
        let newRow = displayValue.insertRow(row);
        let authorCell = newRow.insertCell(0);
        let titleCell = newRow.insertCell(1);
        let pagesCell = newRow.insertCell(2);
        let readCell = newRow.insertCell(3);
        let clearCell = newRow.insertCell(4);
    
        bookStorage.Book(authorValue, titleValue, pageValue, displayValue)
        bookStorage.addBookToLibrary()
        
        if ((readValue == 'Read') || pageValue == '') {
            readCell.textContent = '✅'; 
            pagesCell.textContent = '0';
        }
        else {
            readCell.textContent = '❌';
            pagesCell.textContent = pageValue;
        }

        authorCell.textContent = authorValue;
        titleCell.textContent = titleValue;
        clearCell.appendChild(clearBtn);
        clearBtn.textContent = '🗑️';

        row++
        e.preventDefault()

        deleteRow()
    }
}

function refresh() {
    let allInputs = document.querySelectorAll('input');
    let submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', e=> {
        allInputs.forEach(input => input.value = '')
    })
}

refresh()

function deleteRow() {
    let index, table = document.getElementById('display');
    for(let i=0; i<table.rows.length; i++) {
        table.rows[i].cells[4].onclick = function() {
            let confirmation = confirm("Do you wish to delete row?")
            if (confirmation === true) {
                index = this.rowIndex;
                table.deleteRow(index)
            }
        }
    }
}


function authorInput() {
    const authorinputReq = document.getElementById('author');

    authorinputReq.addEventListener('input', () => {
        authorinputReq.setCustomValidity('');
        authorinputReq.checkValidity();
    });

    authorinputReq.addEventListener('invalid', () => {
        if(authorinputReq.value === '') {
            authorinputReq.setCustomValidity('Enter Author Name!');
        }
    })
}

authorInput();


function titleInput() {
    const titleinputReq = document.getElementById('title');

    titleinputReq.addEventListener('input', () => {
        titleinputReq.setCustomValidity('');
        titleinputReq.checkValidity();
    });

    titleinputReq.addEventListener('invalid', () => {
        if(titleinputReq.value === '') {
            titleinputReq.setCustomValidity('Enter Title Name!');
        }
    })
}


titleInput();













/* Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
author, title, number of pages, whether it’s been read and anything else you might want. */

// const newBook = document.querySelector('#newBook')
// newBook.addEventListener('click', e=> {
//     formTable()

//     // Prevents page from being directed to php page
//     const form = document.querySelector('form');
//     form.addEventListener('submit', e => {
//         e.preventDefault();
//     })
// })


// function formTable() {

//         // create a form when 'NEW BOOK' button is pressed
//         let formBase = document.createElement('form')
//         formBase.setAttribute('id', 'myForm');
//         formBase.setAttribute('method', 'post');
//         formBase.setAttribute('action', 'submit.php');

    
//         // Create an input element for the form
//         let authorName = document.createElement('input');
//         authorName.setAttribute('type', 'text');
//         authorName.setAttribute('name', 'Author');
//         authorName.setAttribute('placeholder', 'Author Name');

    
//         let bookTitle = document.createElement('input');
//         bookTitle.setAttribute('type', 'text');
//         bookTitle.setAttribute('name', 'Title');
//         bookTitle.setAttribute('placeholder', 'Title Name');
    
//         let numPages = document.createElement('input');
//         numPages.setAttribute('type', 'text');
//         numPages.setAttribute('name', 'Title');
//         numPages.setAttribute('placeholder', 'Pages');
    
//         let read = document.createElement('input');
//         read.setAttribute('type', 'text');
//         read.setAttribute('name', 'Title');
//         read.setAttribute('placeholder', 'Read');
        
//         // Create a submit button
//         let submitBtn = document.createElement('input');
//         submitBtn.setAttribute('type', 'submit');
//         submitBtn.setAttribute('value', 'Submit');
//         // submitBtn.setAttribute('')
    
//         formBase.append(authorName)
//         formBase.append(bookTitle)
//         formBase.append(numPages)
//         formBase.append(read)
//         formBase.append(submitBtn)
        
//         document.getElementsByTagName('div')[1].appendChild(formBase)
// }
