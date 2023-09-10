import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index'; // Adjust the path as needed

// Home component
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the Home page!</p>
  </div>
);

// About component
const About = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the About page.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Index /> {/* Use the Index component here */}
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;