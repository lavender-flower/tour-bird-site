import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeartPulse, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className=' text-light footer bg-l' >
            <div>
  <div className="row">
    <div className="col-lg-6 text-start p-4 ps-5 pt-5">
    
    <h4 > <img src='images/logo-removebg-preview.png' style={{width:"17%"}}></img> Tour Bird</h4>
    <small >Travel when you're weary. Refresh and renew yourself, your body, your mind, your spirit.</small>
    </div>
    <div className="col-lg-3 text-start px-5 pt-5 " >
     <p><FontAwesomeIcon icon={faLocationDot} />  Dhaka, Bangladesh</p>
    <p><FontAwesomeIcon icon={faPhone} /> +08809475483</p>
    <p><FontAwesomeIcon icon={faEnvelope} /> tourbird@gmail.com</p>
    </div>
    <div className="col-lg-3 text-start p-5" >
    <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
       <p> <FontAwesomeIcon icon={faTwitter} /> Twitter</p>
        
       <p> <FontAwesomeIcon icon={faYoutube} /> Youtube</p>
    </div>
  </div>
  <hr></hr>       
<p className='text-light' > This site made by Ajmiri Afrin © 2024 Copyright </p>
</div>
        


       
  
  
  
        </div>
    );
};

export default Footer;