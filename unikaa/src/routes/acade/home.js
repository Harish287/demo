import React from "react";
// import Navbar from "../../academy";
import Navbar from "../../components/Navbar/Header"
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
import Training from "./acadeimg/trining.png";
import Trainingtime from "./acadeimg/triningtime.jpg";

import { FaArrowRight } from "react-icons/fa";

import AnchorLink from "react-anchor-link-smooth-scroll";


// import Master from "./acutal.jpg";
import Acardefooter from "./acadefooter";

import Franchise from "./franchises"
import Ourcourse from "./ourcourse"
import Contact from "./contact"

const home = () => {
  return (
    <div className="acade-home">
      {/* <Navbar /> */}
      <div className="acade-nav">
        <div className="home-bg">
          <div className="acade-back-text-color">

            <h1>Welcome to Unikaa Beauty Academy</h1>
            <h4>Empowering Future Beauty Professionals</h4>
            <p>
              At Unikaa Beauty Academy, we are dedicated to nurturing the next generation of beauty
              experts. Our comprehensive training programs are designed to equip aspiring beauty
              professionals with the skills, knowledge, and confidence needed to thrive in the ever evolving
              beauty industry
            </p>
          </div>
          <br />
          <div className="acard-btns">
            <a href="/ourcourse">
              <button className="acard-btn">COURSES </button>
            </a>
            <a href="/about">
              <button className="acard-abtbtn">ABOUTUS </button>
            </a>
          </div>
        </div>
      </div>

      <div className="acadehometop">
        <div className="row">
          <div className="home-headacade ">
            <h4>Our Mission</h4>
          </div>

          <div className=" paraacadehome">
            <p>
              Our mission is to provide exceptional education and hands-on training in various beauty
              disciplines, including makeup artistry, hairstyling, skincare, and salon management. We aim to
              empower our students with practical skills and theoretical knowledge, ensuring they are well
              prepared for successful careers.

            </p>
          </div>
        </div>


        {/* <div className=" container">
          <h2 className="h3 " >Why Choose Unikaa Beauty Academy?</h2>
          <div>
            <h2 className="h5">1. Industry Relevant Curriculum:</h2>
            <p> Our courses are carefully crafted to align with current beauty trends and industry standards.
              Students will learn the latest techniques, products, and tools used in the beauty field.</p>
          </div>
          <div>
            <h2 className="h5">2. Experienced Instructors:</h2>
            <p>Learn from seasoned professionals with extensive experience in the beauty industry. Our
              instructors bring real-world insights and practical tips to the classroom.</p>
          </div>
          <div>
            <h2 className="h5">3. Hands-on Training:</h2>
            <p> We believe in the power of experiential learning. Our students gain valuable hands-on
              experience through practical sessions, workshops, and live demonstrations, ensuring they
              leave confident in their abilities.</p>
          </div>
          <div>
            <h2 className="h5">4. State-of-the-art Facilities:</h2>
            <p>Our academy is equipped with modern facilities and the latest beauty technology, providing
              students with an immersive learning environment</p>
          </div>
          <div>
            <h2 className="h5">5. Career Support:</h2>
            <p> We are committed to helping our graduates succeed. Our career support services include job
              placement assistance, resume building, and networking opportunities within the beauty
              industry.</p>
          </div>

        </div> */}


        {/*****************************************card***********************************************/}

        <div className="acade-home-dep">
          <h5>Our Courses</h5>
          <h3>Diploma Courses</h3>
        </div>
        <div className="card-back-fix">
          <div className="acade-home-dep-card-firstrow">
            <div className="acade-home-dep-card">
              <div className="greeks">
                <img src={Cosmetology} className="master-card-pic" alt="" />
              </div>
              <div className="acade-home-dep-card-body">
                <h5 className="acade-home-dep-card-title">
                  Diploma in Basic Cosmetology
                </h5>
                <p>Training focused on the business side of beauty, including marketing, customer service, and
                  salon operations</p>
                {/* <a href="/about">
                  <button className="acard-moreinfo">
                    More Info <FaArrowRight />
                  </button>
                </a> */}
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
                <p>Education on skincare treatments, product knowledge, and practical skills for facials,
                  exfoliation, and more</p>
                {/* <a href="/about">
                  <button className="acard-moreinfo">
                    More Info <FaArrowRight />
                  </button>
                </a> */}
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
                <p>Courses covering haircutting, styling, coloring, and advanced techniques like braiding and
                  updos</p>
                {/* <a href="/about">
                  <button className="acard-moreinfo">
                    More Info <FaArrowRight />
                  </button>
                </a> */}
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
                <p>Comprehensive training in makeup techniques for various occasions, including bridal,
                  editorial, and special effects makeup.</p>
                {/* <a href="/about">
                  <button className="acard-moreinfo">
                    More Info <FaArrowRight />
                  </button>
                </a> */}
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
                <p>Courses covering haircutting, styling, coloring, and advanced techniques like braiding and
                  updos</p>
                {/* <a href="/about">
                  <button className="acard-moreinfo">
                    More Info <FaArrowRight />
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Masterclass */}

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
          {/* <a href="/home"> */}
          <AnchorLink href="#contact"> <button className="background-acade-home-btn">
            More Info <FaArrowRight />
          </button></AnchorLink>
          {/* </a> */}
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

          <div className="our-best-image-full">
            <img src={Trainingtime} className="our-best-img" alt="" />
          </div>
        </div>
      </div>

      <Franchise />
      {/* <Ourcourse/> */}
      <div id="contact"><Contact  /></div>

      {/* <Acardefooter /> */}
    </div>
  );
};

export default home;
