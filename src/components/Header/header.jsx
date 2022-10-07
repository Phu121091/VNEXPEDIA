import React, { useEffect ,useState ,useContext } from "react";
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import LogoHome from '../Logo';
import SearchC from "../Search";
import {BsSuitHeart,BsPerson} from 'react-icons/bs';
import {GrUserAdmin} from 'react-icons/gr';
import './header.css';
import { UserContext } from '../HeadFoot';



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
      <NavLink to="/" id='logo'>
      <LogoHome/>
      </NavLink>

      <SearchC/>
      </div>

      <div className="header-bot">
      <div className="menu">
      <NavLink to="/nhadatban" className={handleActive} >
        Nhà đất bán
      </NavLink>

      <NavLink to="/nhadatchothue" className={handleActive}>
        Nhà đất cho thuê
      </NavLink>

      <NavLink to="/duan" className={handleActive}>
        Dự án
      </NavLink>

      <NavLink to="/tintuc" className={handleActive}>
        Tin tức
      </NavLink>

      <NavLink to="/danhba" className={handleActive}>
        Danh bạ
      </NavLink>
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
        <Link to="/Dangki" className="sign">Đăng kí</Link>
        <Link to="/Dangnhap" className="login">Đăng nhập</Link>
        </div>
      )
      }
      
      </div>
     
    </div>
  )
}

export default Header