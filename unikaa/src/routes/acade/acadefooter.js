import React from "react";
import "./acadefooter.css";
import fb from "./fb.png";
import twitter from "./twitter.png";
import insta from "./insta.png";
import linkedin from "./im.png";
import youtube from "./48968.png";
// import App from "../App"

//******************************* fonticon import***************////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="Footer ">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links_div">
          <h4>Quick Links</h4>
          <a href="/">
            <p>Home</p>
          </a>
          <a href="/aboutus">
            <p>AboutUs</p>
          </a>
          <a href="/contactus">
            <p>Contact Us</p>
          </a>
          <a href="/franchise">
            <p>Franchise Opportunities</p>
          </a>
          <a href="/blog">
            <p>Blog</p>
          </a>
          {/* <a href="/policy">
            <p>Private Policy</p>
          </a> */}
        </div>
        <div className="sb__footer-links_div">
          <h4>Our Service</h4>
          <a href="/haircare">
            <p>Hair Care</p>
          </a>
          <a href="/skincare">
            <p>Skin Care</p>
          </a>
          <a href="/bodycare">
            <p>Body Care</p>
          </a>
          <a href="/bridal">
            <p>Bridal</p>
          </a>
          {/* <a href="/events">
            <p>Events</p>
          </a>
          <a href="/locateus">
            <p>Locate Us</p>
          </a> */}
        </div>
        <div className="sb__footer-links_div">
          <h4>Contact Us</h4>

          <p>location</p>
        </div>

        <div className="sb__footer-links_div">
          <h4>Get IN Touch</h4>
          <p>phoneNumber</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            Email Id
          </p>

          <div className="socialmedia">
            <p>
              <a href="sdasda">
                <img src={fb} alt="" />
              </a>
            </p>
            <p>
              <a href="ssaa">
                <img src={twitter} alt="" />
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/_.mr.thunder_gray._">
                <img src={insta} alt="" />
              </a>
            </p>
            <p>
              <a href="gfgfg">
                <img src={linkedin} alt="" />
              </a>
            </p>
            <p>
              <a href="https://youtu.be/2PIagAiL_a8?si=PEUrGw_ZdJH5Fvq1">
                <img src={youtube} alt="" />
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <hr></hr> */}
      <div className="sb__footer-below">
        <div className="sb__footer-copyrights">
          <p>@{new Date().getFullYear()} Unikaa. All rights reserved.</p>
        </div>
        {/* <div className="sb__footer-below-links">
    <a href="/terms"><div><p>terms & conditions</p></div></a>
</div> */}
      </div>
    </div>
  );
};

export default Footer;
