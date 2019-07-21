const mongoose = require('mongoose');

// TO CREATE SCHEMA
const Schema = mongoose.Schema;

// THE MODEL
const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
}, 
// TIMESTAMP FOR WHEN IT WAS CREATED AND MODIFIED
{ timestamp: true});

// PLACE THE EXERCISE MODEL IN 'EXERCISE' VARAIBLE
const Exercise = mongoose.model('Exercise', exerciseSchema);

// EXPORT THE MODEL TO BECOME AVAILALBE
module.exports = Exercise;