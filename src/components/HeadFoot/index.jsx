import React, { useState,useContext } from "react";
import Header from "../Header/header";
import Footer  from "../Footer/footer";

const UserContext = React.createContext({});

const HeadFoot = ({children}) => {

  const [username,setUsername] = useState(null);
  const [filtervalue,setFV] = useState({});
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