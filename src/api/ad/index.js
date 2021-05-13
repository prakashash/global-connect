const express = require('express');
const router = express.Router();
const controller = require('./ad.controller');

router.get('/', controller.getAd);
router.post('/', controller.saveAd);
router.put('/', controller.updateAd);
router.delete('/', controller.deleteAd);

module.exports = router;