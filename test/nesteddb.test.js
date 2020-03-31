const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe our tests
describe('Nesting schemas', function(){

    beforeEach(done => {
        // Drop the collection
        mongoose.connection.collections.authors.drop(() => {
            done();
        });
    });

    // Create tests
    it('Creates an author with sub-documents', done => {

        let pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(() => {
            Author.findOne({name: 'Patrick Rothfuss'}).then(result => {
                assert(result.books.length === 1);
                done();
            });
        });

    });

    it('Adds a book to an author', done => {

        let pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(() => {
            Author.findOne({name: 'Patrick Rothfuss'}).then(result => {
                // add a book to the books collection
                result.books.push({title: "Wise Man's Fear", pages: 500});
                result.save().then(() => {
                    Author.findOne({name: 'Patrick Rothfuss'}).then(result => {
                        assert(result.books.length === 2);
                        done();
                    });
                });
            });
        });

    });

});