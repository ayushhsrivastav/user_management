const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

class authController {
  async register(req, res) {
    try {
      const {
        username,
        email,
        password,
        isAdmin,
        isPublic,
        photo,
        bio,
        phone,
      } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = {
        username,
        email,
        password: hashedPassword,
        isAdmin,
        isPublic,
        photo,
        bio,
        phone,
      };
      await User.insertOne(user);
      res
        .status(201)
        .send({ status: "success", message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ status: "failed", message: "Error registering user" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOneByEmail(email);
      if (!user) {
        return res
          .status(404)
          .send({ status: "failed", message: "User not found" });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res
          .status(401)
          .send({ status: "failed", message: "Invalid password" });
      }
      const token = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin },
        "user",
        {
          expiresIn: "1h",
        }
      );
      res.json({ status: "success", token });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "Error logging in" });
    }
  }
}

module.exports = new authController();
