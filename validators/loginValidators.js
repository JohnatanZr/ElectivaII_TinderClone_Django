const { body, validationResult} = require("express-validator");

const validLoginUsers = [
  body("email")
    .notEmpty()
    .escape()
    .isEmail()
    .withMessage("El campo email es obliglatorio"),
  body("password")
    .notEmpty()
    .escape()
    .isLength({ min: 8 })
    .withMessage("El campo password es obligatorio"),
];

const isValidLogin = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(422).json({ errors: result.array() });
  } else {
    next();
  }
};

module.exports = { validLoginUsers, isValidLogin};