const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/setup', ticketController.createTicketType);
router.post('/purchase', ticketController.buyTicket);

module.exports = router;