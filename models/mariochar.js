const mongoose = require('mongoose');

// Create a Schema and a Model

const mariocharSchema = new mongoose.Schema({
    name: String,
    weight: Number
});

module.exports = mongoose.model('Mariochar', mariocharSchema);