const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authControllerUserOnlyAdmin');
const { checkAdmin } = require('../middlewares/authMiddlewareUserOnlyAdmin');

// Route to register a new user
router.post('/register', checkAdmin, registerUser);

module.exports = router;