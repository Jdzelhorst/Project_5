import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <Navbar expand="lg" className={styles.Navbar} sticky="top">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto p-2">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="sign-in">Sign In</Nav.Link>
                <Nav.Link href="sign-up">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default NavBar;