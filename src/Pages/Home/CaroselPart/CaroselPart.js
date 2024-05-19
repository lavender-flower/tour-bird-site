import { Button } from 'bootstrap';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const CaroselPart = () => {
    return (
        <div>
            <Carousel fade>
           
      <Carousel.Item>
      <img src="images/cover1.jpg" class="d-block w-100" alt="..."/>
        <Carousel.Caption className='text-start fs-1'>
          <h3 className='display-3'  >Marina Bay Sands Singapore</h3>
          <p>
          Discover hidden wonders on the trips created by Tour Bird experts.
          </p>
          <button type="button" class="btn rounded-pill btn-warning">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src="images/cover2.jpg" class="d-block w-100" alt="..."/>
        <Carousel.Caption  className='text-start fs-1'>
          <h3 className='display-3'>Going Inside The Louvre Museum</h3>
          <p>
          Discover hidden wonders on the trips created by Tour Bird experts.
          </p>
          <button type="button" class="btn rounded-pill btn-warning">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="images/cover3.jpg" class="d-block w-100" alt="..."/>
        <Carousel.Caption className='text-start fs-1'>
          <h3 className='display-1'>Tokyo City Lights</h3>
          <p>
          Discover hidden wonders on the trips created by Tour Bird experts.
          </p>
          <button type="button" class="btn rounded-pill btn-warning">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="images/cover4.jpg"  class="d-block w-100" alt="..."/>
        <Carousel.Caption  className='text-end fs-1'>
          <h3 className='display-3'>Abbaye du Mont-Saint-Michel</h3>
          <p>
            Discover hidden wonders on the trips created by Tour Bird experts.
          </p>
          <button type="button" class="btn rounded-pill btn-warning">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
        </div>
    );
};

export default CaroselPart;