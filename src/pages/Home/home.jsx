import React from 'react';
import { useEffect,useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import './home.css';
import SlideBig from './Slide';
import Blockgrid from '../../components/Blockgrid/Blockgrid';
import Whychoose from './Whychoose/Whychoose';
import Special from './Special/Special';
import AseanMap from './AseanMap/AseanMap';
import OurStory from './Ourstory/Ourstory';
import axios from "axios";
  
const Home = () => {
  
//   const [sellList, setSellList] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//   const callApi =async()=>{
//     setIsLoading(true);

//      const response = await axios({
//          method: 'POST',
//          url: 'https://dieuhanh.vatco.vn/MobileLogin/GetFullText?id=3925',
//          type: 'json'
//      });
  
//      if(response.status === 200){
//       setSellList(response.data);
//   }
//   console.log(sellList);
//   setIsLoading(false);     
// }
// useEffect(()=>{
//   callApi();    
  
// },[]);
// console.log(sellList);

  return (
    <div> 
 {/* Slide head  */}
        <div className="slide-container">
          <SlideBig/>
        </div>
       {/* {sellList.length>0&& 
        <div className='test'>
          {sellList}
        </div>
        } */}


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
      <OurStory/>
{/* Special tour */}
      <div className='suggest-tour'>
        <div className="suggest-title">Special Tour</div>
      <p className="suggest-main-title">
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
      {/* <AboutUs/> */}
      
      <Whychoose/>

    </div>
  )
}

export default Home