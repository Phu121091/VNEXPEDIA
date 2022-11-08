import React, { useEffect ,useState ,useContext } from "react";
import Data from '../../../data/data/hotel.json';
import TourBox from '../../../components/TourBox/TourBox';


const Family = () => {

  

  console.log(Data);
  return (
    <div>
      {Data.length> 0 &&
      <div>
        {Data.map((d)=><TourBox data={d} />)}
        </div>}

    </div>
  )
}

export default Family