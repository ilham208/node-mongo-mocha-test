const assert = require('assert');
const Mariochar = require('../models/mariochar');

// Describe our tests
describe('Deleting records', () => {
  let char;
  // Add a character to the db before each tests
  beforeEach(done => {
    char = new Mariochar({
      name: 'Mario'
    });
    char.save().then(() => {
      done();
    });
  });

  // Create tests
  it('Deletes a record from the database', done => {
    Mariochar.findOneAndRemove({name: 'Mario'}).then(() => {
      Mariochar.findOne({name: 'Mario'}).then(result => {
        assert(result === null);
        done();
      });
    });
  });

});