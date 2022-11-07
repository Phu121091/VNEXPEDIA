import React, { useEffect ,useState ,useContext } from "react";
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import {BsSuitHeart,BsPerson,BsHeart} from 'react-icons/bs';
import {GrUserAdmin} from 'react-icons/gr';
import './header.css';
import { UserContext } from '../Layout';
import {IoIosArrowDown ,IoIosArrowForward} from 'react-icons/io';
import {FaSearchLocation,FaPhoneAlt} from 'react-icons/fa';
import Search from "../Find/Search";




const Header = () => {

  const [showfind,setshowfind]=useState('hidden');

  const username = useContext(UserContext);
  console.log(username);

  const navigate = useNavigate();
  const location = useLocation();


  const handleLogout = () => {
    username.change(null);
    navigate("/log-in", { replace: true });
  };

  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };

  const ShowFind = () => {
    if (showfind=='show'){
      setshowfind('hidden')
    } else setshowfind('show')
  }

  return (
    <div className="header">
      {/* <div className="header-top">   

      <Link to="/" id='logo'>
      <img src={logoicon} alt="logo"></img>
      </Link>

      <div className="header-top-mid">
       <img src='https://th.bing.com/th/id/OIP.sfeXXVKmqZ6gjP5Tx3ZaEQHaE7?pid=ImgDet&rs=1' alt="language"></img>
       <p>VietNamese</p>
       <p>MyAudley</p>
       <BsHeart/>
      </div>

      <div className="callus">
        <button>BUY A TRIP</button>
        <p>Call Us : 0354865073</p>
      </div>

      </div> */}

      <div className="header-bot">
      <div className="menu">
        <div className="menu-li" id='list1'>
      <NavLink to="/" className={handleActive} >
        Destinations
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-1">
        <div className="list-country">
        <Link>Viet Nam</Link>
        <div className="list-mini">
        <Link>Ha Noi</Link>
        <Link>SaPa - Lao Cai</Link>
        <Link>Ha Long</Link>
        <Link>Tay Nguyen</Link>
        <Link>Da Nang</Link>
        <Link>Sai Gon</Link>
        <Link>Hai Phong</Link>
        <Link>Binh Lieu</Link>
        <Link>Hue</Link>
        <Link>Vung Tau</Link>
        </div>
        </div>

        <div className="list-country">
        <Link>Lao</Link>
        <div className="list-mini">
        <Link>Luang Prabang</Link>
        <Link>Viang Chan</Link>
        </div>
        </div>

        <div className="list-country">
        <Link>Thai Lan</Link>
        <div className="list-mini">
        <Link>Bangkok</Link>
        <Link>Koh Panyee</Link>
        <Link>Pattaya</Link>
        </div>
        </div>

        <div className="list-country">
        <Link>Campuchia</Link>
        <div className="list-mini">
        <Link>Angkor Wat, Angkor Thom</Link>
        <Link>Phnom Penh</Link>
        <Link>Battambang</Link>
        </div>
        </div>

      </div>
      </div>
      <div className="menu-li">
      <NavLink to="/TravelStyles" className={handleActive}>
        Travel Styles
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-2">
        <Link to='/Classic'>CLASSIC</Link>
        <Link to='/Family'>FAMILY</Link>
        <Link to='/Beach'>BEACH</Link>
        <Link to='ShortTrips'>SHORT TRIPS</Link>
        <Link to='Culinary'>CULINARY</Link>
        <Link to='Adventure'>ADVENTURE</Link>
        <Link to='Cruises'>CRUISES</Link>
      </div>
      </div>

      <div className="menu-li">
      <NavLink to="/SpecialDeals" className={handleActive}>
        Special Deals
      </NavLink>
      <IoIosArrowDown/>
      </div>
      <div className="menu-li">
      <NavLink to="/About" className={handleActive}>
        About
      </NavLink>
      <IoIosArrowDown/>
      </div>
      <div className="menu-li">
      <NavLink to="/News" className={handleActive}>
        News
      </NavLink>
      <IoIosArrowDown/>
      </div>
      </div>
      
      <div className="phone-find-container" onClick={()=>ShowFind()}>
        <div className="find-container">
        <FaSearchLocation className="header-icon"/>
        <button type='text' className="find-btn">Search</button>
        </div>
        <div className="phone-container">
          <FaPhoneAlt className="header-icon"/>
          <span>03.548.65073</span>
        </div>

      </div>
      
      { username.username ?
      (
        <div className="log">
          
          <BsSuitHeart/>
          {username.username.admin?<GrUserAdmin/>:<BsPerson/>}
          <Link to='/User' className="sign">{username.username.userName}</Link>
          <button className="logout" onClick={handleLogout}>Đăng xuất</button>
          <Link to="/Dangtin" className="post" >Đăng tin</Link>
        </div>

      ) :
      (
        <div className="log">
        {/* <Link to="/Dangki" className="sign">Đăng kí</Link>
        <Link to="/Dangnhap" className="login">Đăng nhập</Link> */}
        <Link to='/' >For User</Link>
        <IoIosArrowForward/>
        </div>
        
      )
      }     

      </div>
      {/* <div className="find-area" id={showfind}>
        <p>Search: </p>
        <input type='text' placeholder="Viet Nam" style={{marginTop:0}} />
      </div> */}
      <Search id={showfind}/>
      <div className="log-container">

        <Link to='/' className="log-link">Log in</Link>
        <Link to='/' className="log-link">Sign-in</Link>
      </div>
    
    </div>
  )
}

export default Header