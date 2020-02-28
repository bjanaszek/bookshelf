const { v1: uuidv1 } = require('uuid'),
    level = require('level');

let db;

const init = () => {
    db = level('books-db');
};
exports.init = init;

const addBook = (title, author) => {
    const date = new Date();

    let id = uuidv1(),
        book = { 
            title,
            author,
            createDate: Date.now(),
            year: date.getUTCFullYear()
        };

    return db.put(id, JSON.stringify(book));
};
exports.addBook = addBook;

const getBooks = async (year = null) => {
    let books = [];
    const rs = db.createReadStream();
    for await (const chunk of rs) {
        let book = JSON.parse(chunk.value);
        if (year !== null && book.year != year) {
            continue;
        } else {
            books.push(book);
        }
    }

    return books;
};
exports.getBooks = getBooks;
