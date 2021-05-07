const router = require("express").Router();
const mentorRoutes = require("./mentor");
const menteeRoutes = require("./mentee");
const userRoutes = require('./user');

// routes
router.use("/mentor", mentorRoutes);
router.use("/mentee", menteeRoutes);
router.use('/users', userRoutes);

module.exports = router;
