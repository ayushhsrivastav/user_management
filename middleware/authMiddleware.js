const jwt = require("jsonwebtoken");

class authMiddleware {
  async authenticateToken(req, res, next) {
    let token = req.headers.authorization;
    if (!token)
      return res.status(401).send("Access denied. No token provided.");
    if (token.includes("Bearer ")) token = token.replace("Bearer ", "");
    jwt.verify(token, "voosh", (err, decoded) => {
      if (err) return res.status(403).send("Invalid token.");
      req.userId = decoded.userId;
      next();
    });
  }
}

module.exports = new authMiddleware();
