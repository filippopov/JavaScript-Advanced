class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        this.shelf = [];
        this.room = room;

        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
    }

    set room(value) {
        let validateRoomArray = ['livingRoom', 'bedRoom', 'closet'];
        if (!validateRoomArray.includes(value)) {
            throw new Error(`Cannot have book shelf in ${value}`);
        }

        this._room = value;
    }

    get room(){
        return this._room;
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre = '') {
        if(this.shelfCondition <= 0) {
            this.shelf.shift();
        }

        this.shelf.push({bookName, bookAuthor, genre});
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter((a) => a.bookName != bookName);
        return this;
    }

    showBooks(genre){
        let resultArr = [];
        let result = `Results for search "${genre}":\n`;
        resultArr = this.shelf.filter((a) => a.genre === genre);

        for (let row of resultArr) {
            result += `\uD83D\uDCD6 ${row.bookAuthor} - "${row.bookName}"\n`;
        }

        return result;
    }

    toString(){
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        }

        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;

        for (let oneShelf of this.shelf) {
            result += `\uD83D\uDCD6 "${oneShelf.bookName}" - ${oneShelf.bookAuthor}\n`;
        }

        return result;
    }
}


let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));



// console.log(livingRoom.toString());

