const users = require("../../data/users");

const getAvailableUsers = (req, res) => {
  const { userId } = req.body;
  const currentUser = users.find((user) => user.id === userId);

  if (!currentUser) {
    return res.status(404).json({ message: "El usuario no existe" });
  }

  const availableUsers = users
    .filter(
      (user) =>
        user.id !== userId &&
        !currentUser.likes.includes(user.id) &&
        !currentUser.dislikes.includes(user.id)
    )
    .map(({ name, age, gender }) => ({ name, age, gender }));

  return res.status(200).json({ availableUsers });
};

module.exports = {
  getAvailableUsers,
};
