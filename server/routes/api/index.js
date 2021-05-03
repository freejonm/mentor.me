const router = require("express").Router();
const mentorRoutes = require("./mentor");
const menteeRoutes = require("./mentee");

// routes
router.use("/mentor", mentorRoutes);
router.use("/mentee", menteeRoutes);

module.exports = router;
