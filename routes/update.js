const express = require('express');
const updateController = require('../ controllers/update');
const router = express.Router();

router.patch('/highlight', updateController.update);

module.exports = router;