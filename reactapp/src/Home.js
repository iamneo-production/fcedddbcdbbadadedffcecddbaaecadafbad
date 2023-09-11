import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
