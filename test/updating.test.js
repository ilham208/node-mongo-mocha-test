const assert = require('assert');
const Mariochar = require('../models/mariochar');

// Describe our tests
describe('Updating records', () => {
  let char;
  // Add a character to the db before each tests
  beforeEach(done => {
    char = new Mariochar({
      name: 'Mario',
      weight: 45
    });
    char.save().then(() => {
      done();
    });
  });

  // update test
  it('Updates a record in the database', done => {
    Mariochar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(() => {
        Mariochar.findOne({_id: char._id}).then(result => {
            assert(result.name === 'Luigi');
            done();
        });
    });
  });

    // increment test
    it('Increments a record in the database', done => {
        Mariochar.update({}, {$inc: {weight:1}}).then(() => {
            Mariochar.findOne({name: "Mario"}).then(result => {
                assert(result.weight === 46);
                done();
            });
        });
    });
});