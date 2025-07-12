// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer')) {
    try {
      token = token.split(' ')[1]; // remove "Bearer"
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.userId; // make sure you're using `userId` from jwt.sign
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

module.exports = { protect };
