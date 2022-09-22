import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";

const HouseSell = () => {

    const [sellList, setSellList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const callApi =async()=>{
        setIsLoading(true);
 
         const response = await axios({
             method: 'get',
             url: 'https://server-real-estate.herokuapp.com/api/v1/posts',
             type: 'json'
         });
 
         if(response.status === 200){
             setSellList(response.data.posts)
         }
         console.log(sellList);
         setIsLoading(false);     
     }
 
     useEffect(()=>{
         callApi();    
         console.log(sellList);
     },[]);

  return (
    <div>
      { sellList.length >0 ? 
      (sellList.map(item =>{
        return <div>
          <p>{item.title}</p>
          <img src="https://th.bing.com/th/id/OIP.0_GtSZ3IL0LE5mCQGRLBTgHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>
          </div>
      })) : (<h5>List empty</h5>)}
    </div>
  )
}

export default HouseSell