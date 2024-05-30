import React from 'react';
import './Home.css'
import CaroselPart from './CaroselPart/CaroselPart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAlt, faPersonWalkingLuggage, faTents } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
        
  <CaroselPart></CaroselPart>
  <div class="container">
  <div class="row">
   
    <div class="col-lg-6 img-hover-zoom py-3">
   <Link to='/offers'>
   <img src="images/offers.jpg" class="img-fluid" style={{width:'100%',filter: "brightness(65%)"}} alt="..."/>
    <div class="text" style={{fontSize:'1.5vw'}}><h4 style={{fontSize:'2vw'}}>Special Offers</h4>
    <small>1150 Location</small></div>
   </Link>
    
    </div>
    
    <div class="col-lg-6 py-3">
     
    
  <div className='pb-3 img-hover-zoom'>
   <Link to='/restaurants'>
   <img src="images/restu.jpg" class="img-fluid" style={{width:'100%',filter: "brightness(65%)"}} alt="..."/>
     <div class="text" style={{fontSize:'1.5vw'}}><h4 style={{fontSize:'2vw'}}>Restaurants</h4>
     <small>150 Location</small>
    </div>
   </Link>
    
    
     </div>
     <div class="row">
    <div class="col img-hover-zoom">
   <Link to='/hotels'>
   <img src="images/hotels.jpg" class="w-100" style={{width:'100%',filter: "brightness(45%)"}}  alt="..."/>
    <div class="text" style={{fontSize:'1.5vw'}}><h4 style={{fontSize:'2vw'}}>Hotels</h4>
    <small>1150 Location</small>
    </div>
   </Link>
    </div>
    <div class="col img-hover-zoom">
   <Link to='/tours'>
   <img src="images/tours.jpg" class="w-100" style={{width:'100%',filter: "brightness(45%)"}} alt="..."/>
    <div class="text" style={{fontSize:'1.5vw'}}><h4 style={{fontSize:'2vw'}}>Tours</h4>
    <small>1150 Location</small>
    </div>
   </Link>
    </div>
    </div>
 
   
  </div>
   
  </div>
</div>

<div className='container pb-5' >
    <h1 style={{fontSize:'4vw'}}  >TOUR BIRD <span className='text-warning'>TOP</span> TOURS</h1>
    <p style={{fontSize:'1.5vw'}}>Visit our website to learn more. Helpful travel info, trips, discount travel deals & travel inspiration</p>

    <div>
  <div class="row g-2">
    <div class=" col-lg-6">
      <div class="p-1 border bg-light">
      <div class="card bg-dark text-white img-hover-zoom">
  <img src="images/banner1.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay text-start" style={{background:"rgba(0, 0, 0, 0.5)"}}>
    <h5 style={{fontSize:'1.5vw'}} class="card-title">Discover Bali</h5>
    <p style={{fontSize:'1vw'}} class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p style={{fontSize:'1vw'}} class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="p-1 border bg-light">
      <div class="card bg-dark text-white img-hover-zoom">
  <img src="images/banner4.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay text-start"  style={{background:"rgba(0, 0, 0, 0.5)"}}>
    <h5 style={{fontSize:'1.5vw'}} class="card-title">Explore Thai</h5>
    <p style={{fontSize:'1vw'}} class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p style={{fontSize:'1vw'}} class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="p-1 border bg-light">
      <div class="card bg-dark text-white img-hover-zoom">
  <img src="images/banner3.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay text-start "  style={{background:"rgba(0, 0, 0, 0.5)"}}>
    <h5 style={{fontSize:'1.5vw'}} class="card-title">Explore This Blue Sea</h5>
    <p style={{fontSize:'1vw'}} class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p style={{fontSize:'1vw'}} class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="p-1 border bg-light">
      <div class="card bg-dark text-white img-hover-zoom">
  <img src="images/banner2.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay text-start"  style={{background:"rgba(0, 0, 0, 0.5)"}}>
    <h5 style={{fontSize:'1.5vw'}} class="card-title">Explore Moroccso Roads</h5>
    <p style={{fontSize:'1vw'}} class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p style={{fontSize:'1vw'}} class="card-text">Last updated 3 mins ago</p>
  </div>
</div>

      </div>

    </div>
  
  </div>
  <div className='py-3'>
   <Link to='/tours'> <button type="button" class="btn rounded-pill btn-warning">View all Tours</button></Link></div>
</div>

</div>



<div>

<div class="card bg-dark text-white">
  <img src="images/thumbnaill.jpg" class="card-img" alt="..." style={{filter: "brightness(65%)"}}/>
  <div class="card-img-overlay" style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)'}}>
    <h1 class="card-title display-4" style={{fontSize:'4vw'}}>YOUR PERFECT
TOUR EXPERIENCE
</h1>
    <p class="card-text display-6" style={{fontSize:'2vw'}}>Activities and accommodations</p>
    <button type="button" class="btn rounded-pill btn-warning btn-sm " style={{fontSize:'1.5vw'}}>Read More</button>
    
  </div>
</div>
</div>

<div class="container py-5">
  <h1 style={{fontSize:'4vw'}}>Plan <span className='text-warning'>Your Tour</span> Easily</h1>
  <p style={{fontSize:'1.5vw'}}>Visit our website to learn more. Helpful travel info, trips, discount travel deals & travel inspiration</p>
  
  <div class="row py-3" style={{fontSize:'1.2vw'}}>
    <div class="col-4">
    <FontAwesomeIcon style={{fontSize:'6vw'}} icon={faPersonWalkingLuggage} />
    <h3 style={{fontSize:'2vw'}}>Itineraries studied in detail</h3>
    <p>Adventure and Wanderlust await. These views are a constant reminder of how incredibly vast and beautiful the world is.</p>
    </div>
    <div class="col-4">
      <FontAwesomeIcon style={{fontSize:'6vw'}} icon={faTents} />
      <h3 style={{fontSize:'2vw'}}>Room and food included</h3>
      <p>Adventure and Wanderlust await. These views are a constant reminder of how incredibly vast and beautiful the world is.</p>
    </div>
    <div class="col-4">
      <FontAwesomeIcon style={{fontSize:'6vw'}} icon={faHandshakeAlt} />
      <h3 style={{fontSize:'2vw'}}>Everything organized</h3>
      <p>Adventure and Wanderlust await. These views are a constant reminder of how incredibly vast and beautiful the world is.</p>
    </div>
  </div>
</div>

           
        </div>
    );
};

export default Home;