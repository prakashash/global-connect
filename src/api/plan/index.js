const express = require('express');
const router = express.Router();
const controller = require('./plan.controller');

router.get('/', controller.getPlan);
router.post('/', controller.savePlan);
router.put('/', controller.updatePlan);
router.delete('/', controller.deletePlan);

module.exports = router;