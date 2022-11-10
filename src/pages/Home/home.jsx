import React from 'react';
import { useEffect,useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import './home.css';
import SlideBig from './Slide';
import Blockgrid from '../../components/Blockgrid/Blockgrid';
import Whychoose from './Whychoose/Whychoose';
import AseanMap from './AseanMap/AseanMap';
import OurStory from './Ourstory/Ourstory';
import Hot from './Hot';
import axios from "axios";
import SpecialTour from '../../components/SpecialTour/SpecialTour';
import SuggestTour from '../../components/SuggestTour/SuggestTour';
  
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
{/* hot tour */} 
        <Hot/>
{/* Suggest tour */}

      <SuggestTour />

      <hr className='hr'/>
      <OurStory/>
{/* Special tour */}
      <SpecialTour />
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