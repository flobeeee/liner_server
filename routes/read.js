const express = require('express');
const readController = require('../ controllers/read');
const router = express.Router();

router.get('/texts', readController.texts);
router.get('/all', readController.all);

module.exports = router;