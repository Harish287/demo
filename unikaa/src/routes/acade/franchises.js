import React from "react";
import Navbar from "../../academy";
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
      <Navbar />
      <div className="acade-franche">
        <div className="acade-franche-nav">
          <h6>Unikaa Beauty Academy Passion And Inspiration</h6>
          <h4>A Business Tailor - Made For You</h4>
          <a href="/contact">
            <button className="acade-franchebtn">CONTACTUS </button>
          </a>
        </div>
      </div>

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
      <div>
        <div className="franchise-academy-mission">
          <h4>Unikaa Beauty Academy's Mission</h4>
          <p>
            Unikaa Beauty Academy is managed by visionary entrepreneurs
            ___________ And ____________, leaders in beauty industry with 22
            years of experience. Awarded the ‘Best Health & Beauty Retailer’ and
            ‘Most Admired Salon’, Unikaa began from scratch and today dominates
            the Industry with 700+ salons in 26 cities. With the best In-house
            R&D Team, placement cell with placement partners in India and
            overseas, Unikaa is home to 10,000 employees.
            <br />
            <br />A Unikaa Beauty Academy franchise is simple and easy, even for
            first-time entrepreneurs, you can set up a franchise with minimum
            advertising and marketing costs, zero hassles of identifying
            locations. We understand that continuous training is key to this
            business, and have established the Unikaa Beauty Academy in Chennai,
            which offers multiple Certificate, Diploma, Master & Short term
            courses to upgrade the skills of our partners & students.
          </p>
        </div>

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

      <div className="all-card-franchise-acard">
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
      </div>

      {/********************************Why To Choose The Beauty Industry?************************************************/}

      <div className="acade-franchise-WhyToChoose">
        <h1>Why To Choose The Beauty Industry?</h1>
        <div className="acade-franchise-para-why-us">
          <p className="para-color-1">
            The Indian beauty industry, which is presently the eighth largest in
            the world, is one of the fastest growing sectors and is predicted to
            develop much more in the upcoming years.
          </p>
          <p className="para-color-2">
            According to a Euromonitor International Study, the Indian beauty
            and personal care (BPC) industry is estimated to be worth $1 billion
            and is expanding at a rate of -10%.
          </p>
          <p className="para-color-3">
            Market is estimated to be worth $1 billion and is expanding at a
            rate of -10% (Euro monitor International Study). The report also
            indicates that skin care and cosmetics are anticipated to drive the
            market's expansion, with a doubling of the market by 2030.
          </p>
          <p className="para-color-4">
            The Indian government encourages and prioritizes raising vocational
            skill levels to meet international norms.
          </p>
        </div>
      </div>

      <Acardefooter />
    </>
  );
};

export default franchise;
