import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory

function Login() {
  const history = useHistory(); // Initialize useHistory

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful login (you should replace this with your actual login logic)
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Redirect to the dashboard page
      history.push('/dashboard');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Form inputs and submit button */}
      </form>
    </div>
  );
}

export default Login;
