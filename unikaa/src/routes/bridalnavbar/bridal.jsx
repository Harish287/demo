import React from "react";
import Bridalnav from "./bridalnav.jsx";
import "../bridalnavbar/bridal.css";
import Blogs from "./blogs.jsx";
import Home from "./homes.js";
import Makeup from "./makeup.js";
import Services from "./services.js";
import Booknow from "./booknow.php";
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
          <Route path="/booknow" element={<Booknow />} />
        </Routes>
      </div>
    </>
  );
}

export default bridal;
