const mongoose = require('mongoose');

// Create a Schema and a Model

const bookSchema = new mongoose.Schema({
    title: String,
    pages: Number
});

const authorSchema = new mongoose.Schema({
    name: String,
    books: [bookSchema]
});

module.exports = mongoose.model('Author', authorSchema);

