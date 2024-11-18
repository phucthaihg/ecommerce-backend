const userService = require('../services/userService');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await userService.getUserById(req.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to fetch user profile' });
  }
};
