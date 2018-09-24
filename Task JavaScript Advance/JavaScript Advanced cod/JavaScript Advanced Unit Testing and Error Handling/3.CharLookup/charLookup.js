let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}



describe('lookup Char test', function () {
    it('with a non string first parametur, shoul return undefiend', function () {
        expect(lookupChar(13, 5)).to.be.undefined;
    });

    it('with a non-number second parameter, should return undefined', function () {
        expect(lookupChar('pesho', 'gosho')).to.be.undefined;
    });

    it('with a floating point number second parameter, should return undefined', function () {
        expect(lookupChar('pesho', 3.12)).to.be.undefined;
    });

    it('with an incorrect index value, should return incorrect index', function () {
        expect(lookupChar('pesho', 13)).to.be.equal('Incorrect index');
    });

    it('with a negative index value, should return incorect index', function () {
        expect(lookupChar('stamat', -1)).to.be.equal('Incorrect index');
    });

    it('with an index value to string length, should return incorect index', function () {
        expect(lookupChar('pesho', 5)).to.be.equal('Incorrect index');
    });

    it('with correct parameters, should return correct value', function () {
        expect(lookupChar('pesho', 0)).to.be.equal('p');
    });

    it('with correct parameturs, should return correct value', function () {
       expect(lookupChar('pesho', 3)).to.be.equal('h');
    });
});
