// src/components/LoginPage.js

import React, { useState } from 'react';
import '../styles/LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/login', formData, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const token = response.data;
      if (response.status === 200) {
        // Successful login
        console.log(response.data + "success");
        console.log(token);
        
        
        navigate('/dashboard');
      } else {
        // Failed login
        console.log(token);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="image-container">
        <img height={800} width={500} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6PgRPCWk703k8taovDPqf-hhxLoiD-k_dmY8lgNjfO-qw869zKt4d0qGAgLWNUI-iFJQ&usqp=CAU" alt="Login Image" />
        <img height={800} width={500} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVn4cZDb5fYmcA2i2uRNzUyheFScIiPmmNKSP6V7cpYAPXCLbUVHwBouJT_Pp7fsFiKw&usqp=CAU" alt="Login Image" />
      </div>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <TextField
          required
          type="email"
          name="email"
          id="outlined-required"
          label="EMAIL"
          defaultValue=""
          value={formData.username}
            onChange={handleInputChange}
        />
        <br/>
          <TextField
          required
          type="password"
          name="password"
          id="outlined-required"
          label="PASSWORD"
          defaultValue=""
          value={formData.password}
            onChange={handleInputChange}
        />
          <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
        Login
      </Button>
        </form>
        <br/>
        <div style={{ textAlign: 'center' }}>
          <p>New User?   </p>  
          <a href="/register">Register here</a>
        </div>
        
      </div>
    </div>
  );
}

export default LoginPage;
