const { User } = require('../models/user.js');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ name, email, password: hashedPassword });
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
};
