const assert = require('assert');
const Mariochar = require('../models/mariochar');

describe('saving records', function() {
    // Create tests
  it('Saves a record to the database', function(done){

    const char = new Mariochar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });

  });
});