import React, { useState, useEffect } from "react";
import '../CSS/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Article from "./Article";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Article />} />
    </Routes>
  )
    
}

export default App;
