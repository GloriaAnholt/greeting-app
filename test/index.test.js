/** Created by Gloria on 10/18/16. **/

var assert = require('assert');
var chai = require('chai');
var sayHello = require('../greeter');
var cmd = require('../index');


describe('index', function() {
  // Set-up all of the variables that will be used by each test!

  it('greets a console user providing an empty string', function() {
    // call the index with an empty string
    var child = require('child_process')
      .execSync('node index.js');
    var greeting = child.toString();
    assert.equal(greeting, 'Hello!\n');
  });

  it('greets a console user by the name provided', function() {
    // call the index with provided parameters

    // Grab the last argument passed to this script
    var name = process.argv[(process.argv.length - 1)];
    // If it contains a .js, it's a path, so don't use it. Else, assume it's a name.
    if (name.indexOf('.js') > -1) {
      name = '';
    }
    var child = require('child_process')
      .execSync('node index.js ' + '"' + name + '"');
    var greeting = child.toString();
    assert.equal(greeting, 'Hello ' + name + '!\n');
  });
});