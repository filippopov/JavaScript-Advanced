let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe('isOddOrEven', function () {
    it('with a number parameter, should return undefind', function () {
        expect(isOddOrEven(13)).to.equal(undefined, 'Function did not return the currect result!');
    })

    it('with a number parameter, should return undefind', function () {
        expect(isOddOrEven({name: 'Pesho'})).to.equal(undefined, 'Function did not return the currect result!');
    })

    it('with an even length string, should return correct result', function () {
        assert.equal(isOddOrEven('roar'), 'even');
    })

    it('with an odd length string should return correct result', function () {
        expect(isOddOrEven('pesho')).to.equal('odd');
    })

    it('with multiple constructive checks, should return correct value', function () {
        expect(isOddOrEven('cat')).to.equal('odd');
        expect(isOddOrEven('alabala')).to.equal('odd');
        expect(isOddOrEven('is it even')).to.equal('even');
    })
});

