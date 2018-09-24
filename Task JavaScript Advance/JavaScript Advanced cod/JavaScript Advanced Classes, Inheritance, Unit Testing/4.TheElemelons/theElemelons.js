function solve() {
    class Melon{
        constructor(weight, melonSort){
            if (new.target === Melon){
                throw new TypeError('Abstract class cannot be instantiated directly');
            }

            this.weight = Number(weight);
            this.melonSort = melonSort;
        }

    }

    class Watermelon extends  Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = Number(this.weight) * Number(this.melonSort.length);
        }

        toString(){
            return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Firemelon extends  Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = Number(this.weight) * Number(this.melonSort.length);
        }

        toString(){
            return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Earthmelon extends  Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = Number(this.weight) * Number(this.melonSort.length);
        }

        toString(){
            return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Airmelon extends  Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = Number(this.weight) * Number(this.melonSort.length);
        }

        toString(){
            return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends  Watermelon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = Number(this.weight) * Number(this.melonSort.length);
            this.currentState = 'Water';
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        }

        morph(){
            this.currentState = this.elements.shift();
            this.elements.push(this.currentState);
        }

        toString(){
            return `Element: ${this.currentState}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    return{
        Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon
    };
}


let test = solve();

let Melolemonmelon = test.Melolemonmelon;

let melObj = new Melolemonmelon(150, 'Melo');
melObj.morph();
melObj.morph();
console.log(melObj);