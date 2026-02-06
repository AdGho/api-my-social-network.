const express = require('express');
const router = express.Router();
const shoppingController = require('../controllers/shoppingController');
router.post('/add', shoppingController.addItem);
module.exports = router;