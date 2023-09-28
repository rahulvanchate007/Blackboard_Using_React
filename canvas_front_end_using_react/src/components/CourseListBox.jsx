import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AssignmentsTable from './AssignmentsTable'
import { useStateValue } from '../StateProvider';

import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Typography,
} from '@mui/material';



function CourseListBox() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [user, setUser] = useState({
    // Initialize with user information
    userId : 5,
    // Add other user properties as needed
  });

  useEffect(() => {
    // Create a query string with user information
    const queryParams = new URLSearchParams({ userId: user.userId }); // Adjust the parameter name as needed
  
    // Make a GET request to the API with the query string
    fetch(`http://localhost:8080/user/getCourses?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the list of courses from the API
        setCourses(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [user]);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div style={{ textAlign: 'left', }}>
      
      <FormControl fullWidth sx={{ width: '300px', textAlign: 'center' }}>
        <InputLabel id="course-select-label">Select a course</InputLabel>
        <Select
          labelId="course-select-label"
          id="course-select"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <MenuItem value="">
            <em>Select a course</em>
          </MenuItem>
          {courses.map((course) => (
            <MenuItem key={course.courseId} value={course.courseId}>
              {course.courseName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedCourse && (
        <Typography variant="body1" gutterBottom>
          Selected Course ID: {selectedCourse}
        </Typography>
      )}

    </div>
  );
}

export default CourseListBox;
