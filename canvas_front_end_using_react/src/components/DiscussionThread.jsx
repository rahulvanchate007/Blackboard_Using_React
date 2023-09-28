import React, { useState } from 'react';
import '../styles/ChatStyle.css';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CourseListBox from './CourseListBox';

function DicussionThread() {
    const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleCreateAssignment = () => {
    navigate('/createDiscussion');
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessages = [...messages, { text: newMessage, user: 'User' }];
      setMessages(newMessages);
      setNewMessage('');
    }
  };

  return (
    <div>
    <h1 style={{ textAlign: 'center' }}>Discussions</h1>
      <CourseListBox/>
      <h1></h1>
      <Box display="flex" justifyContent="flex-end" width="100%">
      <Button sx={{ width: '250px' }} variant="contained" color="primary" onClick={handleCreateAssignment}>
        Create Discussion +
      </Button>
    </Box>
    <h1></h1>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user === 'User' ? 'user-message' : 'other-message'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default DicussionThread;
