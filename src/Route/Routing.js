import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from './Navbar';
import IndiaTourism from '../components/IndiaTourism';
import DynamicRouting from './DynamicRouting';
function Routing(props) {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                    
                <Routes>
                {/* <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route> */}
                <Route path='/indiatourism' element={<IndiaTourism />}></Route>
                {/* <Route path='/placestovisit' element={<Hollywood />}></Route>
                <Route path='/touroffers' element={<Technology />}></Route>
                <Route path='/tourpackages' element={<Fitness />}></Route>
                <Route path='/contactus' element={<Food />}></Route>
                <Route path="/details/:id" element={<DynamicRoute/>}/> */}
                <Route path="/details/:id" element={<DynamicRouting/>}/>
            </Routes>
           

            </BrowserRouter>
        </div>
    );
}

export default Routing;