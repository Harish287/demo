import React from "react";
import Navbar from "../bridalnavbar/bridal";
import Bridalfooter from "./bridalfooter";
import "./bridalhome.css";

import Margin from "./blogimages/123.png";
import Consulting from "./blogimages/consulting.jpg";
import imag4 from "./blogimages/istockphoto.jpg"
import Prebridal from "./blogimages/Pre-Bridal.jpg";
import Teach from "./blogimages/teach.jpg";
import Actual from "./blogimages/acutal.jpg";

import Bookicon from "./blogimages/arrowjoin.svg";
import trialcard from "./blogimages/sessionImg.webp";

import Imageone from "./blogimages/ajb.png";
import Imagetwo from "./blogimages/dj.png";
import Flower1 from "./blogimages/65940-illustrator-border-flower-adobe-png-download-free.png";
import Flower2 from "./blogimages/65940-illustrator-border-flower-adobe-png-download-free.png";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import "bootstrap/dist/css/bootstrap.min.css";
const home = () => {
  return (
    <div>
      <Navbar />

      <div className="homes-name">
        <h1 className="bride-home-head">90 Days Journey</h1>
        <img src={Margin} className="topmargin" alt="" />

        {/*************************************scrollerimadge**********************************************/}

        <div className="consultent">
          <div className="consult">
            <img src={Consulting} className="consulting-img" alt="" />
            <div className="consult-para">
              <h2>Consultation</h2>
              <h6>Stage 1</h6>
              <p>
                The consultation stage of bridal makeup is crucial because it
                gives the bride and the makeup artist a chance to discuss and
                arrange the ideal look for the wedding day. It offers an
                opportunity to learn about the bride's preferences, consider
                several looks, and make sure that the makeup fits the wedding's
                general concept and style.
              </p>
            </div>
          </div>

          <div className="consult-right">
            <img src={imag4} className="consulting-rightimg" alt="" />
            <div className="consult-para">
              <h2>Planning</h2>
              <h6>Stage 2</h6>
              <p>
                Planning is an essential step in bridal makeup that entails
                organising and coordinating various elements to guarantee a
                seamless and practical makeup application on the wedding day.
                Planning beforehand can help create a unified and distinctive
                style that highlights the bride's inherent beauty and
                complements the wedding theme.
              </p>
            </div>
          </div>

          <div className="consult-left">
            <img src={Prebridal} className="consulting-leftimg" alt="" />

            <div className="consult-para">
              <h2>Pre bridal</h2>
              <h6>Stage 3</h6>
              <p>
                Pre-bridal preparation is vital in achieving a flawless and
                radiant bridal makeup look. Before the wedding, a range of
                skincare and beauty regimens are included. The objective is to
                bring out the bride's natural beauty, ensure her skin is in
                perfect condition, and add skincare that will stay all day.
              </p>
            </div>
          </div>

          <div className="consult-right">
            <img src={Teach} className="consulting-rightimg" alt="" />
            <div className="consult-para">
              <h2>Trial session</h2>
              <h6>Stage 4</h6>
              <p>
                An essential part of the wedding planning process is a bridal
                makeup trial. It enables the bride and makeup artist to work
                together to develop and perfect the ideal bridal look. The trial
                session offers a chance to try out several aesthetic looks,
                express your preferences, and ensure the final appearance is
                precisely what you had in mind.
              </p>
            </div>
          </div>

          <div className="consult-left">
            <img src={Actual} className="consulting-leftimg" alt="" />
            <div className="consult-para">
              <h2>Actual day</h2>
              <h6>Stage 5</h6>
              <p>
                The actual day of bridal makeup is an exciting and memorable
                time when the bride gets her makeup professionally done for her
                wedding day. To ensure a stress-free and joyful experience,
                planning ahead and setting aside enough time to apply makeup is
                crucial.
              </p>
            </div>
          </div>
        </div>

        {/******************************************************trialsessiocrad ******************************************/}

        <div className="bridehometrial">
          <h1>Trial Makeup Sessions</h1>
          <p>
            We know that choosing the right makeup look can be a daunting task,
            which is why we offer trial makeup sessions. During your trial, our
            makeup artist will work with you to create a look that highlights
            your best features and complements your personal style.
          </p>
          <a href="/booknow" ><button className="trialbooknow-btn">
            BookNow <img src={Bookicon} className="book-icon-bride" alt="" />
          </button></a>
          <img src={trialcard} className="trialcard-img" alt="" />
        </div>

        <br></br>

        <div className="brideTrial-Makeup">
          <h1>Trial Makeup Sessions</h1>
          <p>
            We know that choosing the right makeup look can be a daunting task,
            which is why we offer trial makeup sessions. During your trial, our
            makeup artist will work with you to create a look that highlights
            your best features and complements your personal style.
          </p>
          <a href="/booknow" ><button className="Trial-Makeup-btn">
            BookNow <img src={Bookicon} className="books-icon-bride" alt="" />
          </button></a>
          <img src={trialcard} className="Trial-Makeupcard-img" alt="" />
        </div>




        <div>
          <h1 className="image-cross-effect-head">Pre and Post Bridal Look</h1>
          <div className="image-cross-effect">
            <img src={Flower1} className="mar-flower1" alt="" />
            <ReactCompareSlider
              className="image-comparision"
              itemOne={
                <ReactCompareSliderImage
                  src={Imagetwo}
                  srcSet=""
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  img
                  src={Imageone}
                  srcSet=""
                  alt="Image two"
                />
              }
            />
            <p className="before-para">Before</p>
            <p className="after-para">After</p>
            <img src={Flower2} className="mar-flower2" alt="" />
          </div>
        </div>

        <br></br>
        <br></br>
        <hr></hr>
      </div>
      <Bridalfooter />
    </div>
  );
};

export default home;

// [
//   {
//     name: "Agil",
//     artistName: "myname",
//     exp: "8",
//     artistphoto: "",
//     bridalphoto: [
//       { name: "bridal1", phto1: "", photo2: "" },
//       { name: "bridal1", phto1: "", photo2: "" },
//       { name: "bridal1", phto1: "", photo2: "" },
//     ],
//   }, {
//     name: "Agil",
//     artistName: "myname",
//     exp: "8",
//     artistphoto: "",
//     bridalphoto: [
//       { name: "bridal1", phto1: "", photo2: "" },
//       { name: "bridal1", phto1: "", photo2: "" },
//       { name: "bridal1", phto1: "", photo2: "" },
//     ],
//   },
// ];
