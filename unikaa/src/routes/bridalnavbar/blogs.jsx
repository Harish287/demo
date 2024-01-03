import React from "react";
import Navbar from "../bridalnavbar/bridal";
import image from "./blog1.jpg";
import image1 from "./blog2.jpg";
import image2 from "./blog3.jpg";
import image3 from "./blog4.jpg";

import Bridalfooter from "./bridalfooter";


function blogs() {
  return (
    <>
      <Navbar />

      <div></div>
      <br></br>
      <br></br>
   
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="bg">
              <img
                src={image}
                alt="pic"
                style={{
                  width: "100%",
                  height: 300,
                  position: "relative",
                  zIndex: "-1",
                }}
              ></img>
            </div>
            <div
              className="content"
              style={{
                position: "absolute",
                zIndex: "1",
                marginTop: -200,
                marginLeft: 250,
                fontFamily: "serif",
                textAlign: "center",
              }}
            >
              <p>"Pamper, Glow, Repeat: Your Oasis of Beauty and Serenity."</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image} alt="loading" style={{ width: "100%" }}></img>
            <a href="/blogs">Tips to find best haircare salon in chennai?</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image1} alt="loading" style={{ width: "100%" }}></img>
            <a href="/blogs">
              How To Choose The Right Bridal Makeup Artist For Your Special Day?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image1} alt="loading" style={{ width: "100%" }}></img>
            <a href="/blogs">
              How To Choose The Right Bridal Makeup Artist For Your Special Day?
            </a>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image3}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
            <a href="/blogs">
              Beyond Sunscreen: Additional Tips For Protecting Your Hair From
              The Sun?
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container">
        <div className="row">
          
        </div>
        
      </div>
      <Bridalfooter/>
    </>
  );
}
export default blogs;
