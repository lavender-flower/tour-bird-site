import React from 'react';
import '../overlay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon, faBeerMugEmpty, faBowlFood, faBuildingColumns, faBurger, faChurch, faCity, faFish, faGears, faHeadset, faMosque, faMugHot, faPizzaSlice, faPlane, faTag, faTreeCity, faUtensilSpoon, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faImage, faStar } from '@fortawesome/free-regular-svg-icons';
import restu from '../../restu.json';

const Restaurants = () => {
    return (
        <div>
             <div className="container-overlay">
  <img src="images/restup.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay">
    <div className="text-overlay"><h1 className='display-5'>Our Recommended Restaurants</h1><br></br><p>
    Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about ...
</p>

<button type="button" className="rounded-pill btn btn-warning">Read More</button>

</div>
  </div>
</div>
<div>
<div className="container">
  <div className="row">
    <div className="col-3 py-3 pt-5">
    <div className="list-group py-3 pt-2">
    <button type="button" className="btn btn-warning mb-2"><a href='https://www.google.com/maps/@23.7509527,90.3654215,15z?entry=ttu' style={{textDecoration:'none',color:'black'}}>View on map</a></button>


  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faUtensils} /> All Restaurants <small>(141)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faPizzaSlice} /> Pizza / Italian <small>(20)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faBurger} /> Fast Food<small>(16)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faBowlFood} /> Japanese <small>(12)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faBacon} /> Chinese<small>(11)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faBeerMugEmpty} /> International<small>(20)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faMugHot} /> Coffee bar<small>(88)</small></a>
  <a href="#" className="list-group-item text-secondary text-start list-group-item-action"><FontAwesomeIcon icon={faFish} /> Fish<small>(08)</small></a>
  
</div>
<div className='text-start border rounded p-2 mb-3'>
  <p><FontAwesomeIcon icon={faGears}/> Filters</p><hr></hr>
  <p>Price range</p>
<label for="customRange1" className="form-label">Min____________________________Max</label>
<input type="range" className="form-range " id="customRange1"/>
</div>
<div className='text-start border rounded p-2'>
<p>Area</p>
<hr></hr>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Nearby
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Spot Area
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Few distance
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
    <div className="col-9">
    <div className="row row-cols-1 row-cols-md-2 g-4 p-5">
 {
  restu.map(r=>{
    return(
      <div className="col">
      <div className="card text-secondary img-hover-zoom">
        <img src={r.img} className="card-img-top" alt="..."/>
        <div className="card-body text-start">
          <div className='d-flex justify-content-between'><div><h5 className="card-title">{r.name}</h5> <p><FontAwesomeIcon icon={faUtensils}/> {r.category}</p></div>
          
         <h6> <span className='text-warning fs-5'>{r.price}0tk</span> <small style={{textDecoration:'line-through'}}>1000tk</small></h6> </div>
          
          <div className='d-flex justify-content-between'><p ><span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/></p>
          <small>booked by {r.ppl}00 people</small></div>
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

export default Restaurants;