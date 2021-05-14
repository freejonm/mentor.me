const express = require('express');
const router = express.Router();
const passport = require('../../passport');
const userController = require("../../controllers/userController");

router.get('/', userController.getAll);
router.get('/:id', userController.findById);
router.get('/search/firstname', userController.getUsersByFirstName);
router.get('/search/fullname', userController.getUsersByFullName);
router.route('/connections/:id').get(userController.getConnections);
router.put('/:id', userController.updateUser);


module.exports = router;
