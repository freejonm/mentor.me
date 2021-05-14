const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const strategy = require('../passport/localStrategy')
mongoose.promise = Promise;

const messageSchema = new Schema ({
  room: { type: String},
  content: {
    author: {type: String},
    message: {type: String}
  }
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

