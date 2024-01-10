import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = (
    <>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="sign-in">Sign In</Nav.Link>
      <Nav.Link href="sign-up">Sign Up</Nav.Link>
    </>
);

  return (
    <Navbar expand="lg" className={styles.Navbar} sticky="top">
      <Container>
        <Navbar.Brand href="/">Interactopia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto p-2">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="sign-in">Sign In</Nav.Link>
            <Nav.Link href="sign-up">Sign Up</Nav.Link>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;