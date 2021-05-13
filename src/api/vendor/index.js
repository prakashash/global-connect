const express = require('express');
const router = express.Router();
const controller = require('./vendor.controller');

router.get('/', controller.getVendor);
router.post('/', controller.saveVendor);
router.put('/', controller.updateVendor);
router.delete('/', controller.deleteVendor);

module.exports = router;