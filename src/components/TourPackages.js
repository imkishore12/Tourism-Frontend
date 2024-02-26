import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';




function TourPackages(props) {

  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem('token');
    console.log("token:",token)

    if(!token){
      alert("please login to access your Tour Packages")
        navigate('/login')
    }
    else{
        axios.get('https://tourismbackend.onrender.com/user/tourpackages', 
        {headers:{
            authorization: `Bearer ${token}`,
        },
    })
    // .then(res=>{
    //     const responseData = res.data;
    //     // alert(responseData.msg)
    //     alert("welcome to dashboard")
    //     // setMessage(responseData.msg)
    //     setMessage("Welcome to dashboard")
    // })
    }

},[navigate])
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
  <center><h1>India Tour Packages by Themes</h1></center><hr></hr>
<p className='para'>



<b>India Tours</b> is one of the most beautiful countries in the world, and to explore it fully <b>holiday packages</b> in India such as these can be availed. To better understand and experience India’s geographical and cultural diversity, there is a wide range of <b>India tour packages</b> for travelers to pick from. Varying from destination to destination, these domestic tour packages in India take you for a relaxing vacation to beautiful hill-stations, quaint towns, cosmopolitan metros, and amazing beach cities. Choose to relax for a few days, or enjoy adventure packed tours of India, the choice is yours. Exploring India is an easy task if you can choose the right tour packages in India. You can choose a tour according to the different <b>themes, destinations,</b> durations or interests. You will get some incredible variations and it will be an amazing vacation for you, without a doubt! Be it a relaxed holiday in one of the <b>hill stations,</b> an adventurous one in a beach destination, a calming one in the backwaters or a thrilling one in a <b>wildlife sanctuary,</b> you will find it all. You can behold the best of ethnic history in the havelis of Rajasthan or get the best of your spiritual inclination at the various temples in the Southern India. The snow-capped mountains in the Himalayan range is sure to give you the chills and the huge coastline of numerous, picturesque beaches will simply take your breath away! Browse through our specially-crafted list of <b>India holiday packages</b> below to find your preferred trip. Think of India and we cater to your interests or we can help you <b>customize your trip. </b>

  </p>
</div>
                    {arr.filter((data)=>data.category=="static" ).map((item)=>{
                       
                        return(
                            <>      
                                          
                            <div className='card'>
                            <img src={item.Image}  style={{width:'100%',height:'50%'}}/>
                            <hr></hr>
                            <h3 style={{padding:'2px 16px'}}>{item.State}</h3>
                           
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

export default TourPackages;