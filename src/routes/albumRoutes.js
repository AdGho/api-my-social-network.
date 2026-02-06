const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

router.post('/create', albumController.createAlbum);
router.post('/photo', albumController.addPhoto);
router.post('/comment', albumController.addComment);

module.exports = router;