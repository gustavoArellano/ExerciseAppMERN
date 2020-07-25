const mongoose = require('mongoose');

// TO CREATE SCHEMA
const Schema = mongoose.Schema;

// THE MODEL
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, 
// TIMESTAMP FOR WHEN IT WAS CREATED AND MODIFIED
{ timestamps: true});

// PLACE THE USER MODEL IN 'USER' VARAIBLE
const User = mongoose.model('User', userSchema);

// EXPORT THE MODEL TO BECOME AVAILALBE
module.exports = User;

