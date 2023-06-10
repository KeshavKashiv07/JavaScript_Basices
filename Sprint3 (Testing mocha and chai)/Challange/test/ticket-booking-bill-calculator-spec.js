const expect = require('chai').expect;
const solution = require('../solution/ticket-booking-bill-calculator');

describe('solution', function () {
    it('should have function getPerTicketPriceBySeatType()', function () {
        expect(typeof solution.getPerTicketPriceBySeatType).to.be.equal('function');
    });
    it('should have function calculateTotalTicketAmount()', function () {
        expect(typeof solution.calculateTotalTicketAmount).to.be.equal('function');
    });
    it('should have function getPerComboPrice()', function () {
        expect(typeof solution.getPerComboPrice).to.be.equal('function');
    });
    it('should have function calculateTotalComboAmount()', function () {
        expect(typeof solution.calculateTotalComboAmount).to.be.equal('function');
    });
    it('should have function calculateTotalBillAmount()', function () {
        expect(typeof solution.calculateTotalBillAmount).to.be.equal('function');
    });
});


describe('getPerTicketPriceBySeatType', function() {
    it('should return per ticket price for Gold seat', function() {
        const seatPrice = solution.getPerTicketPriceBySeatType("Gold");
        expect(seatPrice).to.be.equal(6.0);
    });
    it('should return error massage "Invalid Seat Type" for invalid seat value', function() {
        const seatPrice = solution.getPerTicketPriceBySeatType("upperSeat");
        expect(seatPrice).to.be.equal("Invalid Seat Type");
    });    
});

describe('calculateTotalTicketAmount', function() {
    it('should return total ticket amount for 2 Silver seats', function() {
        const ticketAmt = solution.calculateTotalTicketAmount("Silver" , 2);
        expect(ticketAmt).to.be.equal(10.0);
    });
    it('should return error message if ticket count is zero', function() {
        const ticketAmt = solution.calculateTotalTicketAmount("Gold" , 0);
        expect(ticketAmt).to.be.equal("Incorrect Input, TicketCount cannot be Zero or Negative !!");
    });
    it('should return error message if seat type is invalid', function() {
        const ticketAmt = solution.calculateTotalTicketAmount("UpperSeat" , 5);
        expect(ticketAmt).to.be.equal("Invalid Seat Type");
    });
});

describe('getPerComboPrice', function() {
    it('should return price for Combo seat', function() {
        const comboPrice = solution.getPerComboPrice("Combo-3");
        expect(comboPrice).to.be.equal(8.5);
    });
    it('should return error message `Invalid Combo Type` for invalid combo type value', function() {
        const comboPrice = solution.getPerComboPrice("Combo-5");
        expect(comboPrice).to.be.equal("Invalid Combo Type");
    });
    
});

describe('calculateTotalComboAmount', function() {
    it('should return total amount for 3 Combo-2', function() {
        const comboTicketAmt = solution.calculateTotalComboAmount("Combo-2" , 3);
        expect(comboTicketAmt).to.be.equal(13.5);
    });
    it('should return error message if combo count is zero', function() {
        const comboTicketAmt = solution.calculateTotalComboAmount("Combo-3" , 0);
        expect(comboTicketAmt).to.be.equal("Incorrect Input, ComboCount cannot be Zero or Negative !!");
    });
    it('should return error message if combo type is invalid', function() {
        const comboTicketAmt = solution.calculateTotalComboAmount("Combo-5" , 5);
        expect(comboTicketAmt).to.be.equal("Invalid Combo Type");
    });
});

describe('calculateTotalBillAmount', function() {
    it('should return total booking amount for 2 Platinum seats and 1 Combo-3', function() {
        const totalTicketBillAmt = solution.calculateTotalBillAmount("Platinum", 2 ,"Combo-3" , 1);
        expect(totalTicketBillAmt).to.be.equal(24.5);
    });
    it('should return error message if ticket count is negative', function() {
        const totalTicketBillAmt = solution.calculateTotalBillAmount("Gold", 0 ,"Combo-1" , 1);
        expect(totalTicketBillAmt).to.be.equal("Incorrect Input, TicketCount and ComboCount cannot be Zero or Negative !!");
    });
    it('should return error message if combo count is negative', function() {
        const totalTicketBillAmt = solution.calculateTotalBillAmount("Silver", 3 ,"Combo-3" , 0);
        expect(totalTicketBillAmt).to.be.equal("Incorrect Input, TicketCount and ComboCount cannot be Zero or Negative !!");
    });
});