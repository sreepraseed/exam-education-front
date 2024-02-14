import React from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div  className="w-100 ">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/" className="fw-bold fs-4">Education</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="fw-bold me-2" href="#home">Home</Nav.Link>
                <Nav.Link className="fw-bold me-2">Service</Nav.Link>
                <Nav.Link className="fw-bold me-2">About</Nav.Link>
                <Link to={'/allStudents'}><button className="btn btn-info me-3 ">All Students</button></Link>
                <Button>Login</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ height: "100vh" }} className="row">
          <div  className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center ">
          <div className="px-4">
          <h1 className="mb-3">Education</h1>
            <h5 className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi laborum assumenda nulla exercitationem asperiores. Eum, eveniet nulla expedita ex maiores ipsam quibusdam cumque nihil quidem cupiditate incidunt, rem soluta?</h5>
            
            <p className="mb-3 me-3 text-warning">Are You New Student?Click To Register</p>
            <Link to={'/register'}><button className="btn btn-success ">Register</button></Link>
          
            </div>
          </div>
          <div className="col-lg-6 col-md-12 pe-4">
           <img src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg" alt="image not found" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
