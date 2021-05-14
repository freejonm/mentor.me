const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

let ObjectId = Schema.ObjectId;

const boardSchema = new Schema({
    body: { type: String, unique: false, required: true},
    date: { type: Date, unique: false, required: false, default: Date.now() },
    userID: {  type: ObjectId, unique: false, required: false },
    username: {  type: String, unique: false, required: false},
    firstName: { type: String, unique: false, required: false,  },
    lastName: { type: String, unique: false, required: false },
    isReported: {  type: Boolean, unique: false, required: false },
    reports: [{ type: String, unique: false, required: false }],
    comments: [{  type: String, unique: false, required: false }],
    likes: { type: Number, unique: false, required: false, default: 0 },
    views: {  type: Number, unique: false, required: false, default: 0},
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;