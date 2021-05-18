const router = require("express").Router();
const mentorController = require("../../controllers/mentorController");

// Matches with "/api/mentors"
router.route("/")
  .put(mentorController.getRankedMentors)

  // .post(mentorController.register);


router.route("/matches")
  .get(mentorController.getRankedMentors)

// Matches with "/api/mentors/:id"
router
  .route("/:id")
  .get(mentorController.getRankedMentors)

module.exports = router;
