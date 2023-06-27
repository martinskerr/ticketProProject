import React from 'react';
import './ui/header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark" className="navBar bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">TicketPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Conciertos</Nav.Link>
            <NavDropdown title="Mas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Mas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="search d-flex">
            <Form.Control
              type="search"
              placeholder="Buscas algun evento?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Buscar </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;