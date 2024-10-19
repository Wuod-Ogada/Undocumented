const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/', usercontroller.indexpage);
router.get('/subscriber', usercontroller.homepage);
router.get('/action', usercontroller.signin);

module.exports = router;