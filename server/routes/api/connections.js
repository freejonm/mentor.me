const express = require('express');
const router = express.Router();
const connectionsController = require('../../controllers/connectionController');

router.route('/request/:id')
    .put(connectionsController.sendMentorRequest)

router.route('/approve/:id')
    .put(connectionsController.approveMentorRequest)


module.exports = router;
