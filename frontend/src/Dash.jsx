import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet, useNavigate} from "react-router-dom"
const Dash = () => {
    const navigate = useNavigate()
    useEffect(()=>{
       if(!localStorage.getItem("name"))
       {
        navigate("/home")
       }
    })
    const logout = ()=>{
        navigate("/home")
        localStorage.clear()
    }
   
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" expand="lg">   
      <Container>
      <Navbar.Brand href="#home" className="ms-auto">
          <img src="./logo.png" alt="Logo" width="100px" />
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="create" className="text-white" style={{fontSize : "20px", fontWeight : "600"}}>CreateNotes</Nav.Link>
            <Nav.Link  as={Link} to="mynotes" className="text-white" style={{fontSize : "20px", fontWeight : "600"}}>MyNotes</Nav.Link>
            <Nav.Link  as={Link} to="uploadimages" className="text-white" style={{fontSize : "20px", fontWeight : "600"}}>UploadImages</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <Button variant="outline-success" className="me-2" onClick={logout} >Logout</Button>
        </div>
      </Container>
    </Navbar>
<Outlet/>
    </>
  )
}

export default Dash