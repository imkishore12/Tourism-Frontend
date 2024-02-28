import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




function PlacesToVisit(props) {
    const[arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://tourbackend-mtgt.onrender.com/products')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)
    return (
        <div>

    <img src="https://www.theindiatourism.com/images/places-to-visit-india.jpg" style={{width:'100%'}}/>
<div className='container'>
<div className='moresuggestscard'>
<div>
  <center><h1>Top Tourist Destination India</h1></center><hr></hr>
<p className='para'>





<b>Top Tourist Destination India</b> is the home to numerous attractions, amenities, activities and beauties. It is not hard to believe that a land as diverse as India has a long list of travel destinations within its border. Starting from the valleys of <b>Kashmir</b> to the tri-colored sea of <b>Kanchipuram</b>, you will find numerous tourist attractions, which would suit your taste. If you were visiting India in winter, <b>Rajasthan</b>, <b>Agra</b>, <b>Maharashtra</b>, <b>Tamil Nadu</b>, <b>Kerala</b>, <b>Chandigarh</b>, <b>Karnataka</b>, Goa and other places would be in the top choice. If you choose to visit India in the monsoon, <b>Uttarakhand</b>, <b>Munnar</b>, <b>Mussorie</b>, <b>Cherrapunji</b> and Coorg are some of the places to choose. 


  </p>
</div>
                    {arr.filter((data)=>data.category=="placestovisit" ).map((item)=>{
                       
                        return(
                            <>      
                                          
                            <div className='card'>
                            <h3 style={{padding:'8px 16px',backgroundColor:'red',color:'white',margin:'0px',textAlign:'center'}}>{item.State}</h3>
                            <img src={item.Image}  style={{width:'100%',height:'25vh',marginBottom:'10px'}}/>
                          
                           
                            <br></br>
                            <p style={{margin:'0px'}}>{'>'}{item.city1}</p><hr ></hr>
                            <p style={{margin:'0px'}}>{'>'}{item.city2}</p><hr></hr>
                            <p style={{margin:'0px'}}>{'>'}{item.city3}</p><hr></hr>
                            <p style={{margin:'0px'}}>{'>'}{item.city4}</p><hr></hr>
                            <p style={{margin:'0px'}}>{'>'}{item.city5}</p><hr></hr>
                            <button style={{width:"100%",padding:'5px',backgroundColor:'gray',color:'white'}}>View All</button>
                           
                            </div>
                            {/* <p style={{display:'none'}}>{count++}</p> */}
                              
                            
                            </>

                        )
                        
                    })}

                    </div>
                    </div>
        </div>
    );
}

export default PlacesToVisit;