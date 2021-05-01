const router = require("express").Router();
const mentorController = require("../../controllers/mentorController");

// Matches with "/api/books"
router.route("/")
  .get(mentorController.findAll)
  .post(mentorController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(mentorController.findById)
  .put(mentorController.update)
  .delete(mentorController.remove);

module.exports = router;
