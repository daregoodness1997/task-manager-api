const express = require('express');
const { getTask } = require('../controllers');
const router = express.Router();

router.get('/', getTask);

module.exports = router;
