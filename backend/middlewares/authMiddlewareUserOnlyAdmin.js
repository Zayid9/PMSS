// middleware/authMiddlewareUserOnlyAdmin.js

const checkAdmin = (req, res, next) => {
  // Assuming you have a way to verify the user's role
  const user = req.user; // This should be set by your authentication middleware

  if (user && user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Access denied' });
  }
};

module.exports = { checkAdmin };