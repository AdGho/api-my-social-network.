const express = require('express');
const router = express.Router();
const carpoolController = require('../controllers/carpoolController');

router.post('/offer', carpoolController.createCarpool);
router.get('/:eventId', carpoolController.getEventCarpools);

module.exports = router;