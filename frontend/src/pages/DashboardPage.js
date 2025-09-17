import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NoteForm from '../components/NoteForm';
import NoteItem from '../components/NoteItem';
import api from '../services/api';
import './DashboardPage.css';

const DashboardPage = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  // Fetch notes on component mount
  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await api.get('/notes');
        setNotes(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getNotes();
  }, []);

  // API Call Handlers
  const addNote = async (note) => {
    try {
      const res = await api.post('/notes', note);
      setNotes([res.data, ...notes]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateNote = async (note) => {
    try {
      const res = await api.put(`/notes/${note._id}`, note);
      setNotes(notes.map(n => (n._id === note._id ? res.data : n)));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="form-section">
            <NoteForm 
                addNote={addNote}
                updateNote={updateNote}
                currentNote={currentNote}
                setCurrentNote={setCurrentNote}
            />
        </div>
        <div className="notes-section">
          <h2>My Notes</h2>
          <div className="notes-list">
            {notes.map(note => (
              <NoteItem
                key={note._id}
                note={note}
                deleteNote={deleteNote}
                setCurrentNote={setCurrentNote}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;