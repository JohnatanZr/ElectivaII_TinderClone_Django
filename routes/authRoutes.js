const express = require("express");
const { validLoginUsers, isValidLogin } = require("../validators/loginValidators");
const { validSignupUsers, isValidSignup } = require("../validators/SignupValidators");
const { signup } = require("../controllers/authControllers/signup");
const { login } = require("../controllers/authControllers/login");

const router = express.Router();

router.post("/signup", validSignupUsers, isValidSignup, signup );
router.post("/login", validLoginUsers, isValidLogin, login);

module.exports = router;