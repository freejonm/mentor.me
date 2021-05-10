const router = require("express").Router();
const mentorController = require("../../controllers/mentorController");

// Matches with "/api/mentors"
router.route("/")
  .get(mentorController.findAll)

  // .post(mentorController.register);


router.route("/")

// Matches with "/api/mentors/:id"
router
  .route("/:id")
  .get(mentorController.getRankedMentors)
  .put(mentorController.update)
  .delete(mentorController.remove);

module.exports = router;
