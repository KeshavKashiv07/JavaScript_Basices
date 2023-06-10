// 
const expect = require('chai').expect;
const solution = require('../solution/script');

describe('solution', function () {
    it('should have function display()', function () {
        expect(typeof solution.display).to.be.equal('function');
    });

});

describe('display', function() {
    it('should return String msg', function() {
        const msg = solution.display();
        expect(msg).to.be.equal(); });
    });