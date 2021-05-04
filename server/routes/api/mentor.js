const router = require("express").Router();
const mentorController = require("../../controllers/mentorController");

// Matches with "/api/mentors"
router.route("/")
  .get(mentorController.findAll)
  .post(mentorController.register);

// Matches with "/api/mentors/:id"
router
  .route("/:id")
  .get(mentorController.findById)
  .put(mentorController.update)
  .delete(mentorController.remove);

module.exports = router;
