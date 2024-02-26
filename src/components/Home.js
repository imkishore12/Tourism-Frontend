import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
const[arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://tourismbackend.onrender.com/products')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)
    return (
        <div>
<img src='https://www.theindiatourism.com/images/tourism-india.webp' className='homeimg' />
<div className='container'>
<div className='moresuggestscard'>
<div>
  <center><h1>The India Tourism - Guided & Customized Private Tour to India</h1></center><hr></hr>
<p  className='para'>



<b>India Tourism</b> is an unequivocally welcoming nation, that bestows reverence and love for its visitors. A nation which follows only one belief blindly <b>“Atithi Devo Bhava”</b> which means “Guest is equivalent to God”. There is so much to discover, a land with varied civilizations, deep-rooted ideologies, uncountable faiths, that is also related to particular historical stories. <b>India Tourism</b> provides an outstanding rich heritage, tasty cuisines from numerous parts of the world, a multitude of enticing sightseeing spots, and much more while visiting this beautiful country. An avid traveler will simply find his place here.<br />
<br></br>
<b>Architecture of India - India Tourism</b><br></br>
India has <b>32 UNESCO World Heritage-listed sites</b> around the country, making it an epitome of historical wonders, if we speak about the architectural beauty of India has an extensive array of attractive forts, palaces, temples and its ruins and shrines as well. India itself is an international tourist bundle, they only need to select a destination according to their desires and prepare their itinerary. If you have a deep urge to discover a wonderland on this planet, then pack our bags and come to India, a land that is truly blessed with an abundance of natural wonder.<br />
<br></br>
<b>Explore India - India Tourism</b><br></br>
Well, every part of the world has a different tale to tell, with enchanting elegance and majestic culture, Northern India is truly blessed, one can get absolutely soaked in valleys and waterfalls and lush greenery of Himalayan ranges. The western part of the world has a striking beauty of architectural wonder, and what people enjoy about this place is the contemporary lifestyle. And we're talking about the regions of the Sunderbans or the eastern part of India, well, no one can argue that this area is blessed with the scenic beauty of high hills, ondulating rivers and waterfalls. Finally, the southern area is blessed with planting and foliage loads, an exotic destination in the entire world, a combination of enticing beach sites, Tourists continue to see hills and waterfalls again and again! There are plenty of great reasons to visit India Tourism, so we have already offered a mini-tour.<br />
<br></br>
<b>Why Travel to India? - India Tourism</b><br></br>
Plan a trip once, and you will come to know that this nation embellishes exotic and energetic metropolitan conventions with both serene and plain village life. Welcoming you to "The Soul of Incredible India" with open arms and intriguing taglines such as, <b>"God's Own Country",</b> this country has its own special ways of making people fall in love with her!<br />
Foreign tourists who fly to India, You are certainly in for a surprise, particularly for the first time. Things can seem a little messy, overwhelming, and out of reach before you start to become attuned to the way of life in this diverse country. You will better plan for the trip ahead by becoming acquainted with the terrain, climate, history, languages and other important pieces of knowledge. Here are a few specifics that would be helpful.

  </p>

  <div>
  <br></br><br></br>
  <center><h2>Find your Ideal Tour Packages</h2></center><hr></hr>
  <p  className='para'>

Travel in India is like nothing you’ve ever experienced, from the magnificence Taj Mahal to the highlights of Kerala, Goa and India, this is a great trip for first-time visitors as it encompasses all of the major tourist destinations.

  </p>
  </div>
</div>
                    {arr.filter((data)=>data.category=="indiatousrism" && data.id<4 ).map((item)=>{
                       
                        return(
                            <>      
                            <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>       
                            <div className='card cards'>
                            <img src={item.Image}  style={{width:'100%',height:'50%'}}/>
                            <hr></hr>
                            <h3 style={{padding:'2px 16px'}}>{item.State}</h3>
                           
                            </div>
                            {/* <p style={{display:'none'}}>{count++}</p> */}
                              </Link>
                            
                            </>
                        )
                        
                    })}
 <div>
 <br></br><br></br>
  <center><h2>Find your Perfect Holiday Destination</h2></center><hr></hr>
  <p  className='para'>

  Check out this India most iconic heritage, natural beauty, colourful, cultural and spiritual Attractions India. Beaches, backwaters, vast stretches of deserts, snow-laden peaks and Indian wildlife sanctuaries make the country one of the best winter destinations.  

  </p>
  </div>
  {arr.filter((data)=>data.category=="indiatousrism" && data.id>=2 ).map((item)=>{
                       
                       return(
                           <>      
                           <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>       
                           <div className='card cards'>
                           <img src={item.Image}  style={{width:'100%',height:'50%'}}/>
                           <hr></hr>
                           <h3 style={{padding:'2px 16px'}}>{item.State}</h3>
                          
                           </div>
                           {/* <p style={{display:'none'}}>{count++}</p> */}
                             </Link>
                           
                           </>
                       )
                       
                   })}
                   <div>
                    <br></br><br></br>
  <center><h2>Choose Your Style of Tour Packages</h2></center><hr></hr>
  <p  className='para'>

  Our collection of tour are themed by a style to help you get the most out of your wonderful holiday in India whether you're looking for a small group tour, private tailor made holiday to see India, These packages are meant to cater every of your interest, and that too without hampering your comfort in the travel. The intriguing land of India has so much to explore. 
 
  </p>
  </div>
  {arr.filter((data)=>data.category=="offers" && data.id>=20 && data.id <=23).map((item)=>{
                       
                       return(
                           <>      
                           <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>       
                           <div className='card cards'>
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

export default Home;









