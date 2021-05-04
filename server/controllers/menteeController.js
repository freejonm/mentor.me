const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    if (true) {
      db.Mentee
        .find({})
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
        return db.Mentee.findOneAndUpdate({ _id: req.mentee }, { $push: { mentee: dbMentee.gradYear } }, { new: true });
      })
      .then((dbMentee) => {
        // If the User was updated successfully, send it back to the client
        res.json(dbMentee);
      })
      .catch(err => res.status(422).json(err));
  },

  

  findById: function(req, res) {
    if (req.user) {
      db.Mentee
        .find({ _id: req.user._id })
        .populate("mentees")
        .then(mentees /*users*/ => {
          const mentee = /*users*/mentees[0].mentee.filter(b => b._id.toString() === req.params.id);
          res.json({ mentees: mentee[0] });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ mentee: null });
    }
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

  remove: function(req, res) {
    db.Mentee.findOneAndUpdate({ _id: req.user._id }, { $pull: { mentees: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Mentee
          .findOneAndDelete({ _id: req.params.id })
          .then(dbmentee => res.json(dbmentee))
          .catch(err => res.status(422).json(err));
      });
  },

  getmentee: (req, res, next) => {
    // console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    // ADD VALIDATION
    db.Mentee.findOne({ 'username': username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      }

      const newmentee = new db.Mentee({
        'personId': personId,
        'firstName': firstName,
        'lastName': lastName,
        'username': username,
        'password': password,
        'pronouns': pronouns,
        'description': description,
        'location': location,
        'currentPosition': currentPosition,
        'mentee': mentee,
        'fieldOfInterest': fieldOfInterest,
        'desire': desire,
        'gradYear': gradYear,
        'isLookingForMentee': isLookingformentee,
        'education': education,
        'hoursSpentWithMentee': hoursSpentWithmentee,
        'meetingsAttended': meetingsAttended,
        'profilePictue': profilePictue,
        'email': email
      });
      newmentee.save((err, savedmentee) => {
        if (err) return res.json(err);
        return res.json(savedmentee);
      });
    });
  },

  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },

  auth: function(req, res, next) {
		// console.log(req.body);
		next();
  },
  
  authenticate: (req, res) => {
		const user = JSON.parse(JSON.stringify(req.user)); // hack
		const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			// console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
		}
		res.json({ user: cleanUser });
	}
};