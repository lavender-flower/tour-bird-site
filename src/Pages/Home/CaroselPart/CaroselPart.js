import { Button } from 'bootstrap';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const CaroselPart = () => {
    return (
        <div>
            <Carousel fade>
           
      <Carousel.Item>
      <img src="images/cover1.jpg"  className="d-block w-100" alt="..." style={{filter: "brightness(65%)",height:'500px'}}/>
        <Carousel.Caption className='text-start fs-1'>
          <h3 className='display-3' style={{fontSize:'56px'}} >Marina Bay Sands Singapore</h3>
          <p style={{fontSize:'24px'}}>
          Discover hidden wonders on the trips created by Tour Bird experts.
          </p>
          <button type="button" className="btn rounded-pill btn-warning" style={{fontSize:'1vw'}}>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src="images/cover2.jpg" className="d-block w-100" alt="..." style={{filter: "brightness(50%)",height:'500px'}}/>
        <Carousel.Caption  className='text-start fs-1'>
          <h3 className='display-3' style={{fontSize:'48px'}} >Going Inside The Louvre Museum</h3>
          <p style={{fontSize:'24px'}}>
          Discover hidden wonders on the trips created by Tour Bird experts.
          </p>
          <button type="button" className="btn rounded-pill btn-warning" style={{fontSize:'1vw'}}>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="images/cover3.jpg" className="d-block w-100" alt="..." style={{filter: "brightness(65%)",height:'500px'}}/>
        <Carousel.Caption className='text-start fs-1'>
          <h3 className='display-1' style={{fontSize:'56px'}} >Tokyo City Lights</h3>
          <p style={{fontSize:'24px'}}>
          Discover hidden wonders on the trips created by Tour Bird experts.
          </p>
          <button type="button" className="btn rounded-pill btn-warning" style={{fontSize:'1vw'}}>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="images/cover4.jpg"  className="d-block w-100" alt="..." style={{filter: "brightness(65%)",height:'500px'}}/>
        <Carousel.Caption  className='text-end fs-1'>
          <h3 className='display-3' style={{fontSize:'48px'}} >Abbaye du Mont-Saint-Michel</h3>
          <p style={{fontSize:'24px'}}>
            Discover hidden wonders on the trips created by Tour Bird experts.
          </p>
          <button type="button" className="btn rounded-pill btn-warning" style={{fontSize:'1vw'}}>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
        </div>
    );
};

export default CaroselPart;