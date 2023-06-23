import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9000/logs')
      .then((response) => setLogs(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Table striped bordered hover variant='dark' className='mt-5'>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Category</th>
            <th>Name of User</th>
            <th>Message</th>
            <th>Type of notifications</th>
            <th>User email</th>
            <th>Time of log</th>
          </tr>
        </thead>
        <tbody>
          {logs?.map((log) => {
            return (
              <tr key={log.id}>
                <th>{log.id}</th>
                <th>{log.category}</th>
                <th>{log.userName}</th>
                <th>{log.message}</th>
                <th>{log.type}</th>
                <th>{log.email}</th>
                <th>{log.time}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
