import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
function DynamicRouting(props) {
    const[arr,setArr]=useState([])
    const navi=useNavigate();
    const id=useParams().id;
    useEffect(()=>{
        axios.get('https://tourismbackend.onrender.com/products')
        .then((response)=>setArr(response.data))
        .catch((err)=>console.log(err))
      },[])
    return (
        <div>
            <div className='main'>
            <div className='dynamicflex'>
{/* <div className='moresuggestscard'> */}
                    {
                    arr.filter((data)=>data.id==id ).map((item)=>{
                        console.log(item)
                       
                        return(
                            <>      
                             {/* <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>                 
                            <div className='card'>
                            <img src={item.Image}  style={{width:'100%',height:'50%'}}/>
                            <hr></hr>
                            <h3 style={{padding:'2px 16px'}}>{item.State}</h3>
                           
                            </div> */}
                            {/* <p style={{display:'none'}}>{count++}</p> */}
                            {/* </Link>      */}
                            <img src={item.Image} style={{width:'80%',height:'70vh'}}/>

                            <h1>{item.State}</h1>
                        
                            <p>{item.Description}</p>
                            <h2>How to Reach</h2>
                            <p>{item.Reach}</p>

                            
                            </>

                        )
                        
                    })}

                    {/* </div> */}
                    
                    </div>
                    </div>
        </div>
    );
}

export default DynamicRouting;


