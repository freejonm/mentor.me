const router = require("express").Router();
const menteeController = require("../../controllers/menteeController");

// Matches with "/api/books"
router.route("/")
  .get(menteeController.findAll)
  .post(menteeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .put(menteeController.update)

module.exports = router;
