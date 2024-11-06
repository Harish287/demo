import React from "react";
// import Navbar from "../acade/academy";
import Navbar from "../../components/Navbar/Header"
import "./franchiseacade.css";
import Acardefooter from "./acadefooter";
import Experts from "./acadeimg/exprets-acade.png";
import Career from "./acadeimg/career-acade.png";
import Certified from "./acadeimg/certification.png";
import Beauty from "./acadeimg/beauty academy.jpg";

import {
  FaTrophy,
  FaMapMarkedAlt,
  FaAward,
  FaStore,
  FaRupeeSign,
  FaChartLine,
  FaChalkboardTeacher,
  FaRegBuilding,
  FaRegIdCard,
  FaLightbulb,
  FaBook,
  FaUsers,
} from "react-icons/fa";

const franchise = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="acade-franche">
        <div className="acade-franche-nav">
          <h6>Unikaa Beauty Academy Passion And Inspiration</h6>
          <h4>A Business Tailor - Made For You</h4>
          <a href="/contact">
            <button className="acade-franchebtn">CONTACTUS </button>
          </a>
        </div>
      </div> */}

      <div className="acade-franchise-head">
        <h1>Welcome to Unikaa Beauty Academy</h1>
        <h2>Passion And Inspiration</h2>
        <p>A Business- Customized for you</p>
      </div>

      <div className="acade-franchise-card">
        <div className="acade-franchise-card1">
          <img src={Experts} alt="" />
          <h2>Expert Instruction</h2>
          <p>
            Learn from industry leaders, gaining hands-on experience and
            cutting-edge beauty techniques.
          </p>
        </div>

        <div className="acade-franchise-card1">
          <img src={Career} alt="" />
          <h2>Global Excellence</h2>
          <p>
            Attain mastery in international standards for hair, skin, makeup,
            and nails expertise
          </p>
        </div>

        <div className="acade-franchise-card1">
          <img src={Certified} alt="" />
          <h2>Career Empowerment</h2>
          <p>
            Unlock doors to success with globally recognized certifications and
            transformative education.
          </p>
        </div>
      </div>

      {/**************************************Unikaa Beauty Academy's Mission***********************************/}
      <div className="franchise-academy-mission-full">
        <div className="franchise-academy-mission">
          <h4>Unikaa Beauty Academy's Mission</h4>
          <p>
            After 5 years of dedicated research and development, we are proud to introduce Unikaa Beauty Salon, where luxury meets affordability. Experience top-notch beauty services designed for everyone!
            <br />
            <br />At Unikaa Beauty Salon, we believe that beauty should not come with a hefty price tag. Our commitment
            to affordability does not compromise our dedication to excellence. We carefully selected premium
            products and state-of-the-art equipment to deliver exceptional results.
            The salon’s ambiance reflects our ethos—welcoming, relaxing, and inspiring. We aim to create a space
            where clients feel pampered and rejuvenated, enhancing not just their appearance but their overall well being.
          </p> </div>
        <div className="franchise-academy-mission-img">
          <div className="franchise-academy-mission-text">
            <h3>Unikaa beauty acadamy</h3>
            <h5>hair|skin|makeup|nails</h5>
            <p>Franchise</p>
          </div>
          <img src={Beauty} alt="" className="beauty-acadamy-img" />

        </div>
      </div>

      {/*******************************Benefits Of Owning Unikaa Beauty Academy***************************/}

      {/* <div className="all-card-franchise-acard">
        <h2>Benefits Of Owning Unikaa Beauty Academy</h2>
      </div>

      <div className="all-card-franchise-acard-next">
        <div className="benifits-of-owning-in-franchise">
          <div className="benifits-of-owning-in-franchise-card">
            <div className="benifits-of-owning-in-franchise-card-1">
              <i>
                <FaTrophy />
              </i>
              <p>India's Best Salon</p>
            </div>

            <div className="benifits-of-owning-in-franchise-card-2">
              <i>
                <FaRupeeSign />
              </i>
              <p>30- 35 Lakhs investment</p>
            </div>

            <div className="benifits-of-owning-in-franchise-card-3">
              <i>
                <FaRegIdCard />
              </i>
              <p>Trainers Trained by Top Professionals</p>
            </div>
          </div>

          <div className="benifits-of-owning-in-franchise-card1">
            <div className="benifits-of-owning-in-franchise-card1-1">
              <i>
                <FaMapMarkedAlt />
              </i>
              <p>700 salons Across the Country</p>
            </div>

            <div className="benifits-of-owning-in-franchise-card1-2">
              <i>
                <FaChartLine />
              </i>
              <p>ROI in 24 - 36 Months</p>
            </div>

            <div className="benifits-of-owning-in-franchise-card1-3">
              <i>
                <FaLightbulb />
              </i>
              <p>Continuous Operation Support</p>
            </div>
          </div>

          <div className="benifits-of-owning-in-franchise-card2">
            <div className="benifits-of-owning-in-franchise-card2-1">
              <i>
                <FaAward />
              </i>
              <p>22 Years of Experience</p>
            </div>

            <div className="benifits-of-owning-in-franchise-card2-2">
              <i>
                <FaChalkboardTeacher />
              </i>
              <p>International Standard Of Traning</p>
            </div>

            <div className="benifits-of-owning-in-franchise-card2-3">
              <i>
                <FaBook />
              </i>
              <p>World Class Courses Materials</p>
            </div>
          </div>

          <div className="benifits-of-owning-in-franchise-card3">
            <div className="benifits-of-owning-in-franchise-card3-1">
              <i>
                <FaStore />
              </i>
              <p>Successful franchise model</p>
            </div>

            <div className="benifits-of-owning-in-franchise-card3-2">
              <i>
                <FaRegBuilding />
              </i>
              <p>Site Selection and design layout</p>
            </div>

            <div className="benifits-of-owning-in-franchise-card3-3">
              <i>
                <FaUsers />
              </i>
              <p>TTrained 50k Students</p>
            </div>
          </div>
        </div>
      </div> */}

      {/********************************Why To Choose The Beauty Industry?************************************************/}

      <div className="acade-franchise-WhyToChoose">
        <h1>Why To Choose The Beauty Industry?</h1>
        <div className="acade-franchise-para-why-us container">
          <p className="para-color-1">
            1. Industry Relevant Curriculum:
            Our courses are carefully crafted to align with current beauty trends and industry standards. Students will learn the latest techniques, products, and tools used in the beauty field.
          </p>
          <p className="para-color-2">
            2. Experienced Instructors:
            Learn from seasoned professionals with extensive experience in the beauty industry. Our instructors bring real-world insights and practical tips to the classroom.
          </p>
          <p className="para-color-3">
            3. Hands-on Training:
            We believe in the power of experiential learning. Our students gain valuable hands-on experience through practical sessions, workshops, and live demonstrations, ensuring they leave confident in their abilities.
          </p>
          <p className="para-color-4">
            4. State-of-the-art Facilities:
            Our academy is equipped with modern facilities and the latest beauty technology, providing students with an immersive learning environment
          </p>
          <p className="para-color-4">
            5. Career Support:
            We are committed to helping our graduates succeed. Our career support services include job placement assistance, resume building, and networking opportunities within the beauty industry.
          </p>
        </div>
      </div>

      {/* <Acardefooter /> */}
    </>
  );
};

export default franchise;
