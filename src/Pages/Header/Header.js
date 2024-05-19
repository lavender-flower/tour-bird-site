import React from 'react';
import Form from 'react-bootstrap/Form';
import { NavLink,Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faPhone, faSignIn } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  
    return (
        <div >
        
             
      <Navbar className='p-2' fixed="top" collapseOnSelect expand="lg" style={{background:"rgba(0, 0, 0, 0.3)"}} data-bs-theme="light">
       
           
          <Navbar.Brand className='text-light cover-name' href="#home">  <img src="images\logo-removebg-preview.png" alt="" width="35" height="35"/> Tour Bird</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/tours'>Tours</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/hotels'>Hotels</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='/restaurants'>Restaurants</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='offers'>Offers</Link></Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='transfers'>Transfers</Link> </Nav.Link>
            <Nav.Link><Link  className='text-decoration-none text-light ' to='contactus'>Contact Us</Link></Nav.Link>
            
           

            
        
          </Nav>
          <Form className=" d-flex text-end">
          <Nav.Link><Link  className='text-decoration-none text-light ' to='signin'><p className='text-light px-2'>Sign in <FontAwesomeIcon icon={faSignIn} /></p></Link></Nav.Link>
        


                </Form>
                </Navbar.Collapse>
      
      </Navbar>
        </div>
    );
};

export default Header;