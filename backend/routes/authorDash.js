const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController')

router.get('/articles', authorController.view);

module.exports = router;