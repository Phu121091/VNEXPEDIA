import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';
import Home from "./pages/Home/home";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Classic from './pages/TravelStyle/Classic/Classic';
import Family from './pages/TravelStyle/Family/Family';
import Beach from './pages/TravelStyle/Beach/Beach';
import ShortTrips from './pages/TravelStyle/ShortTrips/ShortTrips';
import Culinary from './pages/TravelStyle/Culinary/Culinary';
import Adventure from './pages/TravelStyle/Adventure/Adventure';
import Cruises from './pages/TravelStyle/Cruises/Cruises';
import Welles from './pages/SpecialDeals/Welles/Welles';
import Luxury from './pages/SpecialDeals/Luxury/Luxury';
import MICE from './pages/SpecialDeals/MICE/MICE';
import Heritages from './pages/SpecialDeals/Heritages/Heritages';
import ReponsibleTravel from './pages/SpecialDeals/ReponsibleTravel/ReponsibleTravel';
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import ShopInfor from "./pages/ShopInfor/ShopInfor";
import TravelInfo from "./pages/TravelInfo/TravelInfo";
import Feedback from "./pages/Home/Feedback/Feedback";
import TripFinder from "./pages/TripFinder";




 
function App() {

  return (
    <div className="App" >
      <BrowserRouter>
      <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Classic" element={<Classic />} />
      <Route path="/Family" element={<Family />} />
      <Route path="/Beach" element={<Beach />} />
      <Route path="/ShortTrips" element={<ShortTrips />} />
      <Route path="/Culinary" element={<Culinary />} />
      <Route path="/Adventure" element={<Adventure />} />
      <Route path="/Cruises" element={<Cruises/>} />
      <Route path="/Welles" element={<Welles/>}/>
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ShopInfor" element={<ShopInfor />} />
      <Route path="/TravelInfo" element={<TravelInfo />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path="/Luxury" element={<Luxury />} />
      <Route path="/Mice" element={<MICE />} />
      <Route path="/Heritages" element={<Heritages />} />
      <Route path="/Reponsive" element={<ReponsibleTravel />} />
      <Route path='/TripFinder' element={<TripFinder/>}/>
      </Routes>
      </Layout> 
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
