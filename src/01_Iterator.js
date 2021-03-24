"use strict";
var Book = /** @class */ (function () {
    function Book(name) {
        this.name = name;
    }
    Book.prototype.getName = function () {
        return this.name;
    };
    return Book;
}());
var BookShelf = /** @class */ (function () {
    function BookShelf() {
        this.last = 0;
        this.books = [];
    }
    BookShelf.prototype.getBookAt = function (index) {
        return this.books[index];
    };
    BookShelf.prototype.appendBook = function (book) {
        this.books[this.last] = book;
        this.last++;
    };
    BookShelf.prototype.getLength = function () {
        return this.last;
    };
    BookShelf.prototype.iterator = function () {
        return new BookShelfIterator(this);
    };
    return BookShelf;
}());
var BookShelfIterator = /** @class */ (function () {
    function BookShelfIterator(bookShelf) {
        this.bookShelf = bookShelf;
        this.index = 0;
    }
    BookShelfIterator.prototype.hasNext = function () {
        if (this.index < this.bookShelf.getLength()) {
            return true;
        }
        return false;
    };
    BookShelfIterator.prototype.next = function () {
        var book = this.bookShelf.getBookAt(this.index);
        this.index++;
        return book;
    };
    return BookShelfIterator;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var bookShelf = new BookShelf();
        bookShelf.appendBook(new Book("Alpha"));
        bookShelf.appendBook(new Book("Barvo"));
        bookShelf.appendBook(new Book("Charlie"));
        bookShelf.appendBook(new Book("Delta"));
        var iterator = bookShelf.iterator();
        while (iterator.hasNext()) {
            console.log(iterator.next().getName());
        }
    };
    return Main;
}());
var main = new Main();
main.main();
//# sourceMappingURL=01_Iterator.js.map