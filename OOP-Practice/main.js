class Main{
    constructor(){
        this.book = "";
        this.author = "";
        this.bookshelf = [];
    }

    addBook(book,author){
        this.bookshelf.push({book:book, author:author})
    }

    removeBook(){
        for(var i = 0; i < this.bookshelf.length; i++){

        }
    }
}

var book1 = new Main()
var book2 = new Main()