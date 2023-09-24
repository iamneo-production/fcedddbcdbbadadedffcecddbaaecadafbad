import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../../styles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { createUser, getUsers} from './userService';
import { createAdmin } from '../Admin/adminService';

function Registration() {
    const [formData, setFormData] = useState({
      email: '',
      username: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
      userRole:''
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleSubmit = (e) => {
      createUser(formData);
      createAdmin(formData);
      e.preventDefault();
    };
   
  return (
    <div className="registration-page">
      <Navbar expand="lg" className="custom-navbar-bg">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }}>Registration</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUserRole">
          <Form.Select
              aria-label="Default select example"
              name="userRole"
              onChange={handleChange}
              value={formData.userRole}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mt-3">
          <Form.Control
              type="email"
              placeholder="Enter Email"
              style={{ width: '350px' }}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formUsername" className="mt-3">
          <Form.Control
              type="text"
              placeholder="Enter Username"
              style={{ width: '350px' }}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMobileNumber" className="mt-3">
          <Form.Control
              type="text"
              placeholder="Enter Mobile Number"
              style={{ width: '350px' }}
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
          <Form.Control
              type="password"
              placeholder="Enter Password"
              style={{ width: '350px' }}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mt-3">
          <Form.Control
              type="password"
              placeholder="Confirm Password"
              style={{ width: '350px' }}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>
          
          <div className="d-flex justify-content-center mt-4">
            <Button type="submit" variant="primary" >Register</Button> 
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
