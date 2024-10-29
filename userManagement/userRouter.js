const express = require('express');
const router = express.Router();
const userService = require('./userService.js');
const {userValidationRules} = require('../validators/userValidator.js');
const {validate} = require('../middleware/validate.js');

router.get('/users', userService.getAllUsers);
router.post('/users', userValidationRules(), validate, userService.registerUser);
router.post('/login', userService.loginUser);

module.exports = router;