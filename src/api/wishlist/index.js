const express = require('express');
const router = express.Router();
const controller = require('./wishlist.controller');

router.get('/', controller.getWishlist);
router.post('/', controller.saveWishlist);
router.put('/', controller.updateWishlist);
router.delete('/', controller.deleteWishlist);

module.exports = router;