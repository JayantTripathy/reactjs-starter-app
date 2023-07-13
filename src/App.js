import './style.css';
import React from 'react';
import { Route, Routes, Switch, Link } from 'react-router-dom';
// We will create these two pages in a moment
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';

export default function App() {
  return (
    <div>
      <div className="p-2 w-100 d-flex flex-row border">
        <Link to="/" className="m-2">
          Home
        </Link>
        <Link to="/2" className="m-2">
          User
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/2" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
}
