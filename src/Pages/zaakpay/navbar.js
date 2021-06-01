import React from 'react';
import {Navbar,Nav,Image,Button} from 'react-bootstrap';
import './navbar.css';

function Head() {
  return (
    <Navbar bg="white" expand="lg" className="Headernav">
  <Navbar.Brand className="brandt" href="#home" ><Image className="navimage" src="https://zaakpay.com/assets/images/main-logo.svg" /></Navbar.Brand>
  <Navbar.Toggle className=" ml-10 mb-4 togbtn"  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="" id="responsive-navbar-nav">
    <Nav className="mr-auto" variant="dark">
      <Nav.Link href="#home">Product</Nav.Link>
      <Nav.Link className="links" href="#link">Pricing</Nav.Link>
      <Nav.Link className="links" href="#home">Developers</Nav.Link>
      <Nav.Link className="links" href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Nav className="left">
  <Button className="leftb" variant="primary"  active>
Login
  </Button>
  <Button className="rightb"  variant="primary" active>
Create Account
  </Button>
    </Nav>

</Navbar>
  );
}

export default Head;
