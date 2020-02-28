#!/usr/bin/env node
'use strict';
const storage = require('./lib/storage');
const colors = require('colors');

const  add = async (title, author) => {
    await storage.addBook(title, author);
    console.log('Book has been added!');
};

const displayBooks = (books) => {
    console.log(`${colors.bold('Title')}\t\t${colors.bold('Author')}`);
    console.log('-------------------------------------------------------------');
    books.forEach((book) => {
        console.log(`${colors.bold(book.title)} - ${book.author}`);
    });
    console.log('-------------------------------------------------------------');
};

const listByYear = (year) => {
    console.log('');
    console.log(`Books Read in ${year}`);
    storage.getBooks(year)
        .then(displayBooks);
};

// Initialize the storage mechanism
storage.init();

// Program definition
const program = require('commander');
program.version('1.0.0')
    .command('add <title> <author>')
    .description('Add a book to the bookshelf.  It is assumed you read the book in the current year.')
    .action(add);

program.command('list <year>')
    .description('Lists books read, by year')
    .action(listByYear);

program.parse(process.argv);

