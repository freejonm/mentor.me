const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    if (req.user) {
      db.Mentor
        .find({ _id: req.ObjectId })
        .populate({ path: "mentors", options: { sort: { 'lastName': -1 } } })
        .then(mentor => {
          res.json({ mentor: mentor });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ books: null });
    }
  },

  create: function(req, res) {
    db.Mentor
      .create(req.body)
      .then(dbMentor => {
        return db.Mentor.findOneAndUpdate({ _id: req.mentor }, { $push: { books: dbMentor.gradYear } }, { new: true });
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

  remove: function(req, res) {
    db.Mentor.findOneAndUpdate({ _id: req.user._id }, { $pull: { mentors: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Mentor
          .findOneAndDelete({ _id: req.params.id })
          .then(dbMentor => res.json(dbMentor))
          .catch(err => res.status(422).json(err));
      });
  },

  getMentor: (req, res, next) => {
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

      const newMentor = new db.Mentor({
        'personId': personId,
        'firstName': firstName,
        'lastName': lastName,
        'username': username,
        'password': password,
        'pronouns': pronouns,
        'description': description,
        'location': location,
        'currentPosition': currentPosition,
        'mentor': mentor,
        'fieldOfInterest': fieldOfInterest,
        'desire': desire,
        'gradYear': gradYear,
        'isLookingForMentee': isLookingforMentor,
        'education': education,
        'hoursSpentWithMentee': hoursSpentWithMentor,
        'meetingsAttended': meetingsAttended,
        'profilePictue': profilePictue,
        'email': email
      });
      newMentor.save((err, savedMentor) => {
        if (err) return res.json(err);
        return res.json(savedMentor);
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