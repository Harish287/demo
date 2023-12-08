import React from "react";
import Navbar from "../../academy";
import "./acadehome.css";
const home = () => {
  return (
    <div className="acade-home">
<Navbar/>
  <div className="acade-nav">
      <div className="home-bg">      </div>
      <h6>UNIKAA Beauty Academy</h6>
        <h4>Learn From Beauty Experts</h4>
        <p>
          Unikaa Beauty Academy Learn From International Beauty Experts
          Unikaa Beauty Academy: Empowering students with expert training in
          hair, skin, makeup, and nails, unveiling the artistry within for the
          pursuit of timeless beauty.
        </p>
    
        <a href="ourcourse">
          <button className="acard-btn">COURSES </button>
        </a>

        <a href="/about">
          <button className="acard-abtbtn">ABOUTUS </button>
        </a>
  
      </div>
    </div>
  );
};

export default home;
