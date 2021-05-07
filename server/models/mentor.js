const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

let ObjectId = Schema.ObjectId

// Define userSchema
const mentorSchema = new Schema({

    hasExperienceIn: [{ type: String, unique:false, required: false}],
    isLookingForMentee: {type: Boolean, unique: false, required: false},
    hoursSpentWithMentee: {type: Number, unique: false, required: false},
    meetingsAttended: {type: Number, unique: false, required: false}
  
});

// Define schema methods
mentorSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};

// Define hooks for pre-saving
mentorSchema.pre('save', function(next) {
	if (!this.password) {
		// console.log('No password provided!');
		next();
	} else {
		this.password = this.hashPassword(this.password);
		next();
	}
})

// Create reference to User & export
const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;
