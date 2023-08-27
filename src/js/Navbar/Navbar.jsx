import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import "./style.css";

const MyNavBar = () => {
	return (
	<Stack direction="horizontal" gap={3}>
		<Navbar bg="dark" data-bs-theme="dark">
		<Container>
		<div className="p-2">
		<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
	  	</div>
      	<div className="p-2 ms-auto">
		  <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
			<Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
		</div>
      	<div className="p-2">Third item</div>
		</Container>
		</Navbar>
    </Stack>
	)
};

export default MyNavBar;
