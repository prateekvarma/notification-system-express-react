import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary'
      bg='dark'
      data-bs-theme='dark'
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Gila Software</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Post a message</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/logs'>
              <Nav.Link>View logs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
