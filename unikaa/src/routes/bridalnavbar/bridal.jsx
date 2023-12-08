import React from "react";
import Bridalnav from "./bridalnav.js";
import "../bridalnavbar/bridal.css";
import Blogs from "./blogs.js";
import Home from "./homes.js";
import Makeup from "./makeup.js";
import Services from "./services.js";
import { Route, Routes } from "react-router-dom";


function bridal() {
  return (
    <>
      <Bridalnav />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          </Routes>
       
      </div>
   
    </>
  );
}

export default bridal;
