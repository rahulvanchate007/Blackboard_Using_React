import React, { useState } from 'react';
import '../styles/FormStyle.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function UploadCourse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseName: '',
    courseMaterial: '',
    instructorId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to your server for processing
      const response = await fetch('http://localhost:8080/admin/addCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      
        alert('Course uploaded');
        // You can also redirect the user to a login page
        navigate('/dashboard');
      } else {
        alert('Failed to upload');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>UPLOAD COURSE</h2>
        <div className="form-group">
          <input
            type="text"
            required='true'
            name="courseName"
            placeholder="Course Name"
            value={formData.courseName}
            onChange={handleChange}
          />
        </div>
        <h3>--- Course Material ---</h3>
        <div className="form-group">
          <input
            type="text"
            name="courseMaterial"
            required='true'
            placeholder="Course Material"
            value={formData.courseMaterial}
            onChange={handleChange}
          />
        </div>
        <h3>--- Instructor ID ---</h3>
        <div className="form-group">
          <input
            type="number"
            name="instructorId"
            required='true'
            placeholder="Instructor ID"
            value={formData.instructorId}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">Upload Course</Button>
      </form>
    </div>
  );
}

export default UploadCourse;
