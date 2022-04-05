import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Tech-view</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : "nav-link"} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : "nav-link"} to="/about">About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : "nav-link"} to="/review">Review</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : "nav-link"} to="/dashboard">Dashboard</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : "nav-link"} to="/blogs">Blogs</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;