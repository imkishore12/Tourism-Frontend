import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function IndiaTourism(props) {
    const[arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://tourismbackend.onrender.com/products')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)
    return (
        <div>
<div class="col-sm-12">
<p>

India Tourism, <b>Himachal Pradesh, Kerala, Goa, Madhya Pradesh, Gujarat, Maharashtra</b> along with a few others are some of the best <b>places to visit</b> in India. With a variety of attractions, these places urge you to travel to your heart's content. And, whatever you are going to explore, will surely leave a long-lasting impression on you. 
<b>Beaches, backwaters</b>, vast stretches of <b>deserts</b>, snow-laden peaks and Indian <b>wildlife sanctuaries</b> make the country one of the best winter destinations. Tourism India during the winter season are perfect ways of bidding farewell to the previous year and welcoming the new one excitingly.
 When the sun starts shining brightly, people throng the picturesque hill stations with snow-laden peaks. A perfect escape from the scorching heat and soaring temperature can be found only in India.

  </p>
</div>
<div className='container'>
<div className='moresuggestscard'>
                    {arr.filter((data)=>data.category="indiatousrism" ).map((item)=>{
                       
                        return(
                            <>      
                             <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>                 
                            <div className='card'>
                            <img src={item.Image}  style={{width:'100%',height:'50%'}}/>
                            <hr></hr>
                            <h3 style={{padding:'2px 16px'}}>{item.State}</h3>
                           
                            </div>
                            {/* <p style={{display:'none'}}>{count++}</p> */}
                            </Link>     
                            
                            </>

                        )
                        
                    })}

                    </div>
                    </div>
        </div>
    );
}

export default IndiaTourism;