import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function ContactUs(props) {
    const[arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://tourismbackend.onrender.com/products')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)
    return (
        <div>

<div className='container'>
<div className='moresuggestscard'>
<div>
  <center><h1>Contact Us</h1></center><hr></hr>
<p className='para'>

Thank you for showing your interest in The India Tourism Tour & Travel services. Please provide the information about your tour requirements in order to help us to serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 24 hours.
  </p>
</div>
<div className='card'>
    <h2>The Indian Tourism</h2>
    {/* <img src={item.Image}  style={{width:'100%',height:'50%'}}/> */}
    <p>Prakash Singh Shekhawat</p>
    <p><i class="fa-brands fa-whatsapp fa-beat fa-2xl" style={{color:'green'}}></i>+91 - 9549279999</p>
    {/* <hr></hr> */}
    <h3>Office Hours : (9:30 am to 5:30 pm)</h3>
    <p>Email - info@theindiatourism.com</p>
    {/* <h3 style={{padding:'2px 16px'}}>{item.State}</h3> */}
                           
</div>
<div className='card'>
<img src='https://www.theindiatourism.com/images/paypal.png'/>
</div>
<div className='card'>
<h1>Follw Us</h1>
<div style={{display:'flex'}}>
<i class="fa-brands fa-square-facebook fa-2xl"></i>
<i class="fa-brands fa-youtube fa-2xl"></i>
<i class="fa-brands fa-square-twitter fa-2xl"></i>
</div>
<img src='https://www.theindiatourism.com/images/atithi-devo-bhava.png'/>
</div>





                    </div>
                    </div>
                    <h1>Our Offices In Rajasthan</h1><hr></hr>
    <div className='container'>
    <div className='moresuggestscard'>
        
<div className='card cards'>
    <h2>Jaipur Head Office:</h2>
    {/* <img src={item.Image}  style={{width:'100%',height:'50%'}}/> */}
    <p>B- 26, Shekhawat colony, Sirsi Road,</p>
    <p>Jaipur, (Rajasthan)</p>
    <p><i class="fa-brands fa-whatsapp fa-beat fa-2xl" style={{color:'green'}}></i>+91 - 9549279999</p>
    {/* <hr></hr> */}
    {/* <h1>Office Hours : (9:30 am to 5:30 pm)</h1> */}
    <p>info@theindiatourism.com</p>
    {/* <h3 style={{padding:'2px 16px'}}>{item.State}</h3> */}
                           
</div>
<div className='card cards'>
    <h2>Pushkar Branch Office :</h2>
    {/* <img src={item.Image}  style={{width:'100%',height:'50%'}}/> */}
    <p>Motisar Link Road, Behind Pushkar <br></br>Railway Station,</p>
    <p>Village Ghanehera, Rajasthan India</p>
    
 
    {/* <h3 style={{padding:'2px 16px'}}>{item.State}</h3> */}
                           
</div>
<div className='card cards'>
    <h2>Jodhpur Office:</h2>
    {/* <img src={item.Image}  style={{width:'100%',height:'50%'}}/> */}
    <p>469 mohan nagar B , BJS colony <br></br>Jodhpur (Rajasthan)</p>
    <p>Village Ghanehera, Rajasthan India</p>
    
 
    {/* <h3 style={{padding:'2px 16px'}}>{item.State}</h3> */}
                           
</div>
<div className='card cards'>
    <h2>Jaisalmer Office:</h2>
    <p>Shakti Singh</p>
    <p>Sam sand dunes, near kanoi village,</p>
    <p>Jaisalmer (Rajasthan)</p>

                           
</div>

</div>

    </div>
        </div>
    );
}

export default ContactUs;












