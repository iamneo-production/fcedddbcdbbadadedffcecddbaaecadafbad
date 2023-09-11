import React from 'react';
import { Container, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Perform your login logic here

    // For demo purposes, let's simulate a login delay
    setTimeout(() => {
      // Redirect to a new page (e.g., Dashboard) after successful login
      history.push('/dashboard');
    }, 1000);
  };

  return (
    <Container>
      <h1>Login Page</h1>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
