import React from 'react';
import {GiGreenhouse} from "react-icons/gi";
import './logo.css';

const LogoHome = () => {
  return (
    <div className='logohome'>
        <GiGreenhouse className='iconlogo' color='green'/>
        <p>GreenHouse</p>
    </div>
  )
}

export default LogoHome