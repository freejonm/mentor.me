const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the userController
module.exports = {
  
  findAll: function(req, res) {
    if (true) {
      db.User
        .find({ mentor: { mentor: true } })
        .populate({ path: "mentors", options: { sort: { 'lastName': -1 } } })
        .then(mentor => {
          res.json({ mentor: mentor });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ Mentors: null });
    }
  },

  create: function(req, res) {
    db.Mentor
      .create(req.body)
      .then(dbMentor => {
        return db.User.findOneAndUpdate({ _id: req.mentor }, { $push: { mentor: dbMentor } }, { new: true });
      })
      .then((dbMentor) => {
        // If the User was updated successfully, send it back to the client
        res.json(dbMentor);
      })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    if (req.user) {
      db.Mentor
        .find({ _id: req.user._id })
        .populate("mentors")
        .then(mentors /*users*/ => {
          const mentor = /*users*/mentors[0].mentee.filter(b => b._id.toString() === req.params.id);
          res.json({ mentors: mentor[0] });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ mentor: null });
    }
  },

  update: function(req, res) {
    db.Mentor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbMentor => {
        console.log(dbMentor);
        res.json(dbMentor);
      })
      .catch(err => res.status(422).json(err));
  },

  getMentor: (req, res, next) => {
    // console.log(req.user);
    if (req.user) {
      return
       res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  remove: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { mentor: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Mentor
          .findOneAndDelete({ _id: req.params.id })
          .then(dbMentor => res.json(dbMentor))
          .catch(err => res.status(422).json(err));
      });
  }
};