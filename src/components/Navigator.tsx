import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigator() {

    return (
        <Navbar id="navbar" expand="lg" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">JJ</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavDropdown" />
                <Navbar.Collapse id="navbarNavDropdown" className="justify-content-end">
                    <Nav navbarScroll style={{ maxHeight: '150px' }}>
                        <Nav.Link href="#home" className="me-md-5">Home</Nav.Link>
                        <Nav.Link href="#about" className="me-md-5">About</Nav.Link>
                        <Nav.Link href="#repository" className="me-md-5">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}