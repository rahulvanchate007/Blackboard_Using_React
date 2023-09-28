import React, { useState, useEffect ,useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CourseListBox from './CourseListBox';

function AssignmentList() {
    const navigate = useNavigate();
  const [assignments, setAssignments] = useState([]);
  const [user, setUser] = useState({
    // Initialize with user information
    courseId : 2,
    // Add other user properties as needed
  });

  useEffect(() => {
    // Create a query string with user information
    const queryParams = new URLSearchParams({ courseId: user.courseId}); // Adjust the parameter name as needed

    // Make a GET request to the API with user information in the request body
    fetch(`http://localhost:8080/student/getAssignments?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      // Update the state with the list of assignments from the API
      setAssignments(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [user]);

  const handleCreateAssignment = () => {
    navigate('/uploadAssignment');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Assignments</h1>
      <CourseListBox/>
      <h1></h1>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem', // Add some margin for spacing
        }}
      >
       <Box display="flex" justifyContent="flex-end" width="100%">
      <Button sx={{ width: '250px' }} variant="contained" color="primary" onClick={handleCreateAssignment}>
        Create Assignment +
      </Button>
    </Box>
      </Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Assignment ID</TableCell>
              <TableCell>Assignment Name</TableCell>
              <TableCell>Assignment Date</TableCell>
              <TableCell>Assignment Description</TableCell>
              <TableCell>Course ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignments.map((assignment) => (
              <TableRow key={assignment.assignmentId}>
                <TableCell>{assignment.assignmentId}</TableCell>
                <TableCell>{assignment.assignmentName}</TableCell>
                <TableCell>{assignment.assignmentDate}</TableCell>
                <TableCell>{assignment.assignmentDescription}</TableCell>
                <TableCell>{assignment.courseId.courseId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AssignmentList;
