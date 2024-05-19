
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Map from './Pages/Map/Map';
import Header from './Pages/Header/Header';
import Tours from './Pages/Tours/Tours';
import Hotels from './Pages/Hotels/Hotels';

import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Offers from './Pages/Offers/Offers';
import Restaurants from './Pages/Restaurants/Restaurants';
import Transfer from './Pages/Transfer/Transfer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header></Header>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/tours" element={<Tours />} />
  <Route path="/offers" element={<Offers />} />
  <Route path="/hotels" element={<Hotels />} />
  <Route path="/transfers" element={<Transfer />} />
  <Route path="/contactus" element={<Contact />} />
  <Route path="/restaurants" element={<Restaurants />} />
  <Route path="*" element={<NotFound />} />
  <Route path="/signin" element={<Login />} />


  
</Routes>
<Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
