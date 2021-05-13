const express = require('express');
const router = express.Router();
const controller = require('./order.controller');

router.get('/', controller.getOrder);
router.post('/', controller.saveOrder);
router.put('/', controller.updateOrder);
router.delete('/', controller.deleteOrder);

module.exports = router;