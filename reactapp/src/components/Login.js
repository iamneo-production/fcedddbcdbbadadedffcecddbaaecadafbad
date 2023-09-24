import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login =(props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
      const adminResponse = await axios.post('https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/admin/login', { email, password });
      console.log("handleLogin",adminResponse);
      if (!adminResponse.data) {
        navigate('/AdminGifts');
      }
      else {
        const userResponse = await axios.post('https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/user/login', { email, password });
        if (userResponse.data) {
           navigate('/');
        }
      }

  };

  return (
    <div className="login-page">
      <div className="centered-"
      <Navbar expand="lg" className="custom-navbar-bg">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }}>Login</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center mt-5">
        <Form>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Control type="email" placeholder="Enter Email" style={{ width: '350px' }} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Control type="password" placeholder="Enter Password" style={{ width: '350px' }} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          
          <div className="d-flex justify-content-center mt-4">
            <Button type="submit" variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Form>
      </Container>
      <Container className="mt-3 text-center">
        <div>New user/admin?</div>
        <Link to="/Registration">Register</Link>
      </Container>
    </div>
  );
}

export default Login;
