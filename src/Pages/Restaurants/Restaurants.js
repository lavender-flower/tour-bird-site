import React from 'react';
import '../overlay.css'
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
        </div>
    );
};

export default Restaurants;