class SortedList {
    constructor(){
        this.collection = [];
        this.size = 0;
    }

    add(element){
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);
        this.size++;
    }

    remove(index){
        if (this.collection.length > index && index >= 0) {
            this.collection.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (this.collection.length > index && index >= 0) {
            return this.collection[index];
        }
    }
}

let sorted = new SortedList();
sorted.add(5);
sorted.add(1);
sorted.add(-6);
sorted.remove(1);
console.log(sorted.get(1));;
console.log(sorted);