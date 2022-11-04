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
import Whychoose from './Whychoose/Whychoose';
import Special from './Special/Special';
import Review from './Review/Review';
import AseanMap from './AseanMap/AseanMap';
import Search from './Search/Search';
import Datepicker from './DatePicker/Datepicker';
  
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
 {/* Slide head  */}
        <div className="slide-container">
          <SlideBig/>
          <Search id='search'/>
        </div>
        <Datepicker/>
        

{/* Suggest tour */}
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

      <hr className='hr'/>

{/* Special tour */}
      <div className='suggest-tour'>
        <div className="suggest-title">Special Tour</div>
      <p className="suggest-main">
      We know that every traveller is different, so our experts have
          meticulously designed different Vietnam touring styles to help you
          explore Vietnam in a way that suits you the best. Want to see the
          highlights of Vietnam, take a look on our Classic Vietnam Tours; want
          to have unforgettable experiences with your children, Vietnam Family
          Tours can't be missed; want to soak up the sun-and-sea, choose one
          best beach tour from our Vietnam Beach Holidays theme. No matter what
          kind of traveller you are, our Best Vietnam Tours by Styles collection
          got a tour (or probably dozen) that will fit you just right.
      </p>
      </div>
      <Special/>
      <hr className='hr'/>
      <AseanMap/>
      <hr className='hr'/>
      {/* <Review/> */}
      <hr className='hr'/>
      <AboutUs/>
      <Whychoose/>

    </div>
  )
}

export default Home