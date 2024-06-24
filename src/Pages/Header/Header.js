import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { NavLink,Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faPhone, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    return (
        <div >
        
             
      <Navbar className='p-2' fixed="top" collapseOnSelect expand="lg" style={{background:"rgba(0, 0, 0, 0.3)"}} data-bs-theme="light">
        
      <Navbar.Brand className='text-light cover-name'  href="#home">  <img src="images\logo-removebg-preview.png" alt="" width="50px"/> Tour Bird</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
           
        

          <Nav className="me-auto">
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/tours'>Tours</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/hotels'>Hotels</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/restaurants'>Restaurants</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/offers'>Offers</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/transfers'>Transfers</Link> </Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/contactus'>Contact Us</Link></Nav.Link>
            
           

            
        
          </Nav>
          <Form className=" d-flex text-end">
          {/* <Nav.Link><Link  className='text-decoration-none text-light ' to='/signin'><p className='text-light px-2'>Sign in <FontAwesomeIcon icon={faSignIn} /></p></Link></Nav.Link> */}
          <div>
          <a className='text-decoration-none text-light' onClick={handleShow}>
          Sign in <FontAwesomeIcon icon={faSignIn} />
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-start p-3'>
        <div className='text-center'><Button variant="warning" onClick={handleClose}>
           Google Sign in
          </Button></div> 
        <div >
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
  <div className='text-end'><Button variant="warning" onClick={handleClose}>
            Sign in
          </Button></div>
</div>
        </Modal.Body>
     
      </Modal>
          </div>



                </Form>
                </Navbar.Collapse>
      
      </Navbar>
        </div>
    );
};

export default Header;