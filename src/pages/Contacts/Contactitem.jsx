import React from 'react';
import {GoLocation} from "react-icons/go";
import {BsTelephoneInbound} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
import './contact.css';

const Contactitem = ({item}) => {
  return (
    <div className='ct-item'>
        <img src={item.logo}></img>
        <div className='ct-main'>
            <h5>{item.name}</h5>
            <GoLocation></GoLocation>
            <span>{item.address}</span><br/>
            <BsTelephoneInbound></BsTelephoneInbound>
            <span>{item.phone}</span>
        </div>
        <div className='local'>
            <h5>Khu vực hoạt động</h5>
            {item.local.map((d)=>(
            <div>
                <GoPrimitiveDot></GoPrimitiveDot>
                <span>{d}</span>    
            </div>
            ))}
        </div>
    </div>
  )
}

export default Contactitem