import React from 'react';
import './sellitem.css';
import {BsSuitHeart} from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { Button } from 'antd';

const Sellitem = ({item}) => {
   
  return (
    <Link className='item-mini' to={`/${item._id}`}>
        <img src={item.image}></img> 
        <div className='item-mini-content'>
        <b>{item.title}</b>
        <p>{item.area} {item.price}</p>
        <div className='des'>{item.description}</div>
        <div className='end-mini'>
            <button>{item.phoneNumber}</button>
            <BsSuitHeart ></BsSuitHeart>
        </div>
        </div>
        

    </Link>
  )
}

export default Sellitem