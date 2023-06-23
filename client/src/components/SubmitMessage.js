import { useState } from 'react';
import axios from 'axios';
import { validateMessage } from '../util/validation'; // helper function to validate

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

export default function SubmitMessage() {
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState(null);

  const handleDropDownChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setMessage(e.target.value);
  };

  // helper function for notification
  const handleNotification = (notificationMessage) => {
    setNotification(notificationMessage);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateMessage(message)) {
      axios
        .post('http://localhost:9000/notify', { category, message })
        .then((response) => {
          handleNotification('Message sent successfully!');
        })
        .catch((error) => console.log(error));
    } else {
      handleNotification('Message field cannot be empty');
    }
  };

  return (
    <Container>
      <Form className='mt-5' onSubmit={handleSubmit}>
        <Form.Select
          aria-label='Default select example'
          value={category}
          onChange={handleDropDownChange}
        >
          <option>Select a</option>
          <option value='Sports'>Sports</option>
          <option value='Finance'>Finance</option>
          <option value='Movies'>Movies</option>
        </Form.Select>
        <br />
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Type your message:</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={message}
            onChange={handleTextAreaChange}
          />
        </Form.Group>
        <Button variant='dark' type='submit'>
          Submit
        </Button>
        {notification && (
          <Alert key='success' variant='success' className='mt-2'>
            {notification}
          </Alert>
        )}
      </Form>
    </Container>
  );
}
