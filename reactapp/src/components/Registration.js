import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Registration() {
  return (
    <div className="registration-page">
      <Navbar expand="lg" className="custom-navbar-bg">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }}>Registration</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center mt-5">
        <Form>
          <Form.Group controlId="formUserRole">
            <Form.Select aria-label="Default select example">
                <option>Admin/User</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
           </Form.Select>
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Control type="email" placeholder="Enter Email" style={{ width: '350px' }} />
          </Form.Group>

          <Form.Group controlId="formUsername" className="mt-3">
            <Form.Control type="text" placeholder="Enter Username" style={{ width: '350px' }} />
          </Form.Group>

          <Form.Group controlId="formMobileNumber" className="mt-3">
            <Form.Control type="text" placeholder="Enter Mobile Number" style={{ width: '350px' }} />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Control type="password" placeholder="Enter Password" style={{ width: '350px' }} />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Control type="password" placeholder="Confirm Password" style={{ width: '350px' }} />
          </Form.Group>
          
          <div className="d-flex justify-content-center mt-4">
            <Button type="submit" variant="primary">Register</Button> 
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
