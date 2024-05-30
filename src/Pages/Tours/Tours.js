import React, { useState } from 'react';
import '../overlay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faChurch,faCity, faGears, faHeadset, faMosque, faPlane, faStarAndCrescent, faTag, faTreeCity, faUtensilSpoon, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faImage, faStar } from '@fortawesome/free-regular-svg-icons';
import turs from '../../tour.json';
import { faStarHalf } from '@fortawesome/free-regular-svg-icons/faStarHalf';
const Tours = () => {

  
      return (
        <div >
  <div className="container-overlay">
  <img src="images/toursp.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay">
    <div className="text-overlay"><h1 className='display-3' style={{fontSize:'4vw'}}>Our Museum Tours </h1><br></br><p style={{fontSize:'1.5vw'}}>
    Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about ...
</p>

<button type="button" className="rounded-pill btn btn-warning" style={{fontSize:'1vw'}}>Read More</button>

</div>
  </div>
</div>

<div>
<div className="container">
  <div className="row">
    <div className="col-4 pt-5">
    <div className="list-group py-3 pt-2" style={{fontSize:'1.5vw'}}>
    <button style={{fontSize:'1.5vw'}} type="button" className="btn btn-warning mb-2"><a href='https://www.google.com/maps/@23.7509527,90.3654215,15z?entry=ttu' style={{textDecoration:'none',color:'black'}}>View on map</a></button>


  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faTag} /> All tours <small>(141)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faTreeCity} /> City sightseeing <small>(20)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faBuildingColumns} /> Museum tours <small>(16)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faCity} /> Historic Buildings <small>(12)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faImage} /> Walking tours<small>(11)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faUtensils} /> Eat & drinks<small>(20)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faMosque} /> Mosque<small>(88)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faChurch} /> Churches<small>(08)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faPlane} /> Skyline tours<small>(11)</small></a>
</div>
<div className='text-start border rounded p-2 mb-3 ' style={{fontSize:'1.5vw'}}>
<p><FontAwesomeIcon icon={faGears}/> Filters</p><hr></hr>
  <p>Price range</p>
<label for="customRange1" className="form-label d-flex justify-content-between"><p>Min</p><p>Max</p></label>
<input type="range" className="form-range " id="customRange1"/>
</div>
<div className='text-start border rounded p-2' style={{fontSize:'1.5vw'}}>
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
</div>
<div className='text-start border rounded p-2 my-3' style={{fontSize:'1.5vw'}} >
  <p>Rating</p><hr></hr>
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
<div className='border p-3 rounded' style={{fontSize:'1.5vw'}}>
     <FontAwesomeIcon className='fs-1 text-warning' icon={faHeadset} />
     <h5>Need Help?</h5>
     <h3 className='text-warning'style={{fontSize:'2.5vw'}}>+755480655</h3>
     <small>Monday to Friday 9.00am - 7.30pm</small>

     </div>

    </div>
    <div className="col-8 pt-2">
    <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
 {
  turs.map(tur=>{
    return(
      <div className="col">
      <div className="card img-hover-zoom">
        <img src={tur.img} className="card-img-top"  alt="..."/>
        <div className="card-body text-start">
          <div className='d-flex justify-content-between' ><h6 className="card-title" style={{fontSize:'1.3vw'}}>{tur.name}</h6>
         <h6 style={{fontSize:'1.5vw'}}> <span className='text-warning ' style={{fontSize:'1.5vw'}}>{tur.price}tk</span> <small style={{textDecoration:'line-through'}}>10000tk</small></h6> </div>
          <p className="card-text" style={{fontSize:'1vw'}}>This is a longer card with supporting text below as a natural lead-in to additional.</p>
          <div className='d-flex justify-content-between' style={{fontSize:'1vw'}}><p ><span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/></p>
          <small>booked by {tur.people}00 people</small></div>
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

export default Tours;