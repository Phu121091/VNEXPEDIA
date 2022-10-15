import React, { useState,useContext } from "react";
import Header from "../Header/header";
import Footer  from "../Footer/footer";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext({});

const HeadFoot = ({children}) => {

  const [username,setUsername] = useState(null);
  const [filtervalue,setFV] = useState({});
  const navigate = useNavigate();

  const change = (d) =>{
    setUsername(d);
  }
  const setfilter = (d) =>{
    setFV(d);

  }
  
  console.log(username);
  return (
    <UserContext.Provider value={{username,change,filtervalue,setfilter}}>
      <Header/>
      {children}
      <Footer/>

    </UserContext.Provider>
  )
}

export {UserContext};

export default HeadFoot;