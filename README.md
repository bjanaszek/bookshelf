# Bookshelf
> A command line book list written in NodeJS

## Introduction
This is mostly just an excuse to learn more about NodeJS CLI apps, async/await, and some other stuff.

At the moment, it allows you to add books (title, author) to the "bookshelf" and retrieve those books as a list.  The list can be filtered by year read.

## Installation
First, install the dependencies: ```npm install```

Next, install the app itself: ```npm install -g ./```

## Usage
You can always view the usage via ```bookshelf --help```

To add a book: ```bookshelf "Book Title" "Author's Name"```

To view books read by year: ```bookshelf list 2020```