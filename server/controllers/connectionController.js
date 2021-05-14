const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the userController
module.exports = {
    
//   sendFriendRequest: (req, res) => {

//   },

//   approveFriendRequest: (req, res) => {

//   },

  sendMentorRequest: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { mentorRequests: {  userId: req.user._id, username: req.user.username } },  }, { new: true })
    .then(dbUser => {
        db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { sentRequests: { userId: req.params.id, username: dbUser.username } } }, { new: true })
        .then( dbCurrent => {
            res.status(200).json(dbCurrent.username + ' sent a friend request to ' + dbUser.username)
        })
        .catch(err => {
            console.log('current user error')
            res.status(422).json(err)
        })
    })
    .catch( err => {
        console.log('mentor request error')
        res.status(422).json(err)
    })
  },

  approveMentorRequest: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { mentorRequests: {  userId: req.user._id, username: req.user.username } },  }, { new: true })
    .then(dbUser => {
        db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { sentRequests: { userId: req.params.id, username: dbUser.username } } }, { new: true })
        .then( dbCurrent => {
            res.status(200).json(dbCurrent.username + ' sent a friend request to ' + dbUser.username)
        })
        .catch(err => {
            console.log('current user error')
            res.status(422).json(err)
        })
    })
    .catch( err => {
        console.log('mentor request error')
        res.status(422).json(err)
    })
  }

};
