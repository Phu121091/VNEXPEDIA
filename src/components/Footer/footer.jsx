import React from 'react';
import './footer.css';
import LogoHome from '../Logo';
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import LG1 from '../../data/images/logo1.png';
import LG2 from '../../data/images/logo2.png';
import LG3 from '../../data/images/logo3.png';
import LG4 from '../../data/images/logo4.png';
import LG5 from '../../data/images/logo5.png';
import LG6 from '../../data/images/logo6.png';
import LG7 from '../../data/images/logo7.png';
import logoicon from './../Logo/logo-alt.png';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='list-logo'>
      <div className='lg lg1'><img src={LG1}/></div>
      <div className='lg lg2'><img src={LG2}/></div>
      <div className='lg lg3'><img src={LG3}/></div>
      <div className='lg lg4'><img src={LG4}/></div>
      <div className='lg lg5'><img src={LG5}/></div>
      <div className='lg lg6'><img src={LG6}/></div>
      <div className='lg lg7'><img src={LG7}/></div>
    </div>

    <hr></hr>

    <div className='main-footer'> 

      <div className='list-north'>
        <h1>Northern</h1>
        <p>Ha Noi</p>
        <p>Hai Phong</p>
        <p>Ha Nam</p>
        <p>Son La</p>
        <p>Cao Bang</p>
      </div>
      <div className='list-mid'>
        <h1>Central</h1>
        <p>Nghe An</p>
        <p>Quang Binh</p>
        <p>Quang Tri</p>
        <p>Thanh Hoa</p>
      </div>
      <div className='list-south'>
        <h1>Southern</h1>
        <p>Ho Chi Minh City</p>
        <p>Binh Duong</p>
        <p>Dong Nai</p>
        <p>Long An</p>
        <p>Dong Thap</p>
      </div>

      <Link to="/" className='logo-icon'>
      <img src={logoicon}></img>
      </Link>

    </div>

    <hr></hr>

    <div className='list-app'></div>

    <div className='end-footer'>
      <p>Copyright @ 2022 RedQ, Inc.</p>
    </div>
    </div>
  )
}

export default Footer