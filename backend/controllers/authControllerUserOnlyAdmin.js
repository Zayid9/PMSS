// controllers/authControllerUserOnlyAdmin.js

const User = require('../models/UserOnlyAdmin');

const registerUser = async (req, res) => {
  const { username, password, role } = req.body;
 
  try {
    const newUser = new User({ username, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

module.exports = { registerUser };