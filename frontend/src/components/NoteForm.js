import React, { useState, useEffect } from 'react';
import './NoteForm.css';

const NoteForm = ({ addNote, updateNote, currentNote, setCurrentNote }) => {
  const [note, setNote] = useState({ title: '', description: '' });

  useEffect(() => {
    if (currentNote) {
      setNote(currentNote);
    } else {
      setNote({ title: '', description: '' });
    }
  }, [currentNote]);

  const { title, description } = note;

  const onChange = e => setNote({ ...note, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if(currentNote) {
        updateNote(note);
    } else {
        addNote(note);
    }
    clearForm();
  };

  const clearForm = () => {
    setCurrentNote(null);
    setNote({ title: '', description: '' });
  }

  return (
    <form onSubmit={onSubmit} className="note-form">
      <h2>{currentNote ? 'Edit Note' : 'Add a Note'}</h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
        required
      />
      <textarea
        placeholder="Description"
        name="description"
        value={description}
        onChange={onChange}
        required
      ></textarea>
      <button type="submit" className="submit-btn">{currentNote ? 'Update Note' : 'Add Note'}</button>
      {currentNote && <button type="button" onClick={clearForm} className="clear-btn">Cancel Edit</button>}
    </form>
  );
};

export default NoteForm;