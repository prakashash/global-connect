const express = require('express');
const router = express.Router();
const controller = require('./category.controller');

router.get('/', controller.getCategory);
router.post('/', controller.saveCategory);
router.put('/', controller.updateCategory);
router.delete('/', controller.deleteCategory);

module.exports = router;