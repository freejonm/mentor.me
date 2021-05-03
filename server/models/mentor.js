const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

let ObjectId = Schema.ObjectId

// Define userSchema
const mentorSchema = new Schema({
  
  personId: { type: ObjectId },
  profilePicture: { data: Buffer, contentType: String },
	firstName: { type: String, unique: false },
	lastName: { type: String, unique: false },
  username: { type: String, unique: false, required: false },
  pronouns: { type: String, unique: false, required: false },
  location: { type: String, unique: false, required: false },
  email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  password: { type: String, unique: false, required: false },
  meetingsAttended: { type: Number, unique: false, required: false },
	mentor: { type: Boolean, unique: false, required: true},
	description: { type: String, unique: false, required: false},
	gradYear: { type: Number, unique: false, required: false },
	desire: { type: String, unique: false, required: false },
  yearsExperience: { type: Number, unique: false, required: false },
  currentPosition: { type: String, unique: false, required: false },
  isLookingForMentee: { type: Boolean, unique: false, required: false },
  hoursSpentWithMentee: { type: String, unique: false, required: false },
  menteesAssigned: [{ type: String, unique: false, required: false }],
  hasExperienceIn: [{ type: String, unique: false, required: true }],
  currentPosition: { type: String, unique: false, required: false },
  education: { type: String, unique: false, required: false },
  
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
