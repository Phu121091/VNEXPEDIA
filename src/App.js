import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layouts from "./components/Layout";
import HeadFoot from "./components/HeadFoot";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeadFoot>
        
      </HeadFoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
