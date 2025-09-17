const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const { getAllUsers, getAllNotes, deleteNoteById } = require('../controllers/adminController');


router.use(auth, admin);

router.get('/users', getAllUsers);
router.get('/notes', getAllNotes);
router.delete('/notes/:id', deleteNoteById);

module.exports = router;