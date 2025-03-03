let book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

Object.defineProperty(book, "summary", {
    get: function() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
});

console.log(book); // { title: "1984", author: "George Orwell", year: 1949 }
console.log(book.summary); // "1984 by George Orwell, published in 1949"
