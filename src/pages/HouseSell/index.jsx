import React from 'react';
import { useEffect,useState,useContext } from 'react';
import { UserContext } from '../../components/HeadFoot';
import axios from "axios";
import './housesell.css';
import Listrender from '../../components/Listrender';
import Sellitem from '../../components/Sellitem';
import { HTTP } from '../../http-default';

const HouseSell = () => {

    const [sellList, setSellList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const filterObj = useContext(UserContext);
  
      const callApi =async()=>{
          setIsLoading(true);
   
           const response = await axios({
               method: 'get',
               url: 'https://server-real-estate.herokuapp.com/api/v1/posts',
               type: 'json'
           });
   
           if(response.status === 200){
               setSellList(response.data.filter(d => d.sale_or_rent =='sale'))
           }
           console.log(sellList);
           setIsLoading(false);     
       }
   
       useEffect(()=>{
           callApi();    
           
       },[]);
    //  const filterlist = sellList.filter((item) => item.name.toLowerCase().indexOf((filterObj.filtervalue.inputvalue).toLowerCase()) > -1).filter(a => a.city==filterObj.filtervalue.local1);
     console.log(sellList);

  return (
    <div className='house-cell'>
      <div className='quangcao'>
      <img src='https://th.bing.com/th/id/OIP.GPYW8Z6hxzrF6V0UaygCzQAAAA?w=182&h=313&c=7&r=0&o=5&dpr=1.25&pid=1.7'></img>
      <img src='https://th.bing.com/th/id/OIP.PjfaZteyGV3wU2q82pbjIAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.25&pid=1.7'></img>
      </div>

      {/* {filterObj.filtervalue.hover[0]=='on' ?
      <div className='main-housesell'>
        <h3>Bán nhà đất {filterObj.filtervalue.local1} {filterObj.filtervalue.cost1}</h3>
        <p>Hiện có {filterlist.length} bất động sản</p><br/>
        { filterlist.length >0 ? 
       
       (filterlist.map((item,index) => (
      <Sellitem item={item}/>
       )))
      */}
  
    {/* : (<h5>List empty</h5>)}
      </div> */}
      
      <div className='main-housesell'>
      <h3>Bán nhà đất trên toàn quốc</h3>
      <p>Hiện có {sellList.filter(d=>d.status==true).length} bất động sản</p><br/>
      { sellList.length >0 ? 
       
         (sellList.filter(d=>d.status==true).map((item,index) => (
        <Sellitem item={item}/>
         )))
       
    
      : (<h5>List empty</h5>)}
    </div>
      
    
   
      <div className='quangcao'>
      <img src='https://th.bing.com/th/id/OIP.IGH7MiCdB4sC9u0jt6fzUgHaQr?w=155&h=349&c=7&r=0&o=5&dpr=1.25&pid=1.7'></img>
      <img src='https://th.bing.com/th/id/OIP.HiU6WY3D4zn7hi01AC0vpwAAAA?w=174&h=349&c=7&r=0&o=5&dpr=1.25&pid=1.7'></img>
      </div>
    </div>
  )
}

export default HouseSell