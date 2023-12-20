import React from "react";
import image from "../Assets/veena.webp";
import "../aboutus.css";

const aboutus = () => {
  return (
    <>
    
      <div className="abtheader">
        <div className="about-imag">
          <h1>Aboutus</h1>
        </div>
        <div className="about-head">
          <h2>Unikaa's - Creating Experiences With Businesses</h2>
        </div>
        <div></div>
        <br></br>
        <br></br>
      </div>
      <div className="container">
        <div className="row abt-imagealine">
          <div className="col-lg-4 col-md-4 col-12 ">
            <img src={image} alt="loading" style={{ width: "100%" }}></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="abtus-p" style={{ width: "100%" }}>
              <h3 className="abt-us-h1">Creating A Beautiful World</h3>
              <p>
                Unikaa's was conceived with the idea of the modern Indian.
                Founded by K. Veena, whose knowledge of the international beauty
                industry pioneered a new era in the hair and beauty care
                industry in India, Unikaa's has made a path-breaking change in
                the way the beauty industry has been perceived.
                <p></p>
                So in the early 2000s, she made that dream a reality by setting
                up her first salon in Chennai. It took her only a while to
                understand the market potential and the ever-increasing demand
                for professional grooming. In 2004 her husband co-founder & CEO,
                CK Kumaravel joined and ever since then, the Unikaa's team has
                been able to meet every challenge in this competitive industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <p className="abt-img-para-dn">
        Today, Unikaa's is India’s most prominent chain of hair and beauty
        salons. Thanks to our world-class service, courteous staff and loyal
        support from our patrons, Unikaa's now has 650+ salons across the
        sub-continent and aims to expand to 3000 salons by 2025.
      </p>

      <br></br>
      <br></br>
      <hr></hr>


      <div className="abt-drop">
        <p>Milestones Over The Years</p></div>
    </>
  );
};

export default aboutus;
