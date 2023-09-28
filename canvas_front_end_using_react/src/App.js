// src/App.js

import React, {useState} from 'react';
import './App.css';
import Login from './pages/LoginPage.jsx';
import Register from './pages/RegisterUser';
import UpdateProfile from './pages/UpdateProfile';
import UploadAssignment from './pages/UploadAssignment'
import EnrollCourse from './pages/EnrollCourse';
import UploadCourse from './pages/UploadCourse';
import UpdateRoleAndDeleteUser from './pages/UpdateRoleAndDeleteUser'
import CreateDiscussion from './pages/CreateDiscussion';

import Dashboard from './components/MenuBar.tsx';
import DiscussionThread from './components/DiscussionThread';
import CourseTable from './components/CoursesTable';
import AssignmentsTable from './components/AssignmentsTable';

import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Dashboard/>
        <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/updateProfile" element={<UpdateProfile/>} />
        <Route path="/uploadAssignment" element={<UploadAssignment/>} />
        <Route path="/enrollCourse" element={<EnrollCourse/>} />
        <Route path="/uploadCourse" element={<UploadCourse/>} />
        <Route path="/updateRoleAndDeleteUser" element={<UpdateRoleAndDeleteUser/>} />
        <Route path="/createDiscussion" element={<CreateDiscussion/>} />
        <Route path="/courseTable" element={<CourseTable/>} />
        <Route path="/assignmentsTable" element={<AssignmentsTable/>} />
        <Route path="/discussionThread" element={<DiscussionThread/>} />
        {/* Add other routes as needed */}
    </Routes>
    </Router>
    
    
  );
}

export default App;
