const express = require('express');
const router = express.Router();
const controller = require('./subcategory.controller');

router.get('/', controller.getSubcategory);
router.post('/', controller.saveSubcategory);
router.put('/', controller.updateSubcategory);
router.delete('/', controller.deleteSubcategory);

module.exports = router;