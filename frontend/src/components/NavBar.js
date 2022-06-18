import axios from 'axios';
import React from 'react';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
axios.defaults.withCredentials = true
function NavBar(props) {

    const logout = async()=>{
        await axios.post("http://localhost:3001/api/auth/signout").then(res=>{
            if(res.status==200){
                alert("Oled välja logitud");
                window.location.reload();
            }
        }).catch(err=>{
            alert("Viga")
            console.log(err)
        });
    }
    const{mode,username}=props
    if(mode=="guest"){

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
                            <Nav.Link href="/paevik">Päevik</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
    else
    {
        return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">ARP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav></Nav>
                <Nav>
                    <NavDropdown title={username} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/paevik">Päevik</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/development/testing">Testing</NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
    }



}

export default NavBar;