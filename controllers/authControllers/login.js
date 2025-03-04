const users = require("../../data/users");

const login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.status(200).json({ message: "Usuario logueado correctamente" });
  } else {
    res.status(401).json({ message: "Usuario o contraseña incorrectos" });
  }
};

module.exports = {
  login,
};
