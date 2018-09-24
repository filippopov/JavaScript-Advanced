class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat){
        if (rat instanceof Rat) {
            this.unitedRats.push(rat);
        }
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        let result = `${this.name}\n`
        for (let oneRat of this.unitedRats) {
            result += `##${oneRat.name}\n`;
        }

        return result.trim();
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
