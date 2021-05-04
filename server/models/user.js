const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

let ObjectId = Schema.ObjectId

// Define userSchema
const userSchema = new Schema({
  personId: { type: ObjectId },
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  username: { type: String, unique: false, required: false },
  password: { type: String, unique: false, required: false },
  pronouns: { type: String, unique: false, required: false },
  description: { type: String, unique: false, required: false },
  location: { type: String, unique: false, required: false },
  currentPosition: { type: String, unique: false, required: false },
  desire: { type: String, unique: false, required: false },
  education: { type: String, unique: false, required: false },
  profilePicture: { data: Buffer, contentType: String },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  mentor: [
    {
      type: Schema.Types.ObjectId,
      ref: "Mentor",
    },
  ],
  mentee: [
    {
      type: Schema.Types.ObjectId,
      ref: "Mentee",
    },
  ],
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