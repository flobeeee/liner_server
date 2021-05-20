const express = require('express');
const createController = require('../ controllers/create');
const router = express.Router();

router.post('/highlight', createController.add);

module.exports = router;