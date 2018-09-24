const expect = require("chai").expect;
const createList = require("../addSwapShiftLeftRightList");


describe('Test createList', function () {
    let list = null;
    beforeEach(function() {
        list = createList();
    });

    describe('Test data', function () {
        it('check data', function () {
            expect(list.toString()).to.be.equal('');
        });
    });

    describe('Test add', function () {
        it('check data', function () {
            list.add(1);
            list.add("two");
            list.add({ivan: 'Ivan'});
            list.add(['ivan']);
            expect(list.toString()).to.be.equal('1, two, [object Object], ivan');
            list.add(1);
            expect(list.toString()).to.be.equal('1, two, [object Object], ivan, 1');
        });
    });

    describe('Test shiftLeft', function () {
        it('check shiftLeft', function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('two, 3, 1');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('3, 1, two');
        });
    });

    describe('Test shiftRight', function () {
        it('check shiftRight', function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.shiftRight();
            expect(list.toString()).to.be.equal('3, 1, two');
            list.shiftRight();
            expect(list.toString()).to.be.equal('two, 3, 1');
        });
    });

    describe('Test swap', function () {
        it('check swap', function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.swap(0, 2)).to.be.equal(true);
            expect(list.toString()).to.be.equal('3, two, 1');
            expect(list.swap(0, 1)).to.be.equal(true);
            expect(list.toString()).to.be.equal('two, 3, 1');
            expect(list.swap(1, 0)).to.be.equal(true);
            expect(list.toString()).to.be.equal('3, two, 1');
            expect(list.swap(2, 0)).to.be.equal(true);
            expect(list.toString()).to.be.equal('1, two, 3');
        });

        it('check swap', function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.swap(0, 0)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(1, 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(2, 2)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(-1, 2)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(2, -1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(0, 5)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(5, 0)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(-1, 10)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(10, -5)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap('ewfew', 0)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap(1, 'wqfdqwf')).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap({}, 'wqfdqwf')).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap('ewfew', {})).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap([], {})).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
            expect(list.swap({}, [])).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, two, 3');
        });
    });

});

    // function createList() {
    //     let data = [];
    //     return {
    //         add: function (item) {
    //             data.push(item)
    //         },
    //         shiftLeft: function () {
    //             if (data.length > 1) {
    //                 let first = data.shift();
    //                 data.push(first);
    //             }
    //         },
    //         shiftRight: function () {
    //             if (data.length > 1) {
    //                 let last = data.pop();
    //                 data.unshift(last);
    //             }
    //         },
    //         swap: function (index1, index2) {
    //             if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
    //                 !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
    //                 index1 === index2) {
    //                 return false;
    //             }
    //             let temp = data[index1];
    //             data[index1] = data[index2];
    //             data[index2] = temp;
    //             return true;
    //         },
    //         toString: function () {
    //             return data.join(", ");
    //         }
    //     };
    // }