import React from "react";
import Navbar from "../bridalnavbar/bridal";
import image from "./blogimages/blog1.jpg";
import image1 from "./blogimages/blog2.jpg";
import image2 from "./blogimages/blog3.jpg";
import image3 from "./blogimages/blog4.jpg";

import "./bridalblogs.css";

import Bridalfooter from "./bridalfooter";

function blogs() {
  return (
    <>
      <Navbar />

      <div></div>
      <br></br>
      <br></br>

      <h1
        style={{
          fontFamily: "against, sans-serif",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "50px",
          lineHeight: "normal",
          textAlign: "center",
        }}
      >
        Read Our Blogs
      </h1>

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
                  objectFit: "cover",
                  boxSizing: "border-box",
                  borderRadius: "50px",
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
                fontFamily: "against, sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "40px",
                lineHeight: "normal",
                textAlign: "center",
               
              }}
            >
              <p >Hairstyles for Brides</p>
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
            <a href="/blogs">Bridal Skincare and Beauty Prep</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image1} alt="loading" style={{ width: "100%" }}></img>
            <a href="/blogs">Bridal Party Fashion</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image1} alt="loading" style={{ width: "100%" }}></img>
            <a href="/blogs">A Complete Guide to Bridal Makeup </a>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image2} alt="loading" style={{ width: "100%" }}></img>
            <a href="/blogs">Things Brides Should Avoid</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image2} alt="loading" style={{ width: "100%" }}></img>
            <a href="/blogs">Hairstyles for Brides</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img src={image2} alt="loading" style={{ width: "100%" }}></img>
            <a href="/blogs">Bridal Accessories</a>
          </div>
        </div>
      </div>

      <br></br>

      <div
        className="container last-line-blog"
        // style={{ display: "flex", margin: "20px auto" }}
      >
        <div
          className="row"
          style={{ display: "flex", flexDirection: "column", width: "70%" }}
        >
          <p
            style={{
              fontFamily: "against, sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "normal",
            }}
          >
            HERE ARE SOME RELATED ARTICLES <br /> YOU MAY FIND INTERESTING:
          </p>
          <br />

          <div className="last-content-in-belogs-left">
            <div className="col-lg-4 col-md-4 col-12">
              <img src={image3} alt="loading" style={{ width: "100%" }}></img>
            </div>
            <a href="/blogs" className="last-content-in-belogs-a-left">
              Things Brides Should Avoid
            </a>
          </div>

          <div className="last-content-in-belogs-left">
            <div className="col-lg-4 col-md-4 col-12">
              <img src={image2} alt="loading" style={{ width: "100%" }}></img>
            </div>
            <a href="/blogs" className="last-content-in-belogs-a-left">
              Make upHair- Q&A to ask before you book your expert
            </a>
          </div>

          <div className="last-content-in-belogs-left">
            <div className="col-lg-4 col-md-4 col-12">
              <img src={image2} alt="loading" style={{ width: "100%" }}></img>
            </div>
            <a href="/blogs" className="last-content-in-belogs-a-left">
              No caking No baking
            </a>
          </div>

          <div className="last-content-in-belogs-left">
            <div className="col-lg-4 col-md-4 col-12">
              <img src={image2} alt="loading" style={{ width: "100%" }}></img>
            </div>
            <a href="/blogs" className="last-content-in-belogs-a-left">
              Touch and Glow
            </a>
          </div>
        </div>

        {/* right side small images */}

        <div
          className="container last-line-blog-left "
          // style={{ width: "30%", marginTop: "70px" }}
        >
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1
              style={{
                fontFamily: "against, sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "30px",
                lineHeight: "normal",
              }}
            >
              popular posts
            </h1>
            <br />
            <div className="last-content-in-belogs">
              <div className="col-lg-4 col-md-4 col-12">
                <img src={image2} alt="loading" style={{ width: "100%" }}></img>
              </div>
              <a href="/blogs" className="last-content-in-belogs-a">
                Bridal Accessories
              </a>
            </div>

            <div className="last-content-in-belogs">
              <div className="col-lg-4 col-md-4 col-12">
                <img src={image2} alt="loading" style={{ width: "100%" }}></img>
              </div>
              <a href="/blogs" className="last-content-in-belogs-a">
                Bridal Skincare and Beauty Prep
              </a>
            </div>

            <div className="last-content-in-belogs">
              <div className="col-lg-4 col-md-4 col-12">
                <img src={image2} alt="loading" style={{ width: "100%" }}></img>
              </div>
              <a href="/blogs" className="last-content-in-belogs-a">
                Bridal Party Fashion
              </a>
            </div>

            <div className="last-content-in-belogs">
              <div className="col-lg-4 col-md-4 col-12">
                <img src={image2} alt="loading" style={{ width: "100%" }}></img>
              </div>
              <a href="/blogs" className="last-content-in-belogs-a">
                A Complete Guide to Bridal Makeup
              </a>
            </div>

            <div className="last-content-in-belogs">
              <div className="col-lg-4 col-md-4 col-12">
                <img src={image2} alt="loading" style={{ width: "100%" }}></img>
              </div>
              <a href="/blogs" className="last-content-in-belogs-a">
                Bridal Makeup Trends
              </a>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <Bridalfooter />
    </>
  );
}
export default blogs;
