const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await authService.registerUser(name, email, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.loginUser(email, password);
    res.json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(401).json({ error: error.message || 'Login failed' });
  }
};
