const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    puchline: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now
    },
    updated: { 
        type: Date, default: Date.now }
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
