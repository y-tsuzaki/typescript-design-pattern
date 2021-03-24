interface MyIterator {
  hasNext(): boolean;
  next(): Object;
}
interface Aggregate {
  iterator(): MyIterator;
}

class Book {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class BookShelf implements Aggregate {
  private books: Book[];
  private last: number = 0;
  constructor() {
    this.books = [];
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  appendBook(book: Book) {
    this.books[this.last] = book;
    this.last++;
  }
  getLength(): number {
    return this.last;
  }
  iterator() {
    return new BookShelfIterator(this);
  }
}

class BookShelfIterator implements MyIterator {
  private bookShelf: BookShelf;
  private index: number;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    }
    return false;
  }

  next(): Book {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}

class Main {
  main() {
    const bookShelf = new BookShelf();
    bookShelf.appendBook(new Book("Alpha"));
    bookShelf.appendBook(new Book("Barvo"));
    bookShelf.appendBook(new Book("Charlie"));
    bookShelf.appendBook(new Book("Delta"));
    const iterator = bookShelf.iterator();

    while (iterator.hasNext()) {
      console.log(iterator.next().getName());
    }
  }
}

const main = new Main();
main.main();
