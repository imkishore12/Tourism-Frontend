import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    var [clicked,setClicked]=useState(false)

    const  handleClick=()=>{
        setClicked({clicked:!clicked})
        
         
       }
    return (
        <div>
             <header>
            <img src="https://www.theindiatourism.com/images/logo.webp"/>
            <img src="https://www.theindiatourism.com/images/atithi-devo-bhava.webp"/>
            <div id='mobile' onClick={()=>handleClick}>
           <i
           id='bar'
           className={clicked ? "fas fa-times"  :"fas fa-bars"}></i>
          
   
         </div>
            </header> 
            <nav id='navbar'  className={clicked ? "#navbar active": "#navbar"}>
                <NavLink to="/">HOME</NavLink>
                <NavLink to='/indiatourism'>INDIA TOURISM</NavLink>
                <NavLink to='/tourpackages'>TOUR PACKAGES</NavLink>
                <NavLink to='/placestovisit'>PLACES TO VISITS</NavLink>
                <NavLink to='/touroffers'>TOUR OFFERS</NavLink>
                <NavLink to='/touroffers'>CONTACT US</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;