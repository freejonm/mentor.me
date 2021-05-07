const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const strategy = require('../passport/localStrategy')
mongoose.promise = Promise;

// Define userSchema
const menteeSchema = new Schema({
    technologiesInterestedIn: [{ type: String, unique:false, required: false}],
    isLookingForMentor: {type: Boolean, unique: false, required: false, default: true},
    hoursSpentWithMentor: {type: Number, unique: false, required: false, default: 0},
    meetingsAttended: {type: Number, unique: false, required: false, default: 0}
});

// Create reference to User & export
const Mentee = mongoose.model('Mentee', menteeSchema);
module.exports = Mentee;
