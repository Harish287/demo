import React, { useState } from "react";
import Navbar from "../bridalnavbar/bridal";
import "./makeup.css";

import Consulting from "./consulting.jpg";
import Makeup2 from "./makeup2.jpg";
import Makeup1 from "./makeup1.webp";

import Bridalfooter from "./bridalfooter";
import Slide from "./slideonimg";

import "bootstrap/dist/css/bootstrap.min.css";

function Makeup() {
  const [firstimg, setfirstimg] = useState(true);
  const [secondimg, setsecondimg] = useState(false);
  const [thirdimg, setthirdimg] = useState(false);
  const firstimgHandler = () => {
    setfirstimg(true);
    setsecondimg(false);
    setthirdimg(false);
  };
  const secondimgHandler = () => {
    setfirstimg(false);
    setsecondimg(true);
    setthirdimg(false);
  };

  const thirdimgHandler = () => {
    setfirstimg(false);
    setsecondimg(false);
    setthirdimg(true);
  };

  const [secondfirstimg, setsecondfirstimg] = useState(true);
  const [secondsecondimg, setsecondsecondimg] = useState(false);
  const [secondthirdimg, setsecondthirdimg] = useState(false);

  const secondfirstimgHandler = () => {
    setsecondfirstimg(true);
    setsecondsecondimg(false);
    setsecondthirdimg(false);
  };

  const secondsecondimgHandler = () => {
    setsecondfirstimg(false);
    setsecondsecondimg(true);
    setsecondthirdimg(false);
  };

  const secondthirdimgHandler = () => {
    setsecondfirstimg(false);
    setsecondsecondimg(false);
    setsecondthirdimg(true);
  };

  const [thirdfirstimg, setthirdfirstimg] = useState(true);
  const [thirdsecondimg, setthirdsecondimg] = useState(false);
  const [thirdthirdimg, setthirdthirdimg] = useState(false);

  const thirdfirstimgHandler = () => {
    setthirdfirstimg(true);
    setthirdsecondimg(false);
    setthirdthirdimg(false);
  };

  const thirdsecondimgHandler = () => {
    setthirdfirstimg(false);
    setthirdsecondimg(true);
    setthirdthirdimg(false);
  };

  const thirdthirdimgHandler = () => {
    setthirdfirstimg(false);
    setthirdsecondimg(false);
    setthirdthirdimg(true);
  };

  return (
    <>
      <Navbar />
      <div>
        <Slide />
      </div>
      <br />

      <h1 className="our-top-art-head">Our Top Artists</h1>

      <div className="all-card">
        <div>
          <div className="image-handle-change-card-bride-make">
            <button onClick={firstimgHandler}>
              <img src={Consulting} alt="" />
            </button>
            <button onClick={secondimgHandler}>
              <img src={Makeup2} alt="" />
            </button>
            <button onClick={thirdimgHandler}>
              <img src={Makeup1} alt="" />
            </button>
          </div>

          <div className="container image-card-change">
            {firstimg && (
              <div>
                <img src={Consulting} alt="" />
              </div>
            )}
            {secondimg && (
              <div>
                <img src={Makeup2} alt="" />
              </div>
            )}
            {thirdimg && (
              <div>
                <img src={Makeup1} alt="" />
              </div>
            )}
            <p>artist</p>
          </div>
        </div>

        {/* image-handle-change-card-bride-make2 */}

        <div>
          <div className="image-handle-change-card-bride-make2">
            <button onClick={secondfirstimgHandler}>
              <img src={Consulting} alt="" />
            </button>
            <button onClick={secondsecondimgHandler}>
              <img src={Makeup2} alt="" />
            </button>
            <button onClick={secondthirdimgHandler}>
              <img src={Makeup1} alt="" />
            </button>
          </div>

          <div className="container image-card-change2">
            {secondfirstimg && (
              <div>
                <img src={Consulting} alt="" />
              </div>
            )}
            {secondsecondimg && (
              <div>
                <img src={Makeup2} alt="" />
              </div>
            )}
            {secondthirdimg && (
              <div>
                <img src={Makeup1} alt="" />
              </div>
            )}
            <p>artist</p>
          </div>
        </div>

        {/* image-handle-change-card-bride-make3 */}

        <div>
          <div className="image-handle-change-card-bride-make3">
            <button onClick={thirdfirstimgHandler}>
              <img src={Consulting} alt="" />
            </button>
            <button onClick={thirdsecondimgHandler}>
              <img src={Makeup2} alt="" />
            </button>
            <button onClick={thirdthirdimgHandler}>
              <img src={Makeup1} alt="" />
            </button>
          </div>

          <div className="container image-card-change3">
            {thirdfirstimg && (
              <div>
                <img src={Consulting} alt="" />
              </div>
            )}
            {thirdsecondimg && (
              <div>
                <img src={Makeup2} alt="" />
              </div>
            )}
            {thirdthirdimg && (
              <div>
                <img src={Makeup1} alt="" />
              </div>
            )}
            <p>artist</p>
          </div>
        </div>
      </div>

      <br />
      <Bridalfooter />
    </>
  );
}

export default Makeup;
