const expect = require("chai").expect;
const SubscriptionCard = require("../subscriptionCard");


describe('Test subscriptionCard', function () {
    let card = null;
    beforeEach(function() {
        card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
    });

    it('check subcrition initilase', function () {
        expect(card.firstName).to.be.equal('Pesho');
        expect(card.lastName).to.be.equal('Petrov');
        expect(card.SSN).to.be.equal('00000000');
        expect(card.isBlocked).to.be.equal(false);
        expect(card._subscriptions).to.be.eql([]);
    });

    it('check firstName', function () {
        card.firstName = 'Ivan';
        expect(card.firstName).to.be.equal('Pesho');
    });

    it('check firstName', function () {
        card.lastName = 'Ivan';
        expect(card.lastName).to.be.equal('Petrov');
    });

    it('check firstName', function () {
        card.SSN = '00000001';
        expect(card.SSN).to.be.equal('00000000');
    });

    it('check isBlocked', function () {
        card.isBlocked = true;
        expect(card.isBlocked).to.be.equal(false);
    });

    it('check addSubscription', function () {
        card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        expect(card._subscriptions[0].line).to.be.equal('120');
        expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
        expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
    });

    it('check addSubscription', function () {
        card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        expect(card._subscriptions[0].line).to.be.equal('120');
        expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
        expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
        expect(card._subscriptions[1].line).to.be.equal('*');
        expect(card._subscriptions[1].startDate).to.be.eql(new Date('2018-05-25'));
        expect(card._subscriptions[1].endDate).to.be.eql(new Date('2018-06-24'));
    });

    it('check isBlocked', function () {
        card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        expect(card.isBlocked).to.be.equal(false);
        card.block();
        expect(card.isBlocked).to.be.equal(true);
        card.unblock();
        expect(card.isBlocked).to.be.equal(false);
    });

    it('check isValid', function () {
        card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

        expect(card.isValid('121', new Date('2018-04-22'))).to.be.equal(false);
        expect(card.isValid('120', new Date('2018-04-21'))).to.be.equal(false);
        expect(card.isValid('120', new Date('2018-05-22'))).to.be.equal(false);
        expect(card.isValid('120', new Date('2018-05-20'))).to.be.equal(true);
    });

    it('check isValid', function () {
        card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));

        expect(card.isValid('123456543', new Date('2018-05-25'))).to.be.equal(true);
        expect(card.isValid('123456543', new Date('2018-06-24'))).to.be.equal(true);
        expect(card.isValid('123456543', new Date('2018-05-24'))).to.be.equal(false);
        expect(card.isValid('123456543', new Date('2018-06-25'))).to.be.equal(false);
    });

    it('check isValid', function () {
        card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        card.block();

        expect(card.isValid('123456543', new Date('2018-05-25'))).to.be.equal(false);
        card.unblock();
        expect(card.isValid('123456543', new Date('2018-05-25'))).to.be.equal(true);
    });



});






// class SubscriptionCard {
//     constructor(firstName, lastName, SSN) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._SSN = SSN;
//         this._subscriptions = [];
//         this._blocked = false;
//     }
//
//     get firstName() {
//         return this._firstName;
//     }
//
//     get lastName() {
//         return this._lastName;
//     }
//
//     get SSN() {
//         return this._SSN;
//     }
//
//     get isBlocked() {
//         return this._blocked;
//     }
//
//     addSubscription(line, startDate, endDate) {
//         this._subscriptions.push({
//             line,
//             startDate,
//             endDate
//         });
//     }
//
//     isValid(line, date) {
//         if (this.isBlocked) return false;
//         return this._subscriptions.filter(s => s.line === line || s.line === '*')
//             .filter(s => {
//                 return s.startDate <= date &&
//                     s.endDate >= date;
//             }).length > 0;
//     }
//
//     block() {
//         this._blocked = true;
//     }
//
//     unblock() {
//         this._blocked = false;
//     }
// }