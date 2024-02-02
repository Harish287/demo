import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../../academy";
import "./acadeour.css";
import Acardefooter from "./acadefooter";

import Hairdressing from "./acadeimg/hairdressings.avif";
import Beautytherapy from "./acadeimg/beautytherapy.jpg";
import Cosmetology from "./acadeimg/Cosmetology.jpg";
import Hairstyling from "./acadeimg/hairstylist.jpg";
import Makeupartist from "./acadeimg/makeupartist.jpg";
import Nailart from "./acadeimg/nailart.jpg";
import Makeupartistert from "./acadeimg/makeupartistery.jpg";
import Beautytherpy from "./acadeimg/Beauty-Therapy.webp";


function Ourcourse() {
  return (
    <>
      <div className="acade-our">
        <div className="acade-our-nav">
          <Navbar />
          <h6>Unikaa Beauty Academy Passion And Inspiration</h6>
          <h4>A Business Tailor - Made For You</h4>
          <a href="/contact">
            <button className="acard-our-btn">Contact Us</button>
          </a>
        </div>
      </div>


      <div className="acade-our-dep">
        <h5>Our Courses</h5>
        <h3>Diploma Courses</h3>
      </div>
      <div className="acade-our-dep-card-firstrow">
        <div className="acade-our-dep-card">
          <div className="greeks">
            <img src={Cosmetology} className="master-card-pic" alt="" />
          </div>
          <div className="acade-our-dep-card-body">
            <h5 className="acade-our-dep-card-title">
              Diploma in Basic Cosmetology
            </h5>
            <a href="/about">
              <button className="acardour-moreinfo">
                More Info <FaArrowRight />
              </button>
            </a>
          </div>
        </div>

        <div className="acade-our-dep-card">
          <div className="greeks">
            <img src={Beautytherapy} className="masterour-card-pic" alt="" />
          </div>
          <div className="acade-our-dep-card-body">
            <h5 className="acade-our-dep-card-title">
              Certificate in Beauty Therapy
            </h5>
            <a href="/about">
              <button className="acardour-moreinfo">
                More Info <FaArrowRight />
              </button>
            </a>
          </div>
        </div>

        <div className="acade-our-dep-card">
          <div className="greeks">
            <img src={Hairdressing} className="masterour-card-pic" alt="" />
          </div>
          <div className="acade-our-dep-card-body">
            <h5 className="acade-our-dep-card-title">
              Certificate in Hairdressing
            </h5>
            <a href="/about">
              <button className="acardour-moreinfo">
                More Info <FaArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="acade-our-dep-card-secondrow">
        <div className="acade-our-dep-card">
          <div className="greeks">
            <img src={Makeupartist} className="masterour-card-pic" alt="" />
          </div>
          <div className="acade-our-dep-card-body">
            <h5 className="acade-our-dep-card-title">
              Certificate in Pro Makeup Artistry Level 1
            </h5>
            <a href="/about">
              <button className="acardour-moreinfo">
                More Info <FaArrowRight />
              </button>
            </a>
          </div>
        </div>

        <div className="acade-our-dep-card">
          <div className="greeks">
            <img src={Hairstyling} className="masterour-card-pic" alt="" />
          </div>
          <div className="acade-our-dep-card-body">
            <h5 className="acade-our-dep-card-title">
              Certificate in Hair Styling (Cut & Styling)
            </h5>
            <a href="/about">
              <button className="acardour-moreinfo">
                More Info <FaArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="masterourclasses">
        <h3>Master Classes</h3>
      </div>

      <div className="masterour-card-row">
        <div className="masterour-card">
          <div className="greek">
            <img src={Nailart} className="masterour-card-pic" alt="" />
          </div>
          <div className="masterour-card-body">
            <h5 className="masterour-card-title">Master Course in Nails</h5>
            <a href="/ourcourse">
              <button className="acardour-moreinfo">
                More Info <FaArrowRight />
              </button>
            </a>
          </div>
        </div>

        <div className="masterour-card">
          <div className="greek">
            <img src={Makeupartistert} className="masterour-card-pic" alt="" />
          </div>
          <div className="masterour-card-body">
            <h5 className="masterour-card-title">
              Master Course in Makeup Artistry
            </h5>
            <a href="/ourcourse">
              <button className="acardour-moreinfo">
                More Info <FaArrowRight />
              </button>
            </a>
          </div>
        </div>

        <div className="masterour-card">
          <div className="greek">
            <img src={Beautytherpy} className="masterour-card-pic" alt="" />
          </div>
          <div className="masterour-card-body">
            <h5 className="masterour-card-title">
              Master Course in Beauty Therapy
            </h5>
            <a href="/ourcourse">
              <button className="acardour-moreinfo">
                More Info <FaArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>

      <Acardefooter />
    </>
  );
}

export default Ourcourse;
