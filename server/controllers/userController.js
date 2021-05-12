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

  getConnections: (req, res) => {
    console.log(req.body);
    db.User.find({ _id: req.user._id })
      .populate("friendsList")
      .then((user) => {
        const connections = user[0].friendsList;
        res.json({ connections: connections });
      })
      .catch((err) => res.status(422).json(err));
  },

  getAll: (req, res) => {
    db.User.find({})
      .populate({ path: "users", options: { sort: { lastName: -1 } } })
      .then((user) => {
        res.json({ users: user });
      })
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.User.find({ _id: req.params.id })
      .then(user => {
          res.json({users: user})
      })
      .catch((err) => res.status(422).json(err));
  },

  register: (req, res) => {
    console.log(req.body);
    const {
      profilePicture,
      firstName,
      lastName,
      pronouns,
      username,
      password,
      email,
      currentPosition,
      yearsExperience,
      education,
      location,
      description,
      meetingsAttended,
      mentorStatus,
    } = req.body;

    // ADD VALIDATION
    db.User.findOne({ username: username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`,
        });
      }

      const newUser = new db.User({
        profilePicture: profilePicture,
        firstName: firstName,
        lastName: lastName,
        pronouns: pronouns,
        username: username,
        password: password,
        email: email,
        currentPosition: currentPosition,
        yearsExperience: yearsExperience,
        education: education,
        location: location,
        description: description,
        meetingsAttended: meetingsAttended,
        mentorStatus: mentorStatus,
        friendsList: [
          {
            friendID: "6095aee05516bd0f04679db3",
            friendName: "Erik",
          },
        ],
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        console.log("success!");
        return res.json(savedUser);
      });
    });
  },

  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie("connect.sid"); // clean up!
      return res.json({ msg: "logging you out" });
      // res.redirect('/');
    } else {
      return res.json({ msg: "no user to log out!" });
    }
  },
  auth: function (req, res, next) {
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
  },
};
