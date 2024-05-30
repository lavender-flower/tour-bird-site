import React from 'react';
import '../overlay.css';
import trans from '../../transfers.json';
import turs from '../../tour.json';
import hotels from '../../hotel.json';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Offers = () => {
    return (
        <div>
             <div className="container-overlay">
  <img src="images/offer.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay">
    <div className="text-overlay"><h1 className='display-3'>Time Limit Emphasis</h1><br></br><p>
    Life is about the adventures you take and the memories you make. Take a few minutes of every day to fantasize about ...
</p>

<button type="button" className="rounded-pill btn btn-warning">Read More</button>

</div>
  </div>
</div>

<h1 style={{fontSize:'4vw'}} className='pt-5'>Special <span className='text-warning'>Tours</span></h1>
<p style={{fontSize:'1.5vw'}}>The world is a book and those who do not travel read only one page.</p>
<div className="row row-cols-1 row-cols-md-4 g-4 p-5">
 {
  turs.map(tur=>{
    return(
      <div className="col">
      <div className="card img-hover-zoom">
        <img src={tur.img} className="card-img-top" style={{height:'150px'}} alt="..."/>
        <div className="card-body text-start">
          <div className='d-flex justify-content-between'><h6 className="card-title">{tur.name}</h6>
         <h6> <span className='text-warning fs-5'>{tur.price}tk</span> <small style={{textDecoration:'line-through'}}>10000tk</small></h6> </div>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional.</p>
          <div className='d-flex justify-content-between'><p ><span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/></p>
          <small>booked by {tur.people}00 people</small></div>
        </div>
      </div>
    </div>
    )
  })
 }
 
</div> 
<h1 style={{fontSize:'4vw'}}>Special <span className='text-warning'>Hotel</span> Offer</h1>
<p style={{fontSize:'1.5vw'}}>The world is a book and those who do not travel read only one page.</p>

<div className="row g-0 row-cols-1 row-cols-md-2 g-4 p-5 ">
 {
  hotels.map(hotel=>{
    return(
      <div className="col d-flex text-start border ">
      <div class="col-md-4 img-hover-zoom">
      <img src={hotel.img} class="img-fluid rounded-start pt-2" alt="..."/>
    </div>
    <div class="col-md-8 px-5 pt-2">
      <div class="card-body">
      <div className='d-flex justify-content-between' ><h6 style={{fontSize:'1.5vw'}} className="card-title">{hotel.name}</h6>
         <h6 style={{fontSize:'1.8vw'}} > <span className='text-warning' style={{fontSize:'1.8vw'}} >{hotel.price}00tk</span> <small style={{textDecoration:'line-through'}}>10000tk</small></h6> </div>
        
        <div><p ><span className='text-warning' style={{fontSize:'1vw'}} ><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span>< FontAwesomeIcon icon={faStar} style={{fontSize:'1vw'}} /></p>
          <small class="text-muted" style={{fontSize:'1vw'}} >booked by {hotel.people}00 people</small></div>
        
      </div>
    </div>
    </div>
    )
  })
 }
 
</div> 



<h1 style={{fontSize:'4vw'}} className='pt-5'>Transfer <span className='text-warning'>Ofers</span></h1>
<p style={{fontSize:'1.5vw'}}>The world is a book and those who do not travel read only one page.</p>
<div className="row row-cols-1 row-cols-md-4 g-4 p-5">
 
 {
  trans.map(t=>{
    return(
      <div className="col">
      <div className="card img-hover-zoom">
        <img src={t.img} className="card-img-top " alt="..."/>
        <div className="card-body text-start">
          <div className='d-flex justify-content-between'><h6 className="card-title">{t.name} <small className='text-secondary'>{t.category}</small></h6>
         <h6> <span className='text-warning fs-5'>{t.price}0tk</span> <small style={{textDecoration:'line-through'}}>1000tk</small></h6> </div>
         
          <div className='d-flex justify-content-between'><p ><span className='text-warning'><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span><FontAwesomeIcon icon={faStar}/></p>
          <small>booked by {t.ppl}0 people</small></div>
        </div>
      </div>
    </div>
    )
  })
 }
 
</div> 
        </div>
    );
};

export default Offers;