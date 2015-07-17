var helperFunctionToCapitalizeAString = function(string) {
  // This functio won't be accessible to the tests because it is not
  // being exported to module.exports. But we are free
  // to use it inside of this file.
  return string.toUpperCase();
};

// Anything we export is part of our module.
// We'll have access to it in any file that has the following at the top
// var moduleName = require('modulePath/moduleName');
// or
// var Example = require('../src/example.js'); In this example
var ExampleModule = function() {

  this.name = 'Example Module Name',

  getName: function() {
    return this.name;
  },

  getCapitalizeName: function() {
    return helperFunctionToCapitalizeAString(this.name);
  }

};

module.exports = ExampleModule();
