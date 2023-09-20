import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login'; // Import the Login component
import './styles.css';
import 'react-bootstrap/dist/react-bootstrap';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
