// app.js

const express = require("express");
const config = require("./config/config");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

const app = express();
const PORT = config.port || 3000;

connectDB();

app.use((req, res, next) => {
  res.set("Content-Security-Policy", "default-src 'self'");
  next();
});

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("<h1>Testing endpoint</h1>");
});

// Routes
app.use("/auth", authRoutes);
app.use(profileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
