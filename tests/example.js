var should = require('chai').should();
var Example = require('../src/example.js');

describe('Example', function() {

  it('should return it\'s name', function() {
    Example.getName().should.equal('Example');
  });

  it('should not have access to helper function', function() {
    // We can't use the following
    // Example.helperFunctionToCapitalizeAString.should.equal(undefined)
    // because of the way 'should' works.
    // It adds the 'should' property to all objects. Since undefined
    // is not an object, it doesn't get that property.
    should.equal(Example.helperFunctionToCapitalizeAString, undefined);
  });
  
  it('should be able to return capitized name', function() {
    Example.getCapitalizedName().should.equal('EXAMPLE');
  });

});
