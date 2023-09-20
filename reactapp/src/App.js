import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container"> {/* Use a container for proper styling */}
        <Login />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;