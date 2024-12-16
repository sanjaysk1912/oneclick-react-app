import React from 'react'
import {Nav,Container,Navbar} from 'react-bootstrap'
import logo from '../images/logo.png'
const Navbar1 = () => {
    return (
        <div>
        <Navbar expand="lg" className="navbar-main">
  <Container fluid> 
    <Navbar.Brand href="#home" className="main-logo"><img src={logo} alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-btn" />
    <Navbar.Collapse id="basic-navbar-nav" className="menu-icon">
      <Nav className="navbar-navbar-nav">
        <Nav.Link className="nav-items" href="#home">Home</Nav.Link>
        <Nav.Link className="nav-items" href="#about-about">About</Nav.Link>
        <Nav.Link className="nav-items" href="#serv">Services</Nav.Link>
        <Nav.Link className="nav-items" href="#link">Work</Nav.Link>
        <Nav.Link className="nav-items" href="#link">Team</Nav.Link>
        <Nav.Link className="nav-items" href="#link">News</Nav.Link>
        <Nav.Link className="nav-items" href="#link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navbar1
