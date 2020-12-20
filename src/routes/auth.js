const express = require('express');
const { signup } = require('../controllers/auth');
const user = require('../models/user');
const router = express.Router();

router.post('/signup' ,signup );
router.post('/signin' , (req,res) => {

   
});

module.exports = router; 