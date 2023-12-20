import React from "react";
import "./media.css";
import image from "../Assets/media2.jpg";
import image1 from "../Assets/media 3.jpg";
import image2 from "../Assets/media1.jpg";
import image3 from "../Assets/media2.jpg";

const Media = () => {
  return (
    <div className="header">
      <div className="img-pink">
        <h1>Media</h1>
      </div>
      <div className="media-head">
        <h2>
          Our Collection of Press Coverage Reflecting the Recognition Naturals
          has Earned
        </h2>
      </div>
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
            ></div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image} alt="loading" style={{ width: "100%" }}></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image1} alt="loading" style={{ width: "100%" }}></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image1} alt="loading" style={{ width: "100%" }}></img>
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
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
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
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
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
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
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
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "100%", height: "60%" }}
            ></img>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">footer</div>
        </div>
      </div> */}
    </div>
  );
};

export default Media;
