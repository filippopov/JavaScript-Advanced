let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('test math enforcer', function () {
    describe('addFive', function () {
        it('test addFive with non number value (should return undefined)', function () {
            expect(mathEnforcer.addFive('string')).to.be.undefined;
        });

        it('test addFive with number (should return correct answer)', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });

        it('test addFive with floating point number (should return currect answer)', function () {
            expect(mathEnforcer.addFive(5.1)).to.be.closeTo(10.1, 0.01);
        });

        it('test addFive with negative number (should return cerrect answer)', function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
    });

    describe('subtractTen', function () {
        it('test subtractTen with non number value (should return undefined)', function () {
            expect(mathEnforcer.subtractTen({name:'pesho'})).to.be.undefined;
        });

        it('test subtractTen with number (should return correct value)', function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });

        it('test addFive with floating point number (should return currect answer)', function () {
            expect(mathEnforcer.subtractTen(20.1)).to.be.closeTo(10.1, 0.01);
        });

        it('test addFive with negative number (should return cerrect answer)', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
    });

    describe('sum', function () {
        it('test first parameter with non number value', function () {
            expect(mathEnforcer.sum('number', 5)).to.be.undefined;
        });

        it('test first parameter with non number value', function () {
            expect(mathEnforcer.sum(5, 'number')).to.be.undefined;
        });

        it('test sum (shuld return currect result)', function () {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        })

        it('test addFive with floating point number (should return currect answer)', function () {
            expect(mathEnforcer.sum(5.2, 10.1)).to.be.closeTo(15.3, 0.01);
        });

        it('test addFive with negative number (should return cerrect answer)', function () {
            expect(mathEnforcer.sum(-5, -10)).to.be.equal(-15);
        });

    })
});
