import React, { useEffect ,useState ,useContext } from "react";
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import LogoHome from '../Logo';
import SearchC from "../Search";
import {BsSuitHeart,BsPerson,BsHeart} from 'react-icons/bs';
import {GrUserAdmin} from 'react-icons/gr';
import './header.css';
import { UserContext } from '../HeadFoot';
import {IoIosArrowDown ,IoIosArrowForward} from 'react-icons/io';
import logoicon from './../Logo/logo-alt.png';



const Header = () => {
  
  const username = useContext(UserContext);
  console.log(username);

  // const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogout = () => {
    username.change(null);
    navigate("/log-in", { replace: true });
  };

  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };

  return (
    <div className="header">
      <div className="header-top">   

      <Link to="/" id='logo'>
      <img src={logoicon}></img>
      </Link>

      <div className="header-top-mid">
       <img src='https://th.bing.com/th/id/OIP.sfeXXVKmqZ6gjP5Tx3ZaEQHaE7?pid=ImgDet&rs=1'></img>
       <p>VietNamese</p>
       <p>MyAudley</p>
       <BsHeart/>
      </div>

      <div className="callus">
        <button>BUY A TRIP</button>
        <p>Call Us : 0354865073</p>
      </div>

      </div>

      <div className="header-bot">
      <div className="menu">
        <div className="menu-li">
      <NavLink to="/" className={handleActive} >
        Destinations
      </NavLink>
      <IoIosArrowDown/>
      </div>
      <div className="menu-li">
      <NavLink to="/TravelStyles" className={handleActive}>
        Travel Styles
      </NavLink>
      <IoIosArrowDown/>
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
     
    </div>
  )
}

export default Header