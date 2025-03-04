const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto: ${PORT}`);
});