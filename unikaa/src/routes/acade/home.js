import React from "react";
import Navbar from "../../academy";
import "./acadehome.css";
import Acutal from "./acutal.jpg";
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
              Naturals Beauty Academy: Our mission is to provide candidates with
              internationally recognized education, emphasizing hands-on
              learning. With our state-of-the-art facilities and cutting-edge
              equipment, we empower students to excel in the beauty industry.
              Our Beauty Tool Kit enhances skills to international standards,
              benefiting students’ professional lives with highly effective
              tools. Designed for comprehensive training, each item in the kit
              equips students with the practical knowledge necessary to become
              high-performing industry professionals.Naturals Beauty Academy:
              Our mission is to provide candidates with internationally
              recognized education, emphasizing hands-on learning. With our
              state-of-the-art facilities and cutting-edge equipment, we empower
              students to excel in the beauty industry. Our Beauty Tool Kit
              enhances skills to international standards, benefiting students’
              professional lives with highly effective tools. Designed for
              comprehensive training, each item in the kit equips students with
              the practical knowledge necessary to become high-performing
              industry professionals.
            </p>
          </div>
        </div>

        <div className="acade-home-dep">
          <h5>Our Courses</h5>
          <h3>Diploma Courses</h3>
        </div>
        <div className="acade-home-dep-card-firstrow">
          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">Workshops</h5>
              <a href="/about">
                <button className="acard-moreinfo">More Info </button>
              </a>
            </div>
          </div>

          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Certificate in Beauty Therapy
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">More Info </button>
              </a>
            </div>
          </div>
          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Certificate in Hairdressing
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">More Info </button>
              </a>
            </div>
          </div>
        </div>
        <div className="acade-home-dep-card-secondrow">
          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Certificate in Pro Makeup Artistry Level 1
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">More Info </button>
              </a>
            </div>
          </div>

          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Certificate in Pro Makeup Artistry Level 1
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">More Info </button>
              </a>
            </div>
          </div>
          <div className="acade-home-dep-card">
            <div className="greeks">
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="acade-home-dep-card-body">
              <h5 className="acade-home-dep-card-title">
                Diploma in Basic Cosmetology
              </h5>
              <a href="/about">
                <button className="acard-moreinfo">More Info </button>
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
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="master-card-body">
              <h5 className="master-card-title">Master Course in Nails</h5>
              <a href="/ourcourse">
                <button className="acard-moreinfo">More Info </button>
              </a>
            </div>
          </div>

          <div className="master-card">
            <div className="greek">
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="master-card-body">
              <h5 className="master-card-title">
                Master Course in Makeup Artistry
              </h5>
              <a href="/ourcourse">
                <button className="acard-moreinfo">More Info </button>
              </a>
            </div>
          </div>

          <div className="master-card">
            <div className="greek">
              <img src={Acutal} className="master-card-pic" alt="" />
            </div>
            <div className="master-card-body">
              <h5 className="master-card-title">
                Master Course in Beauty Therapy
              </h5>
              <a href="/ourcourse">
                <button className="acard-moreinfo">More Info </button>
              </a>
            </div>
          </div>
        </div>

        <div className="background-acade-home">
          <h2>Enroll Now</h2>
          <p>
            By choosing Naturals Beauty Academy, you gain not only a
            comprehensive education but also a wide range of benefits that set
            you up for success in the beauty industry. From industry connections
            to practical training, certifications, expert guidance, and
            professional kits, we are committed to providing our students with
            the best possible learning experience and preparing them for
            rewarding careers in the beauty and grooming industry.
          </p>
          <a href="/home">
            <button className="background-acade-home-btn">More Info </button>
          </a>
        </div>

        <div className="">
          <h3>Benefits of Joining Naturals beauty academy</h3>
        </div>

        <div></div>
      </div>
      <Acardefooter />
    </div>
  );
};

export default home;
