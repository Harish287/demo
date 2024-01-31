import React from "react";
// import "../routes/offers.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./Assets/hair _cut 14.jpg";
import image2 from "./Assets/hair9.jpg";
import image3 from "./Assets/hc-2.webp";
import image4 from "./Assets/hair_cut1.jpg";
import image5 from "./Assets/images 3.avif";
import image6 from "./Assets/images 2.jpg";
import jeniliya from "./Assets/Jenelia-1.webp";

import "./logo.css";

// import ScrollToTop from "./scrolltop";

import "animate.css/animate.min.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Logo() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>
      <div className="pallex-logo">
        <Carousel fade data-bs-theme="dark ">
          <Carousel.Item interval={5000}>
            <img
              // width={1600}
              // height={300}
              src={image1}
              class="img-fluid object-fit-cover  "
              alt="..."
            />

            <Carousel.Caption>
              <button className="book-now-slide1-btn">Book Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              // width={1600}
              // height={300}
              src={image2}
              class="img-fluid object-fit-cover  "
              alt="..."
            />

            <Carousel.Caption>
              <button className="book-now-slide2-btn">booknow</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              // width={1600}
              // height={300}
              src={image3}
              class="img-fluid object-fit-cover"
              alt="..."
            />

            <Carousel.Caption>
              <button className="book-now-slide3-btn">booknow</button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              // width={1600}
              // height={300}

              src={image4}
              class="img-fluid object-fit-cover   "
              alt="..."
            />{" "}
            <Carousel.Caption>
              <button className="book-now-slide4-btn">booknow</button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              // width={1600}
              // height={300}
              src={image5}
              class="img-fluid object-fit-cover   "
              alt="..."
            />

            <Carousel.Caption>
              <button className="book-now-slide5-btn">booknow</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              // width={1600}
              // height={300}
              src={image6}
              class="img-fluid object-fit-cover   "
              alt="..."
            />

            <Carousel.Caption>
              <button className="book-now-slide6-btn">booknow</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <div className="logo-2line">
          {/* <p>NATURALLY, YOU!</p> */}
          <br />
          <h2>
            What Our Magicians Can
            <br /> Do For You
          </h2>
        </div>
        <div className="logocontainer2">
          <div className="row log2-imagealine">
            <div className="col-lg-4 col-md-4 col-12 ">
              <AnimatedOnScroll animationIn="bounceInLeft">
             
                <img 
                  src={image2}
                  alt="loading"
                  className="logo-left-card-img "
                  style={{ width: "100%" }}
                ></img>
              </AnimatedOnScroll>
            </div>
            <div className="col-lg-4  col-md-4 col-12">
              <div className="logo-p2">
                <h3 className="logo-us-h3">EXCLUSIVELY BRIDAL</h3>
                <p className="pfist">Bespoke bridal looks</p>
                <p className="psecnd">
                  for brides that cover all <br />
                  services.
                </p>
              </div>
            </div>
          </div>

          <div className="logo-card">
            <h1>Skin Care</h1>
            <p>
              Unikaa skincare services replenish, rejuvenate and revitalise your
              skin
              <br></br>
              <br />
              <a href="/skincare">
                <button className="skinknow-btn">Know More</button>
              </a>
            </p>

            <img src={jeniliya} className="skincard-img" alt="" />
          </div>
        </div>

        <div className="logocontainer3">
          <div className="row log3-imagealine">
            <div className="col-lg-4 col-md-4 col-12 ">
              <AnimatedOnScroll animationIn="bounceInLeft">
                {" "}
                <img
                  src={image2}
                  alt="loading"
                  className="logo-left-card-img2 "
                  style={{ width: "100%" }}
                ></img>
              </AnimatedOnScroll>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="logo-p3">
                <h4 className="logo-us-h4">HAIR CARE</h4>
                <p className="pfist3">
                  Hairstyling and cuts from simple trims to a <br />
                  couture look
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="logocontainer4">
          <div className="row log4-imagealine">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="logo-p4">
                <p className="pfist4">FRANCHISE</p>
                <h4 className="logo-us-h4-4">
                  Join The <br />
                  Unikaa Family
                </h4>

                <p className="p-second2">
                  Be A Part of India’s Largest Salon Chain An Exciting <br />
                  Entrepreneurship Opportunity For You.
                </p>
                <a href="/franchise">
                  <button>Get In Touch</button>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 ">
              <div className="image-card-scrool">
                <AnimatedOnScroll animationIn="bounceInRight">
                  <Carousel fade data-bs-theme="dark ">
                    <Carousel.Item interval={5000}>
                      <img
                        // width={1600}
                        // height={300}
                        src={image2}
                        className="img-fluid object-fit-cover  "
                        alt="..."
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        // width={1600}
                        // height={300}
                        src={image3}
                        className="img-fluid object-fit-cover"
                        alt="..."
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        // width={1600}
                        // height={300}

                        src={image4}
                        className="img-fluid object-fit-cover   "
                        alt="..."
                      />
                    </Carousel.Item>
                  </Carousel>
                </AnimatedOnScroll>
              </div>
            </div>
          </div>
        </div>

        <div className="logocontainer5">
          <div className="row log5-imagealine">
            <div className="col-lg-4 col-md-4 col-12 ">
              <AnimatedOnScroll animationIn="bounceInLeft">
                {" "}
                <img
                  src={image2}
                  alt="loading"
                  className="logo-left-card-img5 "
                  style={{ width: "100%" }}
                ></img>
              </AnimatedOnScroll>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="logo-p5">
                <h4 className="logo-us-h4-5">Unikaa Acadamy</h4>
                <h2 className="logo-skill-5">
                  Hone Your Skills With
                  <br />
                  Learning Opportunities
                  <br />
                  From Unikaa
                </h2>
                <p className="pfist5">
                  Interested to Learn the Art of Make-Up?
                  <br />
                  Join Unikaa Beauty Academy – A Wave
                  <br />
                  That Creates Artists in The Beauty Industry
                </p>
                <a href="/academy">
                  <button>Get In Touch</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ScrollToTop/> */}
    </>
  );
}

export default Logo;
