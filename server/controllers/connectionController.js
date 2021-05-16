const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the userController
module.exports = {
    
//   sendFriendRequest: (req, res) => {

//   },

//   approveFriendRequest: (req, res) => {

//   },

  sendMentorRequest: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { mentorRequests: {  _id: req.user._id, userId: req.user._id, username: req.user.username } },  }, { new: true })
    .then(dbUser => {
        db.User.findOneAndUpdate({ _id: req.user._id }, { $addToSet: { sentRequests: { _id: req.params.id, userId: req.params.id, username: dbUser.username } } }, { new: true })
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
    // console.log(req.body)
    db.User.findOneAndUpdate(
        { _id: req.params.id }, 
        { 
            $addToSet: { friendsList: {  
                _id: req.user._id,
                friendId: req.user._id, 
                username: req.user.username, 
                firstName: req.user.firstName,
                lastName: req.user.lastName,
                pronouns: req.body.pronouns,
                mentorStatus: req.body.mentorStatus,
                profilePicture: req.body.profilePicture
                } 
            }, 
            $pull: { sentRequests: { userId: req.user._id } } 
        },  
        { new: true })
    .then(dbUser => {
        // console.log(dbUser);
        // console.log(req.params, req.user)
        db.User.findOneAndUpdate(
            { _id: req.user._id }, 
            { 
                $addToSet: { friendsList: { 
                    _id: req.params.id,
                    friendId: req.params.id,
                    username: dbUser.username,
                    firstName: dbUser.firstName,
                    lastName: dbUser.lastName,
                    pronouns: dbUser.pronouns,
                    mentorStatus: dbUser.mentorStatus,
                    profilePicture: dbUser.profilePicture
                    }
                },
                $pull: { mentorRequests: { userId: req.params.id } } 
            }, 
            { new: true })
        .then( dbCurrent => {
            res.status(200).json(dbCurrent.username + ' approved friend request from ' + dbUser.username)
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

  denyMentorRequest: (req, res) => {

  }

};
