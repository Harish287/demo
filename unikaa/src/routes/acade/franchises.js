import React from "react";
import Navbar from "../../academy";
import "./franchiseacade.css";
const franchise = () => {
  return (
    <div className="acade-franche">
      <div className="acade-franche-nav">
        <Navbar />
        <h6>Unikaa Beauty Academy Passion And Inspiration</h6>
        <h4>A Business Tailor - Made For You</h4>
        <a href="/contact">
          <button className="acade-franchebtn">CONTACTUS </button>
        </a>
      </div>
    </div>
  );
};

export default franchise;
