import React, { useState } from 'react';
import '../styles/FormStyle.css';
import { useNavigate } from 'react-router-dom';
import { Today } from '@mui/icons-material';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseId: '',
    enrollmentDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to your server for processing
      const response = await fetch('http://localhost:8080/student/enrollCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Course Enrolled!');
        // You can also redirect the user to a login page
        navigate('/dashboard');
      } else {
        alert('Enrollment Failed, Try again');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>ENROLL COURSE</h2>
        <div className="form-group">
          <input
          required='true'
            type="number"
            name="courseId"
            placeholder="Course ID"
            value={formData.courseId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            required='true'
            name="enrollmentDate"
            placeholder="Enrollment Date"
            value={formData.enrollmentDate}
            onChange={handleChange}
            defaultValue={Today}
          />
        </div>
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default Register;
