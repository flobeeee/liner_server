const express = require('express');
const updateController = require('../ controllers/update');
const themeController = require('../ controllers/theme');
const router = express.Router();

router.patch('/highlight', updateController.update);
router.put('/theme', themeController.update);

module.exports = router;