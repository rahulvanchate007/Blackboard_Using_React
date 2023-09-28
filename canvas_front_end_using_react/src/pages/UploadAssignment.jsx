import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function UploadAssignment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseId: '',
    studentId: '',
    assignmentName: '',
    assignmentDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to your server for processing
      const response = await fetch('http://localhost:8080/instructor/uploadAssignment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Assignment uploaded');
        
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
        <h2>Upload Assignment</h2>
        <div className="form-group">
          <TextField
            type="number"
            required='true'
            name="courseId"
            placeholder="Course ID"
            value={formData.courseId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <TextField
            type="text"
            name="assignmentName"
            required='true'
            placeholder="Assignment Name"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <h3>---Deadline---</h3>
        <div className="form-group">
          <TextField
            type="date"
            name="assignmentDate"
            required='true'
            placeholder="Deadline"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
        Upload Assignment
      </Button>
      </form>
    </div>
  );
}

export default UploadAssignment;
