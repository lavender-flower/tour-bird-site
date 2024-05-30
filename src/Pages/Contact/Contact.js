import React from 'react';
import '../overlay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faHeadset, faLocationDot, faQuestion } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    return (
        <div>
                  <div className="container-overlay">
  <img src="images/contact.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay">
    <div className="text-overlay"><h1 style={{fontSize:'4vw'}} className='display-2'>Get In Touch </h1><br></br><p style={{fontSize:'1.5vw'}}>
    Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about ...
</p>

<button type="button" style={{fontSize:'1.5vw'}} className="rounded-pill btn btn-sm btn-warning">Read More</button>

</div>
  </div>
</div>

<div className="container py-5">
  <div className="row ">
   
    <div className="col-8  text-start" style={{fontSize:'1.5vw'}}>
    <h3 style={{fontSize:'2vw'}}><FontAwesomeIcon className='text-warning' icon={faPenToSquare} /> Fill the form below</h3>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" style={{fontSize:'1vw'}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Write Comments</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Human Verification</label>
    <input type="number" style={{fontSize:'1vw'}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Are you human?5+2='/>
    
  </div>
  <button style={{fontSize:'1vw'}} type="submit" className="btn btn-sm btn-warning">Submit</button>
</form>
    </div>
    <div className="col-4 " style={{fontSize:'1.5vw'}}>
     <div className='border p-3 text-start mb-4 rounded'>
     <h3 style={{fontSize:'2vw'}}>Address <FontAwesomeIcon className='text-warning' icon={faLocationDot} /></h3>
     <p>Dhaka Bangladesh</p>
     
        <h3 style={{fontSize:'2vw'}}>Help Center <FontAwesomeIcon className='text-warning' icon={faQuestion} /></h3>
        <p>
        Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about.<br></br><br></br>

+ 61 (2) 8093 3400 / + 61 (2) 8093 3402
info@domain.com</p>
     </div>
     <div className='border p-3 rounded'>
     <FontAwesomeIcon className='fs-1 text-warning' icon={faHeadset} />
     <h5 style={{fontSize:'2vw'}}>Need Help?</h5>
     <h3 className='text-warning' style={{fontSize:'2vw'}}>+755480655</h3>
     <small>Monday to Friday 9.00am - 7.30pm</small>

     </div>

    </div>
   
  </div>
</div>
        </div>
    );
};

export default Contact;