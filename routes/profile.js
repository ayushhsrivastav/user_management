const express = require("express");
const profileController = require("../controllers/profile.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/profile",
  authMiddleware.authenticateToken,
  profileController.getProfile
);
router.put(
  "/profile",
  authMiddleware.authenticateToken,
  profileController.updateProfile
);
router.get(
  "/admin/profiles",
  authMiddleware.authenticateToken,
  profileController.getAllProfiles
);

module.exports = router;
