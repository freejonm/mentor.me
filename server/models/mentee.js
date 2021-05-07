const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const strategy = require('../passport/localStrategy')
mongoose.promise = Promise;

// Define userSchema
const menteeSchema = new Schema({

    isLookingForMentor: {type: Boolean, unique: false, required:false},
    timeCommitment: [{ type: String, unique:false, required:false}],
	commPrefs: [{ type: String, unique:false, required:false}],
    learningAbout: [{type: String, unique:false, required:false}],
});

// Create reference to User & export
const Mentee = mongoose.model('Mentee', menteeSchema);
module.exports = Mentee;
