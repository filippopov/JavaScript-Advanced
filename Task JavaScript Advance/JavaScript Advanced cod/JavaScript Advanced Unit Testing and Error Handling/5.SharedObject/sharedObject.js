


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe('shareObj', function () {
    before(()=>global.$ = $);
    describe('change name function', function () {
        it('should return null', function () {
            expect(sharedObject.name).to.be.null;
        })
    });

    it ('shuld return null', function () {
        expect(sharedObject.income).to.be.null;
    });

    describe('change name function', function () {
        it('should return number for member parameter', function () {
            sharedObject.changeName(15);
            expect(sharedObject.name).to.be.equal(15);
            expect($('#name').val()).to.be.equal("15");
        });
        it("should return previous name for empty string parameter", function () {
            sharedObject.changeName("Pesho1");
            sharedObject.changeName("");
            expect(sharedObject.name).to.be.equal("Pesho1");
            expect($('#name').val()).to.be.equal("Pesho1");
        });
        it("should return new name after calling the function more than one time", function () {
            sharedObject.changeName("Pesho1");
            sharedObject.changeName("Gosho1");
            expect(sharedObject.name).to.be.equal("Gosho1");
            expect($('#name').val()).to.be.equal("Gosho1");
        });
    })

    describe("updateName function", function () {
        it("should successfully change name with non empty string", function () {
            sharedObject.changeName("Pesho1");
            $("#name").val("Gosho1");
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("Gosho1");
            expect($("#name").val()).to.be.equal("Gosho1");
        });
        it("should not change name with empty string", function () {
            sharedObject.changeName("Pesho1");
            $("#name").val("");
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("Pesho1");
            expect($("#name").val()).to.be.equal("");
        });
    });

    describe("updateIncome function", function () {
        it("should return previous value if value is NaN", function () {
            sharedObject.changeIncome(15);
            $("#income").val("abc");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(15);
            expect($("#income").val()).to.be.equal("abc");
        });
        it("should return previous value if value is floating point number", function () {
            sharedObject.changeIncome(15);
            $("#income").val("3.6");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(15);
            expect($("#income").val()).to.be.equal("3.6");
        });
        it("should return previous value if value is negative number", function () {
            sharedObject.changeIncome(15);
            $("#income").val("-10");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(15);
            expect($("#income").val()).to.be.equal("-10");
        });
        it("should return previous value if value is 0", function () {
            sharedObject.changeIncome(15);
            $("#income").val("0");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(15);
            expect($("#income").val()).to.be.equal("0");
        });
        it("should return correct value id value is positive integer", function () {
            sharedObject.changeIncome(15);
            $("#income").val("20");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(20);
            expect($("#income").val()).to.be.equal("20");
        })
    });
});


