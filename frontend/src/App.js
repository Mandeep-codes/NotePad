
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import AdminDashboardPage from './pages/AdminDashboardPage.js'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<AuthPage />} />

          {/* Protected User Route */}
          <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          
          {/* Protected Admin Route */}
          <Route path="/admin" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;