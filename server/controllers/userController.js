const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    // console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  register: (req, res) => {
    console.log(req.body)
    const { firstName, lastName, username, password, /*pronouns, description, location, currentPosition, desire, gradYear, education, profilePicture,*/ email } = req.body;

    // ADD VALIDATION
    db.User.findOne({ 'username': username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      }

      const newUser = new db.User({
        
        'firstName': firstName,
        'lastName': lastName,
        'username': username,
        'password': password,
        // 'pronouns': pronouns,
        // 'description': description,
        // 'location': location,
        // 'currentPosition': currentPosition,
        // 'desire': desire,
        // 'gradYear': gradYear,
        // 'education': education,
        // 'meetingsAttended': 0,
        // 'profilePicture': profilePicture,
        'email': email
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        console.log('success!')
        return res.json(savedUser);
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