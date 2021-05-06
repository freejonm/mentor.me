const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    if (true) {
      db.Mentee
        .find({ mentor: { mentor: false } })
        .populate({ path: "mentees", options: { sort: { 'lastName': -1 } } })
        .then(mentee => {
          res.json({ Mentees: mentee });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ Mentees: null });
    }
  },

  create: function(req, res) {
    db.Mentee
      .create(req.body)
      .then(dbMentee => {
        return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { mentee: dbMentee} }, { new: true });
      })
      .then((dbMentee) => {
        // If the User was updated successfully, send it back to the client
        res.json(dbMentee);
      })
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Mentee
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbMentee => {
        console.log(dbMentee);
        res.json(dbMentee);
      })
      .catch(err => res.status(422).json(err));
  },

  getmentee: (req, res, next) => {
    // console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  remove: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { mentee: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Mentee
          .findOneAndDelete({ _id: req.params.id })
          .then(dbMentee => res.json(dbMentee))
          .catch(err => res.status(422).json(err));
      });
  }
}