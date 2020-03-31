const mongoose = require('mongoose');

//connecting db before mocha testing
before(function(done){
    mongoose.connect('mongodb://localhost:27017/testmocha', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('DB connected');
        done();
    })
})

// Drop the characters collection before each test
// with arrow function
beforeEach(done => {
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});