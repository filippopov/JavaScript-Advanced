class Stringer {
    constructor(name, length){
        this.innerString = name;
        this.innerLength = length;
    }

    increase(length){
        if (typeof length === 'number') {
            this.innerLength += length;
        }
    }

    decrease(length){
        if (typeof length === 'number') {
            this.innerLength -= length;

            this.innerLength = this.innerLength < 0 ? 0 : this.innerLength;
        }
    }

    toString(){
        return this.innerString.substring(0, this.innerLength) + (this.innerString.length <= this.innerLength ? '' : '...');
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
