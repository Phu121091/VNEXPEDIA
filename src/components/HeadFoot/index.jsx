import React, { useState,useContext } from "react";
import Header from "../Header/header";
import Footer  from "../Footer/footer";

const UserContext = React.createContext({});

const HeadFoot = ({children}) => {

  const [username,setUsername] = useState("hello");
  const change = () =>{
    setUsername('hoho');
  }
  
  console.log(username);
  return (
    <UserContext.Provider value={{username,change}}>
      <Header/>
      {children}
      <Footer/>

    </UserContext.Provider>
  )
}

export {UserContext};

export default HeadFoot;