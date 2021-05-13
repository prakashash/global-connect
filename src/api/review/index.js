const express = require('express');
const router = express.Router();
const controller = require('./review.controller');

router.get('/', controller.getReview);
router.post('/', controller.saveReview);
router.put('/', controller.updateReview);
router.delete('/', controller.deleteReview);

module.exports = router;