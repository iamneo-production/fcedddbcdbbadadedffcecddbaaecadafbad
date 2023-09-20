import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="login-page">
      <Navbar expand="lg" className="custom-navbar-bg">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }}>Login</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center mt-5">
        <Form>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Control type="email" placeholder="Enter Email" style={{ width: '350px' }} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3"> {/* Increased margin-top */}
            <Form.Control type="password" placeholder="Enter Password" style={{ width: '350px' }} />
          </Form.Group>
          
          <div className="d-flex justify-content-center mt-4"> {/* Increased margin-top */}
          <Button type="submit" variant="primary">Login</Button> 
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




