import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom"

const TopNav = () => {
  const navigate = useNavigate()
  const Signup = ()=>{
    navigate("/signup")
  }
  const login = ()=>{
    navigate("/login")
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">   
      <Container>
      <Navbar.Brand href="#home" className="ms-auto">
          <img src="./logo.png" alt="Logo" width="100px" />
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="home" className="text-white" style={{fontSize : "20px", fontWeight : "600"}}>Home</Nav.Link>
            <Nav.Link  as={Link} to="contact" className="text-white" style={{fontSize : "20px", fontWeight : "600"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <Button variant="outline-success" className="me-2" onClick={Signup}>SignUp</Button>
          <Button variant="outline-success" className="me-3" onClick={login}>Login</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNav;