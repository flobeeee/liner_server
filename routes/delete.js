const express = require('express');
const deleteController = require('../ controllers/delete');
const router = express.Router();

router.delete('/highlight', deleteController.delete);

module.exports = router;