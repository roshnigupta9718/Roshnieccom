import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function MyNav() {
   
    let navClass='text-decoration-none m-3 text-danger fw-bolder'
  return (
    
    <div>

<Navbar  expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img width={'120px'} height={'80px'} src="https://cdn-icons-gif.flaticon.com/9671/9671248.gif" alt="  " /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink  className={`${navClass}`} to='/register'>Register</NavLink>
            <NavLink className={`${navClass}`}to='/'>Login</NavLink>
            <NavLink className={`${navClass}`}to='/store'>Store</NavLink>
            <NavLink className={`${navClass}`}to='/dashboard'>Dashboard</NavLink>
            <NavDropdown className='mt-2' title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              
              
             
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNav