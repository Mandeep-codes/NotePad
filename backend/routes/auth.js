const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware'); 
const { registerUser, loginUser, getLoggedInUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', auth, getLoggedInUser); 

module.exports = router;