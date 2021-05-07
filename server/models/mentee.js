const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const strategy = require('../passport/localStrategy')
mongoose.promise = Promise;

let ObjectId = Schema.ObjectId

// Define userSchema
const menteeSchema = new Schema({
    isLookingForMentor: {type: Boolean, unique: false, required:false},
    timeCommitment: [{ type: String, unique:false, required:false}],
	commPrefs: [{ type: String, unique:false, required:false}],
    learningAbout: [{type: String, unique:false, required:false}],
});

// Define schema methods
menteeSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};

// Define hooks for pre-saving
menteeSchema.pre('save', function(next) {
	if (!this.password) {
		// console.log('No password provided!');
		next();
	} else {
		this.password = this.hashPassword(this.password);
		next();
	}
})

// Create reference to User & export
const Mentee = mongoose.model('Mentee', menteeSchema);
module.exports = Mentee;
