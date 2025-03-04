const express = require("express");
const authRoutes = require('./routes/authRoutes.js');
const matchRoutes = require('./routes/matchRoutes.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/match", matchRoutes);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto: ${PORT}`);
});