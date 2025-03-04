const users = require("../../data/users");

const getMatches = (req, res) => {
  const { userId } = req.body;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: "El usuario no existe" });
  }

  const matches = user.matches.map((matchId) => {
    const matchedUser = users.find((user) => user.id === matchId);
    if (matchedUser) {
      return [
        {
          name: matchedUser.name,
          age: matchedUser.age,
          gender: matchedUser.gender,
        },
      ];
    }
  });
  return res.status(200).json({ matches });
};

module.exports = {
  getMatches,
};
