const assert = require('assert');
const Mariochar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){
  let char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new Mariochar({
      name: 'Mario'
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Finds a record from the database', function(done){
    Mariochar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });
  });

    //with arrow functions
  it('Finds a record by unique id', done => {
    Mariochar.findOne({_id: char._id}).then(result => {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });

});