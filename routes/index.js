const express = require('express');
const router = express.Router();

console.log('router loaded');

const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);

const loginOrSignupController = require('../controllers/loginOrSignUp');
router.get('/loginSignup',loginOrSignupController.loginOrSignup);

module.exports = router;