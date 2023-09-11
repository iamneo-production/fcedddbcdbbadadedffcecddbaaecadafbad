import React, { useState } from 'react';
import { Container, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import 'useNavigate' instead of 'useHistory'

const Login = () => {
  const navigate = useNavigate(); // Use 'useNavigate' instead of 'useHistory'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Perform authentication logic here (replace with your actual authentication process)

    // Simulate a delay to mimic a real authentication request
    setTimeout(() => {
      if (username === 'demo' && password === 'password') {
        // Successful login
        navigate('/dashboard'); // Use 'navigate' instead of 'history.push'
      } else {
        // Failed login
        setError('Invalid username or password. Please try again.');
      }
    }, 1000);
  };

  return (
    <Container>
      <h1>Login Page</h1>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
