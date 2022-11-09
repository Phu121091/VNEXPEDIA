import React, { useEffect ,useState ,useContext } from "react";
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import {BsSuitHeart,BsPerson,BsHeart} from 'react-icons/bs';
import {GrUserAdmin} from 'react-icons/gr';
import './header.css';
import { UserContext } from '../Layout';
import {IoIosArrowDown ,IoIosArrowForward} from 'react-icons/io';
import {FaSearchLocation,FaPhoneAlt} from 'react-icons/fa';
import {BiPaperPlane} from 'react-icons/bi';
import Search from "../Find/Search";
import Buttontop from "../ButtonTop/Buttontop";




const Header = () => {

  const [showfind,setshowfind]=useState('hidden');
  const [showlog,setshowlog] =useState('hidden');

  const user = useContext(UserContext);
  console.log(user);

  const navigate = useNavigate();
  const location = useLocation();


  const handleLogout = () => {
    user.change(null);
    navigate("/log-in", { replace: true });
  };
//design link active
  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };

// Show-hide Log and Search
  const ShowFind = () => {
    if (showfind=='show'){
      setshowfind('hidden')
    } else setshowfind('show')
  }
  const Showlog = () => {
    {showlog=='show'?setshowlog('hidden'):setshowlog('show')}
  }

  return (
    <div className="header">

      <div className="header-bot">
      <div className="menu">
      <div className="menu-li">
      <NavLink to="/TravelStyles" id={handleActive} className='link-f'>
        MEDIA Corner
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
        <div className="menu-li" id='list1'>
      <NavLink to="/" id={handleActive} className='link-f'>
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
      <NavLink to="/TravelStyles" id={handleActive} className='link-f'>
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
      <NavLink to="/SpecialDeals" id={handleActive} className='link-f'>
        Special Deals
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-3">
        <Link to='/Welles'>WELLES</Link>
        <Link to='/Mice'>M.I.C.E</Link>
        <Link to='/Luxury'>LUXURY</Link>
        <Link to='/Heritages'>HERITAGES</Link>
        <Link to='/Reponsible'>REPONSIBLE TRAVEL</Link>
      </div>
      </div>
      <div className="menu-li">
      <NavLink to="/About" id={handleActive} className='link-f'>
        Trip Finder
      </NavLink>
      <IoIosArrowDown/>
      </div>
      <div className="menu-li">
      <NavLink to="/News" id={handleActive} className='link-f'>
        Company
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-4">
        <Link to='/AboutUs'>ABOUT US</Link>
        <Link to='/Policy'>POLICY</Link>
        <Link to='/Privacy'>PRIVACY</Link>
        <Link to='/Payment'>PAYMENT GATEWAY</Link>
        <Link to='/Affiliates'>AFFILIATES</Link>
      </div>
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
      <Link to='/ShopInfor' className="tour-shoped-icon">
      <BiPaperPlane/><span>{user.shoped.length}</span>
      </Link>
      
      { user.username ?
      (
        <div className="log">
          
          <BsSuitHeart/>
          {user.username.admin?<GrUserAdmin/>:<BsPerson/>}
          <Link to='/User' className="sign">{user.username.userName}</Link>
          <button className="logout" onClick={handleLogout}>Đăng xuất</button>
          <Link to="/Dangtin" className="post" >Đăng tin</Link>
        </div>

      ) :
      (
        <div className="log"  onClick={()=>Showlog()}>
        <p>For User</p>
        <IoIosArrowForward/>
        </div>
        
      )
      }     

      <Buttontop/>
      </div>

      <Search id={showfind}/>
      <div className="log-container" id={showlog}>

        <Link to='/LogIn' className="log-link">Log in</Link>
        <Link to='/SignUp' className="log-link">Sign-in</Link>
      </div>
    
    
    </div>
  )
}

export default Header