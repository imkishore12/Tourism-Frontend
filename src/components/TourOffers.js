import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TourOffers(props) {

  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem('token');
    console.log("token:",token)

    if(!token){
      alert("please login to access your Tour Offers")
        navigate('/login')
    }
    else{
        axios.get('https://tourismbackend.onrender.com/user/touroffers', 
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
    axios.get('https://tourbackend-mtgt.onrender.com/products')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)
    return (
        <div>

<div className='container'>
<div className='moresuggestscard'>
<div>
  <center><h1>India Special Offer Tour Packages</h1></center><hr></hr>
<p className='para'>

<b>India Special Offer Tour</b> contains the particularly special experience of India. Such as <b>Luxury Tours,</b> Pilgrimage tours for all the religion people, <b>Festival tours</b> of India etc. <b>Do Dham, char Dham,</b> Hemkund Saheb, Ponta Saheb, Yamnotri, Gangotri, Kedarnath, Badrinath, Mosque & Dargah tours under Piligrimage tour. Festivals of North East, <b>Ladakh,</b> Rajasthan etc are very popular among the tourist. We also orgainise tour for some particular interest like short trekking in the Himalayan region, <b>camel safari</b> in Rajasthan, <b>Honeymoon tours,</b> trout fishing in the still lakes of Himalayan valleys, house boat holidays in <b>Kerala</b> or <b>Kashmir,</b> White water rafting on Ganges and other rivers and so on. Create memoirs that last a lifetime by exploring the much admired places of India. We tender affordable and attractive <b>India Tour Packages</b> to suit the needs of every tourist. Choosing any of these <b>holiday packages</b> will provide you with wholesome experiences that you will love to treasure with your friends in joyful time.


  </p>
</div>
                    {arr.filter((data)=>data.category=="offers" ).map((item)=>{
                       
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

export default TourOffers;