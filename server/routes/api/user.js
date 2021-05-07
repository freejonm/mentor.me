const express = require('express');
const router = express.Router();
const passport = require('../../passport');
const userController = require("../../controllers/userController");

router.get('/', userController.getAll);
router.get('/:id', userController.findById);

module.exports = router;
