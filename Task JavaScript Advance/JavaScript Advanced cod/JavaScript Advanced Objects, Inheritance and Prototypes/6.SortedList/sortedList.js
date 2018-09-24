function collectionFunc() {
    let collection = [];
    let size = 0;

    function add(number) {
        collection.push(number);
        this.size++;
        return collection.sort((a, b) => a - b);
    }

    function remove(index) {
        if (index < 0 || index > collection.length - 1) {
            return false;
        }

        this.size--;

        collection.splice(index, 1);
        return collection;
    }
    
    function get(index) {
        if (index < 0 || index > collection.length - 1) {
            return false;
        }

        return collection[index];
    }


    return {add, remove, get, size};
}

let collection = collectionFunc();

console.log(collection.get(0));
// console.log(collection.add(5));
// console.log(collection.add(1));
// console.log(collection.add(2));
// console.log(collection.add(-10));
// console.log(collection.remove(-1));
// console.log(collection.get(2));

console.log(collection.size);