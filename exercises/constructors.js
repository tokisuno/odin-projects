function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = () => {
    return `${this.title} by ${this.author} (${this.pages} pages.)`;
  };
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 300);

console.log(theHobbit.info());
console.log(theHobbit.valueOf());
