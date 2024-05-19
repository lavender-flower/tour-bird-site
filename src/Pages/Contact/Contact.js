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
    <div className="text-overlay"><h1 className='display-2'>Get In Touch </h1><br></br><p>
    Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about ...
</p>

<button type="button" className="rounded-pill btn btn-warning">Read More</button>

</div>
  </div>
</div>

<div class="container py-5">
  <div class="row ">
   
    <div class="col-8 pe-5 text-start">
    <h3><FontAwesomeIcon className='text-warning' icon={faPenToSquare} /> Fill the form below</h3>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Write Comments</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"><small>Human Verification</small></label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Are you human?5+2='/>
    
  </div>
  <button type="submit" class="btn btn-warning">Submit</button>
</form>
    </div>
    <div class="col-4">
     <div className='border p-3 text-start mb-4 rounded'>
     <h3>Address <FontAwesomeIcon className='text-warning' icon={faLocationDot} /></h3>
     <p>Dhaka Bangladesh</p>
     
        <h3>Help Center <FontAwesomeIcon className='text-warning' icon={faQuestion} /></h3>
        <p>
        Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about.<br></br><br></br>

+ 61 (2) 8093 3400 / + 61 (2) 8093 3402
info@domain.com</p>
     </div>
     <div className='border p-3 rounded'>
     <FontAwesomeIcon className='fs-1 text-warning' icon={faHeadset} />
     <h5>Need Help?</h5>
     <h3 className='text-warning'>+755480655</h3>
     <small>Monday to Friday 9.00am - 7.30pm</small>

     </div>

    </div>
   
  </div>
</div>
        </div>
    );
};

export default Contact;