import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tech-view</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/about">About</Nav.Link>
                        <Nav.Link to="/review">Review</Nav.Link>
                        <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;