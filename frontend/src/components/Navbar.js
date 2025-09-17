import React from 'react';
import { Link } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { logout, user } = useAuth(); 

  return (
    <nav className="navbar">
      <h1><Link to="/" className="navbar-title">📚 Notes Manager</Link></h1>
      <div className="nav-links">
        
        {user && user.role === 'admin' && (
          <Link to="/admin" className="nav-link">Admin Panel</Link>
        )}
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;