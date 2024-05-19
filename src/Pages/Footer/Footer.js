import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeartPulse, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className=' text-light footer bg-l'>
            <div>
  <div className="row p-5">
    <div className="col-6 text-start">
    
    <h4> <img src='images/logo-removebg-preview.png' style={{width:"10%"}}></img> Tour Bird</h4>
    <small>Health is not valued till sickness comes. Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.</small>
    </div>
    <div className="col text-start ps-5 ">
     <p><FontAwesomeIcon icon={faLocationDot} />  Dhaka, Bangladesh</p>
    <p><FontAwesomeIcon icon={faPhone} /> +08809475483</p>
    <p><FontAwesomeIcon icon={faEnvelope} /> tourbird@gmail.com</p>
    </div>
    <div className="col text-start">
    <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
       <p> <FontAwesomeIcon icon={faTwitter} /> Twitter</p>
        
       <p> <FontAwesomeIcon icon={faYoutube} /> Youtube</p>
    </div>
  </div>
  <hr></hr>       
<p className='text-light'> This site made by Ajmiri Afrin © 2020 Copyright </p>
</div>
        


       
  
  
  
        </div>
    );
};

export default Footer;