class Main{
    constructor(){
        this.title = "";
        this.author = "";
        this.bookshelf = [];
    }

    addBook(book,author){
        this.bookshelf.push({title:book, author:author})
    }

    removeBook(book){
        for(var i = 0; i < this.bookshelf.length; i++){
            if(this.bookshelf[i].title === book){
                this.bookshelf.splice(i,1);
            }   
        }
    }
}

var mainBook = new Main()