const User = require("../models/user");

class profileController {
  async getProfile(req, res) {
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res
          .status(404)
          .send({ status: "sucess", message: "User not found" });
      }
      const { photo, name, bio, phone, email } = user;
      res.json({
        photo,
        name,
        bio,
        phone,
        email,
        isPublic: user.isPublic,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ status: "failed", message: "Error fetching profile" });
    }
  }

  async updateProfile(req, res) {
    try {
      const { photo, name, bio, phone, email, isPublic } = req.body;
      const query = {};
      if (photo) query.photo = photo;
      if (name) query.name = name;
      if (bio) query.bio = bio;
      if (phone) query.phone = phone;
      if (email) query.email = email;
      if (isPublic) query.isPublic = isPublic;
      await User.updateOne(req.userId, query);
      res
        .status(200)
        .send({ status: "success", message: "Profile updated successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ status: "failed", message: "Error updating profile" });
    }
  }

  async getAllProfiles(req, res) {
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res
          .status(404)
          .send({ status: "failed", message: "User not found" });
      }

      let profiles;
      if (user.isAdmin) {
        profiles = await User.find();
      } else {
        profiles = await User.find({ isPublic: true });
      }

      res.json({
        status: "success",
        message: "Profiles fetched successfully",
        result: profiles.map((profile) => ({
          photo: profile.photo,
          name: profile.name,
          bio: profile.bio,
          phone: profile.phone,
          email: profile.email,
          isPublic: profile.isPublic,
        })),
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ status: "failed", message: "Error fetching profiles" });
    }
  }
}

module.exports = new profileController();
