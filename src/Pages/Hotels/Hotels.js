import React from 'react';
import '../overlay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faChurch, faCity, faGears, faHeadset, faMosque, faPlane, faTag, faTreeCity, faUtensilSpoon, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faImage, faStar } from '@fortawesome/free-regular-svg-icons';
import hotels from '../../hotel.json';
const Hotels = () => {
    return (
        <div>
 <div className="container-overlay">
  <img src="images/hotelsp.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay">
    <div className="text-overlay"><h1 className='display-4' style={{fontSize:'4vw'}}>Our Recommended Hotels </h1><br></br><p style={{fontSize:'2vw'}}>
    Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about ...
</p>

<button type="button" className="rounded-pill btn btn-warning" style={{fontSize:'1.5vw'}}>Read More</button>

</div>
  </div>
</div>

<div>
<div className="container">
  <div className="row">
    <div className="col-lg-4 py-3 pt-5">
    <div className="list-group py-3 pt-2">
    <button type="button" className="btn btn-warning mb-2"><a href='https://www.google.com/maps/@23.7509527,90.3654215,15z?entry=ttu' style={{textDecoration:'none',color:'black'}}>View on map</a></button>


 
</div>
<div className='text-start border rounded p-2 mb-3'>
<p><FontAwesomeIcon icon={faGears}/> Filters</p><hr></hr>
  <p>Price</p>
  <label for="customRange1" className="form-label d-flex justify-content-between"><p>Min</p><p>Max</p></label>
<input type="range" className="form-range " id="customRange1"/>
</div>
<div className='text-start border rounded p-2'>
<p>Human Facilities</p>
<hr></hr>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Pet allowed
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Groups allowed
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Tour guides
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Kids
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    wifi
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Spa
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Pool
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Restaurants
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Parking
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Fitness Center
  </label>
</div>
</div>
<div className='text-start border rounded p-2 my-3'>
  <p>Star Category</p><hr></hr>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    <span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span>
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" for="flexRadioDefault2">
  <span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/>
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" for="flexRadioDefault2">
  <span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" for="flexRadioDefault2">
  <span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" for="flexRadioDefault2">
  <span className='text-warning'><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
  </label>
</div>
</div>
<div className='border p-3 rounded'>
     <FontAwesomeIcon className='fs-1 text-warning' icon={faHeadset} />
     <h5>Need Help?</h5>
     <h3 className='text-warning'>+755480655</h3>
     <small>Monday to Friday 9.00am - 7.30pm</small>

     </div>

    </div>
    <div className="col-lg-8 pt-2">
    <div className="row g-0 row-cols-1 row-cols-md-1 g-4 py-5">
 {
  hotels.map(hotel=>{
    return(
      <div className="col d-flex text-start border">
      <div class="col-md-4 img-hover-zoom">
      <img src={hotel.img} class="img-fluid rounded-start pt-2" alt="..."/>
    </div>
    <div class="col-md-8 px-5 pt-2">
      <div class="card-body">
      <div className='d-flex justify-content-between' ><h6 style={{fontSize:'1.8vw'}} className="card-title">{hotel.name}</h6>
         <h6 style={{fontSize:'2vw'}} > <span className='text-warning' style={{fontSize:'1.8vw'}} >{hotel.price}00tk</span> <small style={{textDecoration:'line-through'}}>10000tk</small></h6> </div>
        <p class="card-text" style={{fontSize:'1.2vw'}} >This is a wider card with supporting text below as a natural lead-in to additional content. </p>
        <div><p ><span className='text-warning' style={{fontSize:'1.5vw'}} ><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span>< FontAwesomeIcon icon={faStar} style={{fontSize:'1.5vw'}} /></p>
          <small class="text-muted" style={{fontSize:'1.1vw'}} >booked by {hotel.people}00 people</small></div>
        
      </div>
    </div>
    </div>
    )
  })
 }
 
</div> 
    </div>
   
  </div>
</div>
</div>
        </div>
    );
};

export default Hotels;