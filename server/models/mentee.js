const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const strategy = require('../passport/localStrategy')
mongoose.promise = Promise;

let ObjectId = Schema.ObjectId

// Define userSchema
const menteeSchema = new Schema({

	personId: { type: ObjectId },
  profilePicture: { data: Buffer, contentType: String },
	firstName: { type: String, unique: false },
	lastName: { type: String, unique: false },
  pronouns: { type: String, unique: false, required: false },
  location: { type: String, unique: false, required: false },
  email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  password: { type: String, unique: false, required: false },
  meetingsAttended: { type: Number, unique: false, required: false },
	mentee: { type: Boolean, unique: false, required: true},
	description: { type: String, unique: false, required: false},
	desire: { type: String, unique: false, required: false },
	gradYear: { type: Number, unique: false, required: false },
	isLookingForMentor: { type: Boolean, unique: false, required: false },
	education: { type: String, unique: false, required: false },
	hoursSpentWithMentor: { type: String, unique: false, required: false },
	lookingForHelpWith: [{ type: String, unique: false, required: false}],
  currentPosition: { type: String, unique: false, required: false },
  fieldOfInterest: [{ type: String, unique: false, required: true }],
  
  

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
