var should = require('chai').should();
// var sourceCode = require('../src/sourceCode');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1, 2, 3].indexOf(2).should.equal(1);
    });
  });
});