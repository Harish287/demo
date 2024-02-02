import React from "react";
import Navbar from "../../academy";
import "./acadehome.css";
// import Acutal from "./acutal.jpg";


import Hairdressing from "./acadeimg/hairdressings.avif";
import Beautytherapy from "./acadeimg/beautytherapy.jpg";
import Cosmetology from "./acadeimg/Cosmetology.jpg";
import Hairstyling from "./acadeimg/hairstylist.jpg";
import Makeupartist from "./acadeimg/makeupartist.jpg";
import Nailart from "./acadeimg/nailart.jpg";
import Makeupartistert from "./acadeimg/makeupartistery.jpg";
import Beautytherpy from "./acadeimg/Beauty-Therapy.webp";


import Placement from "./acadeimg/placement-logo.png";
import Practical from "./acadeimg/practical.png";
import Certification from "./acadeimg/certification.png";
import Training from "./acadeimg/trining.png"
import Trainingtime from "./acadeimg/triningtime.jpg"

import { FaArrowRight } from "react-icons/fa";

// import Master from "./acutal.jpg";
import Acardefooter from "./acadefooter";
const home = () => {
  return (
    <div className="acade-home">
      <Navbar />
      <div className="acade-nav">
        <div className="home-bg"> </div>
        <h6>UNIKAA Beauty Academy</h6>
        <h4>Learn From Beauty Experts</h4>
        <p>
          Unikaa Beauty Academy Learn From International Beauty Experts Unikaa
          Beauty Academy: Empowering students with expert training in hair,
          skin, makeup, and nails, unveiling the artistry within for the pursuit
          of timeless beauty.
        </p>
        <div className="acard-btns">
          <a href="/ourcourse">
            <button className="acard-btn">COURSES </button>
          </a>
          <a href="/about">
            <button className="acard-abtbtn">ABOUTUS </button>
          </a>
        </div>
      </div>

      <div className="acadehometop">
        <div className="row">
          <div className="home-headacade ">
            <h4>Our Mission</h4>
          </div>

          <div className=" paraacadehome">
            <p>
              Our goal at Unikaa Beauty Academy is to give applicants an
              internationally acclaimed education with a focus on experiential
              learning. By providing our students with the most advanced tools
              and state-of-the-art facilities, we enable them to succeed in the
              beauty industry. Our Beauty Tool Kit provides students with
              extremely effective instruments that improve their talents to
              worldwide standards, so benefitting their professional careers.
              Every component in the package is intended for thorough
              instruction and provides students with the practical information
              they need to become productive professionals in the
              business.Beauty Academy Unikaa: Our goal is to give candidates a
              globally recognized education with a focus on practical
              experience. By providing our students with the most advanced
              facilities and equipment available, we enable them to succeed in
              the beauty industry. With products that are incredibly effective,
              our Beauty Tool Kit improves skills to meet international
              standards and helps students in their professional careers.
              Crafted to provide thorough instruction, every component of the
              kit furnishes learners with the hands-on experience required to
              develop into proficient industry experts.
            </p>
          </div>
        </div>

        {/*****************************************card***********************************************/}

        <div className="acade-home-dep">
          <h5>Our Courses</h5>
          <h3>Diploma Courses</h3>
        </div>
        <div className="acade-home-dep-card-firstrow">
          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Cosmetology} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Diploma in Basic Cosmetology
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">
                  More Info <FaArrowRight />
                </button>
              </a>
            </div>
          </div>

          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Beautytherapy} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Certificate in Beauty Therapy
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">
                  More Info <FaArrowRight />
                </button>
              </a>
            </div>
          </div>

          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Hairdressing} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Certificate in Hairdressing
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">
                  More Info <FaArrowRight />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="acade-home-dep-card-secondrow">
          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Makeupartist} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Certificate in Pro Makeup Artistry Level 1
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">
                  More Info <FaArrowRight />
                </button>
              </a>
            </div>
          </div>

          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Hairstyling} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Certificate in Hair Styling (Cut & Styling)
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">
                  More Info <FaArrowRight />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="masterclasses">
          <h3>Master Classes</h3>
        </div>

        <div className="master-card-row">
          <div className="master-card">
            <div className="greek">
              <img src={Nailart} className="master-card-pic" alt="" />
            </div>
            <div className="master-card-body">
              <h5 className="master-card-title">Master Course in Nails</h5>
              <a href="/ourcourse">
                <button className="acard-moreinfo">
                  More Info <FaArrowRight />
                </button>
              </a>
            </div>
          </div>

          <div className="master-card">
            <div className="greek">
              <img src={Makeupartistert} className="master-card-pic" alt="" />
            </div>
            <div className="master-card-body">
              <h5 className="master-card-title">
                Master Course in Makeup Artistry
              </h5>
              <a href="/ourcourse">
                <button className="acard-moreinfo">
                  More Info <FaArrowRight />
                </button>
              </a>
            </div>
          </div>

          <div className="master-card">
            <div className="greek">
              <img src={Beautytherpy} className="master-card-pic" alt="" />
            </div>
            <div className="master-card-body">
              <h5 className="master-card-title">
                Master Course in Beauty Therapy
              </h5>
              <a href="/ourcourse">
                <button className="acard-moreinfo">
                  More Info <FaArrowRight />
                </button>
              </a>
            </div>
          </div>
        </div>

{/**************************************************enroll*************************************/}
        <div className="background-acade-home">
          <h2>Enroll Now</h2>
          <p>
            By choosing Unikaa Beauty Academy, you gain not only a comprehensive
            education but also a wide range of benefits that set you up for
            success in the beauty industry. From industry connections to
            practical training, certifications, expert guidance, and
            professional kits, we are committed to providing our students with
            the best possible learning experience and preparing them for
            rewarding careers in the beauty and grooming industry.
          </p>
          <a href="/home">
            <button className="background-acade-home-btn">
              More Info <FaArrowRight />
            </button>
          </a>
        </div>

        {/*****************************************Our Best Features*****************************************/}
        <div className="over-all-our-best">

          <div className="our-best">
            <h1 className="our-best-head">Our Best Features</h1>
            <p className="our-best-1stpara">
              At Unikaa Beauty Academy, learn about skin, makeup, nails, and
              hair from global experts. Gain certifications, insights, and
              international excellence.
            </p>
            <div>
              <div className="placement-offer">
              <img src={Placement} className="our-best-logo" alt="" />
                <h2>Placements offered</h2>
                <p>
                  We provide a variety of placement opportunities to help you
                  kickstart your career successfully
                </p>
              </div>

              <div className="placement-offer">
              <img src={Practical} className="our-best-logo" alt="" />
                <h2>Practical learning method</h2>
                <p>
                  Our curriculum emphasizes practical learning, ensuring that
                  students gain hands-on experience to excel in real-world
                  scenarios
                </p>
              </div>
              <div className="placement-offer">
              <img src={Certification} className="our-best-logo" alt="" />
                <h2>Certification</h2>
                <p>
                  Upon successful completion of the program, you will receive a
                  certification that validates your expertise and enhances your
                  professional credentials
                </p>
              </div>
              <div className="placement-offer">
              <img src={Training} className="our-best-logo" alt="" />
                <h2>Training from industry experts</h2>
                <p>
                  Training from Industry experts - Benefit from our training
                  programs led by industry experts, gaining valuable insights
                  and skills directly from seasoned professionals
                </p>
              </div>
            </div>
          </div>
          <div>
          <img src={Trainingtime} className="our-best-img" alt="" />
          </div>
        </div>
       

    
      </div>
      <Acardefooter />
    </div>
  );
};

export default home;
