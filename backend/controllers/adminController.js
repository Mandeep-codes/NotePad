const User = require('../models/User');
const Note = require('../models/Note');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); 
        res.json(users);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};


const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().populate('user', ['name', 'email']); 
        res.json(notes);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};


const deleteNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ msg: 'Note not found' });
        await Note.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Note removed by admin' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

module.exports = { getAllUsers, getAllNotes, deleteNoteById };