const expect = require("chai").expect;
const should = require('chai').should;
const Calculator = require("../solution");


describe('Test Calculator', function () {
    let calc = null;
    beforeEach(function() {
        calc = new Calculator();
    });

    describe('Test constructor', function () {
        it('check expenses', function () {
            expect(calc.expenses).to.be.eql([]);
        });
    });

    describe('Test add', function () {
        it('check add', function () {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add([]);
            calc.add({});

            expect(calc.expenses.length).to.be.equal(5);
        });

        it('check add', function () {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add([]);
            calc.add({});
            expect(calc.toString()).to.be.equal('10 -> Pesho -> 5 ->  -> [object Object]');
        });
    });

    describe('Test divideNums', function () {
        it('check add', function () {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(10);
            expect(calc.divideNums()).to.be.equal(1);
        });

        it('check add', function () {
            calc.add(10);
            calc.add(0);
            expect(calc.divideNums()).to.be.equal('Cannot divide by zero');
        });

        it('check add', function () {
            calc.add(10);
            calc.add('fwefwefewfw');
            expect(calc.divideNums()).to.be.equal(10);
        });

        it('check add', function () {
            calc.add("Pesho");
            calc.add("regregre");
            expect(function(){
                calc.divideNums()
            }).to.throw(Error, 'There are no numbers in the array!');
        });
    })

    describe('Test orderBy', function () {
        it('check orderBy', function () {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(10);
            expect(calc.orderBy()).to.be.equal('10, 10, 5, Pesho');
        });

        it('check orderBy', function () {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(10);
            calc.divideNums();
            expect(calc.orderBy()).to.be.equal('1');
        });


        it('check orderBy', function () {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(10);
            calc.add({'Pesho': 'Pesho'});
            calc.add([]);
            expect(calc.orderBy()).to.be.equal(', 10, 10, 5, Pesho, [object Object]');
        });
    })

    describe('Test to string', function () {
        it('check toString', function () {

            expect(calc.toString()).to.be.equal('empty array');
        });

        it('check toString', function () {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(10);
            calc.add([]);
            calc.add({'Pesho': 'Pesho'});

            expect(calc.toString()).to.be.equal('10 -> Pesho -> 5 -> 10 ->  -> [object Object]');
        });
    })

});

// it('check add', function () {
//     calc.add("Pesho");
//     calc.add("regregre");
//     calc.divideNums().should.throw(Error, 'There are no numbers in the array!');
// });

// it('check add', function () {
//     calc.add("Pesho");
//     calc.add("regregre");
//     expect(calc.divideNums()).to.equal('There are no numbers in the array!');
// });

// it('check add', function () {
//
//     should.exist(calc.divideNums()).and.be.an.instanceOf(Error).with.property('message', 'There are no numbers in the array!');
// });


// class Calculator {
//     constructor() {
//         this.expenses = [];
//     }
//
//     add(data) {
//         this.expenses.push(data);
//     }
//
//     divideNums() {
//         let divide;
//         for (let i = 0; i < this.expenses.length; i++) {
//             if (typeof (this.expenses[i]) === 'number') {
//                 if (i === 0 || divide===undefined) {
//                     divide = this.expenses[i];
//                 } else {
//                     if (this.expenses[i] === 0) {
//                         return 'Cannot divide by zero';
//                     }
//                     divide /= this.expenses[i];
//                 }
//             }
//         }
//         if (divide !== undefined) {
//             this.expenses = [divide];
//             return divide;
//         } else {
//             throw new Error('There are no numbers in the array!')
//         }
//     }
//
//     toString() {
//         if (this.expenses.length > 0)
//             return this.expenses.join(" -> ");
//         else return 'empty array';
//     }
//
//     orderBy() {
//         if (this.expenses.length > 0) {
//             let isNumber = true;
//             for (let data of this.expenses) {
//                 if (typeof data !== 'number')
//                     isNumber = false;
//             }
//             if (isNumber) {
//                 return this.expenses.sort((a, b) => a - b).join(', ');
//             }
//             else {
//                 return this.expenses.sort().join(', ');
//             }
//         }
//         else return 'empty';
//     }
// }
