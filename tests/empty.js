var should = require('chai').should();
var {{moduleName}} = require('../src/{{moduleName}}');

describe('{{moduleName}}', function() {

  it('should exist', function() {
    // Usually you would test something like this:
    // {{moduleName}}.should.exist();
    // But...
    // The Chai libraries 'Should' functionality cannot be called
    // on 'null' or 'undefined'.
    // So you have to test existance this way:
    should.exist({{moduleName}});
  });

  it('write your own test here!', function() {
    true.should.equal(false);
  });
  
});
