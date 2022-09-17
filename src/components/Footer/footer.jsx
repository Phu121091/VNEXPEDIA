import React from 'react';
import './footer.css';
import LogoHome from '../Logo';
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <LogoHome/>

      <Link to='/'>Hotline 1900 8888</Link>

      <Link to='/'>Hỗ trợ khách hàng</Link>



    </div>
  )
}

export default Footer