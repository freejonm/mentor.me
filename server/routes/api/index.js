const router = require("express").Router();
const mentorRoutes = require("./mentor");
const menteeRoutes = require("./mentee");
const userRoutes = require('./user');
const messageBoardRoutes = require('./messageBoard');

// routes
router.use("/mentor", mentorRoutes);
router.use("/mentee", menteeRoutes);
router.use('/users', userRoutes);
router.use('/messageboard', messageBoardRoutes);

module.exports = router;
