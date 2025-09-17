const User = require('../models/User');

const admin = async (req, res, next) => {
  try {
    
    const user = await User.findById(req.user.id);

    if (user && user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Admin access required' });
    }
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports = admin;