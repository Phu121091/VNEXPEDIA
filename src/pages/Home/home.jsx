import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './home.css';
import { useEffect,useState,useContext } from 'react';
import axios from "axios";
import Sellitem from '../../components/Sellitem';
import SlideBig from './Slide';
import Blockgrid from '../../components/Blockgrid/Blockgrid';
import AboutUs from './AboutUs/AboutUs';
  
const Home = () => {

//   const [sellList, setSellList] = useState([]);
//   const [rentList, setRentList] = useState([]);

//   const callApi =async()=>{
//      const response = await axios({
//          method: 'get',
//          url: 'https://server-real-estate.herokuapp.com/api/v1/posts',
//          type: 'json'
//      });

//      if(response.status === 200){
//          setRentList(response.data.filter(d => (d.sale_or_rent =='rent')&&(d.status==true)).slice(0,4))
//      }
//      console.log(rentList);        
//  }

//  const callApi2 =async()=>{

//    const response = await axios({
//        method: 'get',
//        url: 'https://server-real-estate.herokuapp.com/api/v1/posts',
//        type: 'json'
//    });

//    if(response.status === 200){
//        setSellList(response.data.filter(d => (d.sale_or_rent =='sale')&&(d.status==true)).slice(0,4))
//    }
//    console.log(sellList);   
// }

//  useEffect(()=>{
//      callApi();    
//      callApi2();
//  },[]);

  return (
    <div> 

        <div className="slide-container">
          <SlideBig/>
        </div>

        <div className='suggest-tour'>
        <div className="suggest-title">Suggested Simples Tours</div>
      <p className="suggest-main">
        The tours featured throughout our website are intended to give you ideas
        for what's possible when you travel with us. Treat them simply as
        inspiration, because your trip will be created individually by one of
        our specialists to match your tastes and budget.
      </p>

      <div className="itemSimmple">
        <Blockgrid />
      </div>
      </div>
        
      <AboutUs/>

    </div>
  )
}

export default Home