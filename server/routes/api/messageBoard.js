const express = require('express');
const router = express.Router();
const messageController = require("../../controllers/messageBoardController");

//api/posts
router.route('/')
.get(messageController.getAllPosts)
.post(messageController.createPost)

module.exports = router;
