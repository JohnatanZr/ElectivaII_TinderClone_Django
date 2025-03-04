const users = require("../../data/users");

const signup = (req, res) => {
  const newId = users.length + 1;
  const newUser = {
    id: newId,
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = {
  signup,
};
