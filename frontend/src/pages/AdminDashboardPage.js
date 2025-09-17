import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import './AdminDashboardPage.css';

const AdminDashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await api.get('/admin/users');
        setUsers(usersRes.data);

        const notesRes = await api.get('/admin/notes');
        setNotes(notesRes.data);
      } catch (err) {
        console.error('Failed to fetch admin data', err);
      }
    };
    fetchData();
  }, []);

  const handleDeleteNote = async (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
        try {
            await api.delete(`/admin/notes/${noteId}`);
            setNotes(notes.filter((note) => note._id !== noteId));
        } catch (err) {
            console.error('Failed to delete note', err);
        }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="admin-container">
        <h1>Admin Dashboard</h1>
        <div className="admin-section">
          <h2>All Users ({users.length})</h2>
          <ul className="user-list">
            {users.map((user) => (
              <li key={user._id}>{user.name} ({user.email}) - Role: {user.role}</li>
            ))}
          </ul>
        </div>
        <div className="admin-section">
          <h2>All Notes ({notes.length})</h2>
          <div className="notes-grid">
            {notes.map((note) => (
              <div key={note._id} className="admin-note-item">
                <h4>{note.title}</h4>
                <p>{note.description}</p>
                <small>By: {note.user?.name || 'N/A'}</small>
                <button onClick={() => handleDeleteNote(note._id)} className="admin-delete-btn">
                  Delete Note
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;