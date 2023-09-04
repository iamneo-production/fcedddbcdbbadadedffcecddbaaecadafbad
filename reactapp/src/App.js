import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from "./SignIn";
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
      <SignIn /> 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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