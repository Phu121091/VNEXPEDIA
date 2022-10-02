import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";
import Newmini from './newmini';

const News = () => {

  const [newlist, setnewlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    const callApi =async()=>{
        setIsLoading(true);
 
         const response = await axios({
             method: 'get',
             url: 'https://server-real-estate.herokuapp.com/api/v1/news',
             type: 'json'
         });
 
         if(response.status === 200){
             setnewlist(response.data)
         }
      
         setIsLoading(false);     
     }
 
     useEffect(()=>{
         callApi();    
         
     },[]);
     console.log(newlist);
     

  return (
    <div>
      <h3>Tin nổi bật</h3>
      { newlist.length >0 ? 
       
       (newlist.map(item =>{
      return <Newmini item={item}/>
        }))  
     
  
    : (<h5>List empty</h5>)}
    </div>
  )
}

export default News