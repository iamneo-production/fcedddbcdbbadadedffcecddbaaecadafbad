import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Routes> {/* Use 'Routes' instead of 'Switch' */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
