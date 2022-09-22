import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layouts from "./components/Layout";
import HeadFoot from "./components/HeadFoot";
import './App.css';
import Home from "./pages/Home/home";
import Contacts from './pages/Contacts';
import HouseLease from './pages/HouseLease';
import HouseSell from './pages/HouseSell';
import News from './pages/News';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeadFoot>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Nhadatban" element={<HouseSell />} />
      <Route path="/Nhadatchothue" element={<HouseLease />} />
      <Route path="/Duan" element={<Project />} />
      <Route path="/Tintuc" element={<News />} />
      <Route path="/Danhba" element={<Contacts />} />
      </Routes>
      </HeadFoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
