const express = require("express");
const { signup, login } = require("../controllers/authControllers");
const { validLoginUsers, isValidLogin } = require("../validators/loginValidators");
const { validSignupUsers, isValidSignup } = require("../validators/SignupValidators");

const router = express.Router();

router.post("/signup", validSignupUsers, isValidSignup, signup);
router.post("/login", validLoginUsers, isValidLogin, login);

module.exports = router;