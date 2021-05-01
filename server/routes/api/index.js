const router = require("express").Router();
const bookRoutes = require("./books");
const mentorRoutes = require("./mentor");
const menteeRoutes = require("./mentee");

// routes
router.use("/books", bookRoutes);
router.use("/mentor", mentorRoutes);
router.use("/mentee", menteeRoutes);

module.exports = router;
