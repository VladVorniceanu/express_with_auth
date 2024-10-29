const express = require('express');
const router = express.Router();
const userService = require('./userService.js');

router.get('/users', userService.getAllUsers);
router.post('/users', emailVaildator(), validate, userService.createUser);
router.post('/login', userService.loginUser);

module.exports = router;