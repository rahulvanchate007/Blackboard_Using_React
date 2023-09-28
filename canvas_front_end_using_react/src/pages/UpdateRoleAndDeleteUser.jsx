import React, { useState } from 'react';
import '../styles/FormStyle.css';
import { useNavigate } from 'react-router-dom';

function UpdateRole() {
  const navigate = useNavigate();
  const [formData1, setFormData1] = useState({
    userId: '',
    role: ''
  });

  const [formData2, setFormData2] = useState({
    userIdToDelete: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1({ ...formData1, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to your server for processing
      const response = await fetch('http://localhost:8080/admin/updateRole', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData1),
      });

      if (response.ok) {
      
        alert('Role updated');
        // You can also redirect the user to a login page
        // navigate('/dashboard');
      } else {
        console.log(formData1)
        alert('Failed to update Role');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChangeForm2 = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
  };

  const handleSubmitForm2 = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to your server for processing
      const response = await fetch('http://localhost:8080/admin/deleteUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData2),
      });

      if (response.ok) {
      
        alert('User Deleted');
        // You can also redirect the user to a login page
        // navigate('/dashboard');
      } else {
        alert('Failed to delete User');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>UPDATE ROLE</h2>
        <div className="form-group">
          <input
            type="number"
            required='true'
            name="userId"
            placeholder="User ID"
            value={formData1.userId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            required='true'
            name="role"
            value={formData1.role}
            onChange={handleChange}
          >
            <option value="INSTRUCTOR">INSTRUCTOR</option>
            <option value="STUDENT">STUDENT</option>
          </select>
        </div>
        <button type="submit">Upload Course</button>
      </form>

      <form onSubmit={handleSubmitForm2}>
        <h2>DELETE USER</h2>
        <div className="form-group">
          <input
            type="number"
            required='true'
            name="userIdToDelete"
            placeholder="User ID"
            value={formData1.userIdToDelete}
            onChange={handleChangeForm2}
          />
        </div>
        
        <button type="submit">Delete User</button>
      </form>

    </div>
  );
  
}

export default UpdateRole;
