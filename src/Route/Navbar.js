import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    var [clicked,setClicked]=useState(false)

    const  handleClick=()=>{
        setClicked({clicked:!clicked})
        
         
       }
       const showSidebar=()=>{
        var sidebar=document.getElementsByClassName('sidebar')[0]
        // document.body.style.display="none"
        sidebar.style.display="flex";
        console.log(document.getElementsByClassName('sidebar')[0])
        // console.log("sidebar is",sidebar)
        
        
        
        

       }
       const hideSidebar=()=>{
        var sidebar=document.getElementsByClassName('sidebar')[0]
        // document.body.style.display="none"
        sidebar.style.display="none";
        // console.log(document.getElementsByClassName('sidebar')[0])
        // console.log("sidebar is",sidebar)
        
        
        
        

       }
    return (
        <div>
             <header>
                <div className='head1'>
            <img src="https://www.theindiatourism.com/images/logo.webp" className='img1'/>
            <img src="https://www.theindiatourism.com/images/atithi-devo-bhava.webp"/>
            </div>
            {/* <div id='mobile' onClick={()=>handleClick}>
           <i
           id='bar'
           className={clicked ? "fas fa-times"  :"fas fa-bars"}></i> */}
          
   
         {/* </div> */}
         <i class="fa-solid fa-bars fa-2xl menu-bar" onClick={()=>showSidebar()}></i>
            </header> 
            <nav id='navbar'  className={clicked ? "#navbar active": "#navbar"}>
                <NavLink to="/" >HOME</NavLink>
                <NavLink to='/indiatourism'>INDIA TOURISM</NavLink>
                <NavLink to='/tourpackages'>TOUR PACKAGES</NavLink>
                <NavLink to='/placestovisit'>PLACES TO VISITS</NavLink>
                <NavLink to='/touroffers'>TOUR OFFERS</NavLink>
                <NavLink to='/contactus'>CONTACT US</NavLink>
                
            </nav>
            <div className='sidebar'>
                <i class="fa-solid fa-xmark fa-2xl" style={{color:'#B197FC'}} onClick={()=>hideSidebar()} ></i>
                <NavLink to="/" className="Navlink" onClick={()=>hideSidebar()}>HOME</NavLink>
                <NavLink to='/indiatourism' className="Navlink" onClick={()=>hideSidebar()}>INDIA TOURISM</NavLink>
                <NavLink to='/tourpackages'className="Navlink" onClick={()=>hideSidebar()}>TOUR PACKAGES</NavLink>
                <NavLink to='/placestovisit' className="Navlink" onClick={()=>hideSidebar()}>PLACES TO VISITS</NavLink>
                <NavLink to='/touroffers' className="Navlink" onClick={()=>hideSidebar()}>TOUR OFFERS</NavLink>
                <NavLink to='/contactus' className="Navlink" onClick={()=>hideSidebar()}>CONTACT US</NavLink>
                
                </div>
        </div>
    );
}

export default Navbar;