const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const strategy = require('../passport/localStrategy')
mongoose.promise = Promise;

let ObjectId = Schema.ObjectId

// Define userSchema
const menteeSchema = new Schema({


    mentee: {type: Boolean, unique: false, required: true},
    technologiesInterestedIn: [{ type: String, unique:false, required: false}],
    gradYear: {type: Number, unique: false, required: false},
    isLookingForMentor: {type: Boolean, unique: false, required: false},
    hoursSpentWithMentor: {type: String, unique: false, required: false},
    meetingsAttended: {type: Number, unique: false, required: false},
  

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
