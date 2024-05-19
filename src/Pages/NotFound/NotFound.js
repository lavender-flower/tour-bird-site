import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
        <div className="container-overlay">
  <img src="images/404.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay">
    <div className="text-overlay display-1"><p>Error 404 </p><h2>
     Page not found. Lost in the jungle
</h2>

<Link to='/home'><button type="button" className="rounded-pill btn btn-warning">Go To Home</button></Link>

</div>
  </div>
</div>
        </div>
    );
};

export default NotFound;