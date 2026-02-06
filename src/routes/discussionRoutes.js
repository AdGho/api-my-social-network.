const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');

router.post('/create', discussionController.createDiscussion);
router.post('/message', discussionController.addMessage);

module.exports = router;