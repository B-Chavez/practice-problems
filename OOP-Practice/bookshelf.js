class Bookshelf{
    constructor(){
        this.bookshelf = mainBook.bookshelf;
        
    }

    placeOnPage(){
        for(var i = 0; i < this.bookshelf.length; i++){
            document.querySelector("#books").innerHTML += this.bookshelf[i].title + " ";
        }
        
    }
}

var myBookshelf = new Bookshelf();