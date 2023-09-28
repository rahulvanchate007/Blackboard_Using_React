import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import uploadCourse from '../pages/UploadCourse';

function CourseList() {
    const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
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
  

  const handleCreateCourse = () => {
    navigate('/uploadCourse')
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Courses</h1>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem', // Add some margin for spacing
        }}
      >
    <Box display="flex" justifyContent="flex-end" width="100%">
        <Button fullWidth sx={{ width: '200px', textAlign: 'right' }} variant="contained" color="primary" onClick={handleCreateCourse}>
          Create Course +
        </Button>
    </Box>
      </Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Course Material</TableCell>
              <TableCell>Instructor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.courseId}>
                <TableCell>{course.courseId}</TableCell>
                <TableCell>{course.courseName}</TableCell>
                <TableCell>{course.courseMaterial}</TableCell>
                <TableCell>{course.instructorId.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CourseList;