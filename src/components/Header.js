import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () =>{
    return(
        <Navbar bg="light" expand="lg">
        <LinkContainer exact to="/">
            <Navbar.Brand>Artwork Curator</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-center" >
                <LinkContainer to="/aboutme">
                    <Nav.Link>About Me</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
