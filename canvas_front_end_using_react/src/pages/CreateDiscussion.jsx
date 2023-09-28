import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    topicTitle: '',
    topicDescription: '',
    response: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to your server for processing
      const response = await fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData)

      if (response.ok) {
        // Registration successful
        alert('Registration successful!');
        // You can also redirect the user to a login page
        navigate('/login');
      } else {
        // Registration failed
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>DISCUSSION</h2>
        <div className="form-group">
          <input
            type="text"
            required='true'
            name="topicTitle"
            placeholder="Topic Title"
            value={formData.topicTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            required='true'
            name="topicDescription"
            placeholder="Topic Description"
            value={formData.topicDescription}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            required='true'
            name="response"
            placeholder="Response"
            value={formData.response}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
