// app.js

const express = require("express");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use(profileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
