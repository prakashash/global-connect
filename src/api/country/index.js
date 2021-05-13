const express = require('express');
const router = express.Router();
const controller = require('./country.controller');

router.get('/', controller.getCountry);
router.post('/', controller.saveCountry);
router.put('/', controller.updateCountry);
router.delete('/', controller.deleteCountry);

module.exports = router;