const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');
const { route } = require('./studentRouter');

router.post('/new-profile', adminController.postNewStudentProfile);

module.exports = router;