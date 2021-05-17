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
    let currentUser = req.body;

    db.User
    .find({ mentorStatus: true })
    .then(mentors => {

      const ranked = algo(currentUser, mentors);

      // console.log('ranked list: '+ ranked);

      res.json({rankedMentors: ranked});
    })
    .catch(err => {
      console.log('mentor error')
      res.status(422).json(err)
    })
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