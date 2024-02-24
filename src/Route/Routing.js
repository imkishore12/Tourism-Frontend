import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from './Navbar';
import IndiaTourism from '../components/IndiaTourism';
import DynamicRouting from './DynamicRouting';
import TourPackages from '../components/TourPackages';
import Home from '../components/Home';
import PlacesToVisit from '../components/PlacesToVisit';
import TourOffers from '../components/TourOffers';
import ContactUs from '../components/ContactUs';
import Login from '../components/Login';
import Register from '../components/Register';
function Routing(props) {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                    
                <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/indiatourism' element={<IndiaTourism />}></Route>

                <Route path='/tourpackages' element={<TourPackages/>}></Route>
                <Route path='/placestovisit' element={<PlacesToVisit/>}></Route>
                <Route path='/touroffers' element={<TourOffers />}></Route>
                <Route path='/contactus' element={<ContactUs/>}></Route>
                {/* <Route path="/details/:id" element={<DynamicRoute/>}/> */}
                <Route path="/details/:id" element={<DynamicRouting/>}/>

                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
           

            </BrowserRouter>
        </div>
    );
}

export default Routing;