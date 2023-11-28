import React from "react";
import "./offers.css";
import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../Assets/abc.jpg";
import image2 from "../Assets/hair9.jpg";
import image3 from "../Assets/peducure.jpg";
import image4 from "../Assets/hair_cut1.jpg";

export default function App() {
  return (
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
      {/* <div className="ha">
      <p>hafro</p>
    </div> */}
    </div>
  );
}
