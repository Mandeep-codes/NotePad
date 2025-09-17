import React from 'react';
import './NoteItem.css';

const NoteItem = ({ note, deleteNote, setCurrentNote }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <div className="note-actions">
        <button onClick={() => setCurrentNote(note)} className="edit-btn">Edit</button>
        <button onClick={() => deleteNote(note._id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;