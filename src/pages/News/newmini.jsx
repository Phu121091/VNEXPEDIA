import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Newmini = ({item}) => {

  return (
    <Link to={`/Tin/${item._id}`} className='newmini'>
        <img src={item.image}></img>
        <p>{item.title}</p>
    </Link>
  )
}

export default Newmini