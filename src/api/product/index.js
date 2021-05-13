const express = require('express');
const router = express.Router();
const controller = require('./product.controller');

router.get('/', controller.getProduct);
router.post('/', controller.saveProduct);
router.put('/', controller.updateProduct);
router.delete('/', controller.deleteProduct);

module.exports = router;