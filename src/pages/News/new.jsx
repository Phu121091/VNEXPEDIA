import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
 
const New = () => {

    const [itemcall, setitemcall] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const paramss = useParams();

    const callApi =async()=>{
        setIsLoading(true);
 
         const response = await axios({
             method: 'get',
             url: `https://server-real-estate.herokuapp.com/api/v1/news`,
             type: 'json'
         });
 
         if(response.status === 200){
             setitemcall(response.data.find((d)=>d._id==paramss.id))
            // setitemcall(response.data);
         }
         console.log(setitemcall);
         setIsLoading(false);     
     }
 
     useEffect(()=>{
         callApi();    
         
     },[]);
     console.log(itemcall);

  return (
    <div>
        <h3>{itemcall.title}</h3>
        <img src={itemcall.image}/>
        <p>{itemcall.description}</p>
    </div>
  )
}

export default New