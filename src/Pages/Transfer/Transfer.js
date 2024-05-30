import React from 'react';
import '../overlay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faChurch, faCity, faGears, faHeadset, faMosque, faPlane, faTag, faTreeCity, faUtensilSpoon, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faImage, faStar } from '@fortawesome/free-regular-svg-icons';
import trans from '../../transfers.json';
const Transfer = () => {
    return (
        <div>
                           <div className="container-overlay">
  <img src="images/about.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay">
    <div className="text-overlay"><h1 style={{fontSize:'4vw'}} className='display-3'>Recommended Transfers </h1><br></br><p style={{fontSize:'1.5vw'}}>
    Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about ...
</p>

<button style={{fontSize:'1.5w'}} type="button" className="rounded-pill btn-sm btn btn-warning">Read More</button>

</div>
  </div>
</div>

<div>
<div className="container">
  <div className="row">
    <div className="col-4 py-3 pt-5">
    <div className="list-group py-3 pt-2">
    <button style={{fontSize:'1.5vw'}} type="button" className="btn btn-warning mb-2"><a href='https://www.google.com/maps/@23.7509527,90.3654215,15z?entry=ttu' style={{textDecoration:'none',color:'black'}}>View on map</a></button>


</div>
<div className='text-start border rounded p-2 mb-3' style={{fontSize:'1.5vw'}}>
<p><FontAwesomeIcon icon={faGears}/> Filters</p><hr></hr>
  <p>Price range</p>
<label for="customRange1" className="form-label">Min____________________________Max</label>
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
<div className='text-start border rounded p-2 my-3' style={{fontSize:'1.5vw'}}>
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
     <h5 style={{fontSize:'2.5vw'}}>Need Help?</h5>
     <h3 style={{fontSize:'2vw'}} className='text-warning'>+755480655</h3>
     <small>Monday to Friday 9.00am - 7.30pm</small>

     </div>

    </div>
    <div className="col-8">
    <div className="row row-cols-1 row-cols-md-2 g-4 pt-5">
 {
  trans.map(t=>{
    return(
      <div className="col">
      <div className="card img-hover-zoom">
        <img src={t.img} className="card-img-top " alt="..."/>
        <div className="card-body text-start">
          <div className='d-flex justify-content-between'><h6 style={{fontSize:'2vw'}} className="card-title">{t.name} <br></br> <small className='text-secondary'>{t.category}</small></h6>
         <h6> <span className='text-warning fs-5'>{t.price}0tk</span> <small style={{textDecoration:'line-through'}}>1000tk</small></h6> </div>
         
          <div className='d-flex justify-content-between'><p style={{fontSize:'1vw'}}><span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/></p>
          <small style={{fontSize:'1vw'}}>booked by {t.ppl}0 people</small></div>
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

export default Transfer;