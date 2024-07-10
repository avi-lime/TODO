const express = require('express');
const { createUser, loginUser } = require('../controllers/authController');

const authRouter = express.Router();

authRouter.route('/signup')
    .post(createUser)
authRouter.route('/login')
    .post(loginUser)

module.exports = authRouter