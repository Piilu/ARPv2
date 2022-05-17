import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">ARP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav></Nav>
                    <Nav >
                        <Nav.Link href="/">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <NavDropdown title="Development" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/paevik">Päevik</NavDropdown.Item>
                            <NavDropdown.Item href="/home">ARP</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/development/testing">Testing</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;