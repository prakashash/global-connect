const express = require('express');
const router = express.Router();
const controller = require('./cart.controller');

router.get('/', controller.getCart);
router.post('/', controller.saveCart);
router.put('/', controller.updateCart);
router.delete('/', controller.deleteCart);

module.exports = router;