const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

let ObjectId = Schema.ObjectId;

// Define userSchema
const userSchema = new Schema({
  personId: { type: ObjectId },
  profilePicture: { data: Buffer, contentType: String },
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  pronouns: { type: String, unique: false, required: false },
  username: { type: String, unique: false, required: false },
  password: { type: String, unique: false, required: false },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  currentPosition: { type: String, unique: false, required: false },
  yearsExperience: {type: String, unique: false, required: false },
  education: { type: String, unique: false, required: false },
  location: { type: String, unique: false, required: false },
  description: { type: String, unique: false, required: false },
  meetingsAttended: { type: Number, unique: false, required: false, default: 0},
  gradyear: { type: Number, unique: false, required: false},
  details: [{ type: String, unique: false, required: false }],

  mentorStatus: {type: Boolean, unique: false, required: true, default: false},

  // from mentee schema
  isLookingForMentor: {type: Boolean, unique: false, required:false, default: true},
  timeCommitment: [{ type: String, unique:false, required:false}],
  commPrefs: [{ type: String, unique:false, required:false}],
  learningAbout: [{type: String, unique:false, required:false}],
  
  // What's the best way to save meetings made with calendar?
  // calendar/meetings?: { type: ?, unique: false, required: false },
  
  mentors: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      username: { type: String, default: "" },
    },
  ],

  sentRequests:[{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    username: { type: String, default: '' }
  }],

  mentorRequests: [{
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true},
    username: { type: String, default: '' }
  }],

  friendsList: [
    {
      friendId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
      username: { type: String, unique: false},
      firstName: { type: String, unique: false },
      lastName: { type: String, unique: false },
      pronouns: { type: String, unique: false },
      mentorStatus: { type: Boolean, unique: false, default: false },
      profilePicture: { type: String, unique: false },
    },
  ],
  totalRequest: { type: Number, default: 0 },
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};
// Define hooks for pre-saving
userSchema.pre("save", function (next) {
  if (!this.password) {
    // console.log('No password provided!');
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});
// Create reference to User & export
const User = mongoose.model("User", userSchema);
module.exports = User;
