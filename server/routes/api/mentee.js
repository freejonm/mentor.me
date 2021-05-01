const router = require("express").Router();
const menteeController = require("../../controllers/menteeController");

// Matches with "/api/books"
router.route("/")
  .get(menteeController.findAll)
  .post(menteeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(menteeController.findById)
  .put(menteeController.update)
  .delete(menteeController.remove);

module.exports = router;
