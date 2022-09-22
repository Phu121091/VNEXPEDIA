import React, { useEffect, useState } from "react";
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import LogoHome from '../Logo';
import SearchC from "../Search";
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">    
      <NavLink to="/" className="logo">
      <LogoHome/>
      </NavLink>

      <SearchC/>
      </div>

      <div className="header-bot">
      <div className="menu">
      <NavLink to="/nhadatban" className="listbuy">
        Nhà đất bán
      </NavLink>

      <NavLink to="/nhadatchothue" className="listbuy">
        Nhà đất cho thuê
      </NavLink>

      <NavLink to="/duan" className="listbuy">
        Dự án
      </NavLink>

      <NavLink to="/tintuc" className="listbuy">
        Tin tức
      </NavLink>

      <NavLink to="/danhba" className="listbuy">
        Danh bạ
      </NavLink>
      </div>
      

      <div className="log">
        <Link to="/" className="signin">Đăng kí</Link>
        <Link to="/" className="login">Đăng nhập</Link>
        <Link to="/" className="post">Đăng tin</Link>
      </div>
      </div>
     
    </div>
  )
}

export default Header