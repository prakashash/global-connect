const express = require('express');
const router = express.Router();
const controller = require('./address.controller');

router.get('/', controller.getAddress);
router.post('/', controller.saveAddress);
router.put('/', controller.updateAddress);
router.delete('/', controller.deleteAddress);

module.exports = router;