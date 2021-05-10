const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");
const algo = require('../../algorithms/match')

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

  update: function(req, res) {
    db.Mentor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbMentor => {
        console.log(dbMentor);
        res.json(dbMentor);
      })
      .catch(err => res.status(422).json(err));
  },

  getRankedMentors: (req, res, next) => {
    let currentUser;
    let currentMentors;
    db.User
      .find({ _id: req.user._id })
      .then(user => {
        currentUser = user;
        db.User
        .find({ mentor: { mentor: true } })
        .then(mentors => {
          currentMentors = mentors;
          const ranked = algo(currentUser, currentMentors);
          console.log('ranked list:  ---------' + ranked);
          res.json(ranked)
        })
        .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err));
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