const { body, validationResult } = require("express-validator");

const validSignupUsers = [
  body("name")
  .notEmpty()
  .withMessage("El campo name es obligatorio"),
  body("email")
    .notEmpty()
    .escape()
    .isEmail()
    .withMessage("El campo email es obligatorio"),
  body("password")
    .notEmpty()
    .escape()
    .isLength({ min: 8 })
    .withMessage("El campo password es obligatorio"),
  body("age")
    .notEmpty()
    .escape()
    .isInt({ min: 18 })
    .withMessage("El campo age es obligatorio"),
  body("gender")
    .notEmpty()
    .escape()
    .withMessage("El campo gender es obligatorio"),
  body("genderPreference")
    .notEmpty()
    .escape()
    .withMessage("El campo genderPreference es obligatorio"),
];

const isValidSignup = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(422).json({ errors: result.array() });
  }
  next();
};

module.exports = { validSignupUsers, isValidSignup };
