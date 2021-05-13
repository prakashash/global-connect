const express = require('express');
const router = express.Router();
const controller = require('./state.controller');

router.get('/', controller.getState);
router.post('/', controller.saveState);
router.put('/', controller.updateState);
router.delete('/', controller.deleteState);

module.exports = router;