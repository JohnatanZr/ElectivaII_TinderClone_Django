const users = require("../../data/users");

const swipeLeft = (req, res) => {
  const { dislikedUserId } = req.body;
  const currentUser = users.find((user) => user.id === req.body.userId);

  if (!currentUser.dislikes.includes(dislikedUserId)) {
    currentUser.dislikes.push(dislikedUserId);
  }
  return res.status(200).json({ message: "¡Dislike!" });
};

module.exports = {
  swipeLeft,
};
