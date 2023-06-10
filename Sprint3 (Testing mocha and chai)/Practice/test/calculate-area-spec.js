// Write test code here

const expect = require('chai').expect;
const solution = require('../solution/calculate-area-solution');

describe('solution', function () {
    it('should have function calculateAreaOfSquare()', function () {
        expect(typeof solution.calculateAreaOfSquare).to.be.equal('function');
    });
    it('should have function calculateAreaOfCircle()', function () {
        expect(typeof solution.calculateAreaOfCircle).to.be.equal('function');
    });
    it('should have function calculateAreaOfRectangle()', function () {
        expect(typeof solution.calculateAreaOfRectangle).to.be.equal('function');
    });
});


describe('calculateAreaOfSquare', function() {
    it('should return area of square for the valid input provided', function() {
        const areaOfsquare = solution.calculateAreaOfSquare(4);
        expect(areaOfsquare).to.be.equal(16);
    });

    it('should return message insufficient input if less than 1 parameter is passed', function() {
        const areaOfsquare = solution.calculateAreaOfSquare();
        expect(areaOfsquare).to.be.equal("Insufficient Input");
    });

    it('should return message invalid input type if the parameter is not a number', function() {
        const areaOfsquare = solution.calculateAreaOfSquare("keshav");
        expect(areaOfsquare).to.be.equal("Invalid Input Type, Side Should Be A Number !!");
    });

    it('should return message incorrect input if the value of the parameter is less than or equal to 0', function() {
        const areaOfsquare = solution.calculateAreaOfSquare(-20);
        expect(areaOfsquare).to.be.equal("Incorrect Input, Side Cannot Be Zero or Negative !!");
    });
});


describe('calculateAreaOfCircle', function() {
    it('should return area of circle for the valid input provided', function() {
        const areaOfcircle = solution.calculateAreaOfCircle(10);
        expect(areaOfcircle).to.be.equal(314);
    });

    it('should return message insufficient input if less than 1 parameter is passed', function() {
        const areaOfcircle = solution.calculateAreaOfCircle();
        expect(areaOfcircle).to.be.equal("Insufficient Input");
    });

    it('should return message invalid input type if the parameter is not a number', function() {
        const areaOfcircle = solution.calculateAreaOfCircle("keshav");
        expect(areaOfcircle).to.be.equal("Invalid Input Type, radius Should Be A Number !!");
    });

    it('should return message incorrect input if the value of the parameter is less than or equal to 0', function() {
        const areaOfsquare = solution.calculateAreaOfCircle(-20);
        expect(areaOfsquare).to.be.equal("Incorrect Input, radius Cannot Be Zero or Negative !!");
    });
});


describe('calculateAreaOfRectangle', function() {
    it('should return area of rectangle for the valid inputs provided`', function() {
        const areaOfRectangle = solution.calculateAreaOfRectangle(10 , 20);
        expect(areaOfRectangle).to.be.equal(200);
    });

    it('should return message insufficient input if less than 1 parameter is passed', function() {
        const areaOfRectangle = solution.calculateAreaOfRectangle();
        expect(areaOfRectangle).to.be.equal("Insufficient Input");
    });

    it('should return message invalid input type if the parameter is not a number', function() {
        const areaOfRectangle = solution.calculateAreaOfRectangle("keshav" , "ram");
        expect(areaOfRectangle).to.be.equal("Invalid Input Type, Length and Breadth Should Be Numbers !!");
    });

    it('should return message incorrect input if the value of the parameter is less than or equal to 0', function() {
        const areaOfRectangle = solution.calculateAreaOfRectangle(-20 , 0);
        expect(areaOfRectangle).to.be.equal("Incorrect Input, Length and Breadth Cannot Be Zero or Negative !!");
    });
});