const users = require("../../data/users");

const swipeRight = (req, res) => {
  const { likedUserId } = req.body;
  const currentUser = users.find((user) => user.id === req.body.userId);
  const likedUser = users.find((user) => user.id === likedUserId);

  if (!likedUser) {
    return res.status(404).json({ message: "El usuario no existe" });
  }

  if (!currentUser.likes.includes(likedUserId)) {
    currentUser.likes.push(likedUserId);
  }

  if (likedUser.likes.includes(currentUser.id)) {
    currentUser.matches.push(likedUserId);
    likedUser.matches.push(currentUser.id);
    return res.status(200).json({ message: "¡Hiciste match!" });
  }

  return res.status(200).json({ message: "¡Like enviado!" });
};

module.exports = {
  swipeRight,
};
