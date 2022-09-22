import React, { useState } from "react";
import Header from "../Header/header";
import Footer  from "../Footer/footer";

// const Layouts = ({ children, isLogin, setIsLogin }) => {
const HeadFoot = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>

    </div>
  )
}
export default HeadFoot;