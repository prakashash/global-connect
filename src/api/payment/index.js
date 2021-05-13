const express = require('express');
const router = express.Router();
const controller = require('./payment.controller');

router.get('/', controller.getPayment);
router.post('/', controller.savePayment);
router.put('/', controller.updatePayment);
router.delete('/', controller.deletePayment);

module.exports = router;