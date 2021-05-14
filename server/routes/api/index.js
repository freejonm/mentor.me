const router = require("express").Router();
const mentorRoutes = require("./mentor");
const menteeRoutes = require("./mentee");
const userRoutes = require('./user');
const messageBoardRoutes = require('./messageBoard');
const connectionsRoutes = require('./connections')

// routes
router.use("/mentor", mentorRoutes);
router.use("/mentee", menteeRoutes);
router.use('/users', userRoutes);
router.use('/messageboard', messageBoardRoutes);
router.use('/connections', connectionsRoutes)

module.exports = router;
