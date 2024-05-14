import React from "react";
import Navbar from "../../academy";
import Acardefooter from "./acadefooter";
import "./aboutacade.css";

import Acadeabt from "./acadeimg/abt-acade1.webp";
const about = () => {
  return (
    <>
      <Navbar />
      <div className="acade-abt">
        <div className="acade-abt-nav">
          <div className="acade-abt-nav-back-text">
          <h6>Unikaa Beauty Academy Passion And Inspiration</h6>
          <h4>A Business Tailor - Made For You</h4>
        </div>
        </div> 
      </div>
      <div>
        <div className="abut-acade-top-divide">
        <div className="abut-acade-top">
          <h6>About Our Unikaa Beauty Academy</h6>
          <h1>A Few Words About Unikaa Beauty Academy</h1>
          <p>
            The largest salon chain in India, Unikaa Beauty Academy, is an
            educational vertical that was created with an emphasis on upskilling
            and educating those aspiring to careers in beauty. Its students
            receive an international standard of beauty education, with a
            particular emphasis on "hands-on aspect in training." Together with
            providing excellent, up-to-date facilities with the newest
            machinery, equipment, and products that foster wonderful learning
            experiences. The curriculum and training module is in line with the
            requirements set by the Beauty & Wellness Sector Skill Council of
            India (BW&SSC) and is improved even more by popular training
            methods. Cosmetology students receive a Beauty Tool Kit that
            contains extremely powerful, tried-and-true beauty tools that will
            boost their international standing and guarantee benefits to their
            professional lives. The purpose of the Tool Kit is to provide
            students with an in-depth overview of the many tools they will be
            utilizing. over the course of their work. With every item in the
            kit, students can acquire the practical knowledge required to work
            as professionals in the field. With its well-liked Diploma in
            Cosmetology course, which enables students to learn hair, makeup,
            and skin in a single professional course, Unikaa Beauty Academy
            provides courses in hair, makeup, skin, nails, bridal, and much
            more. Unikaa Beauty Academy offers the subsequent services: benefits
            to its students include: Opportunities for Practical Training;
            Placements; Professional Trainers from EMI Facilities; and a Unikaa
            Brand Certificate upon course completion, which will make them feel
            proud and inspired for the future.
          </p></div>
          <img src={Acadeabt} alt="" className="abtacade-img" />
        
        </div>
        <div style={{width:"90%",margin:"0 auto", fontSize:"18px",lineHeight:"36px"}}>
          {/* <img src={Acadeabt} alt="" className="abtacade-img" /> */}
          <p>
            All courses are designed specifically by Industry professionals to
            make the students ‘Industry ready’, whether they are keen to work
            with Salons or Freelance is their option and Naturals is always
            available to guide and support them even after completion of their
            courses. At Naturals, we believe in financial independence for women
            and have empowered 400 women to become entrepreneurs in the past 22
            years. Our dream is to create a housewife-free India, where women
            are encouraged to earn their living by pursuing their passion. So
            Come, Join Naturals Beauty Academy to ignite your passion and skill,
            and be a part of the Institution that has delivered quality students
            to work at multiple salons, Freelance as a Bridal Artist or Makeup
            Artist, Nail technician, Beauty Therapist, Cosmetologist,
            Hairstylist, Hairdresser and much more across India and Overseas
            too.
          </p>
        </div>
      </div>

      <div className="acade-abt-para-why-us">
      
        <div className="abt-para-color-1">
        <h6>Mission</h6>
        <p>  Providing excellent services to the customers with innovation, and
          technology through various products and services. “Empowering 5 Lakh
          Youth and Women of India with quality education in Beauty Industry and
          make them financially independent
        </p></div>
        
        <div className="abt-para-color-2">
        <h6>Vision</h6>
          <p>Striving to take the brand to a broader perspective, Offering
          opportunities to our partners and students to become world class
          provider of Skill Development To create women entrepreneurs,
          maximizing their wealth
        </p></div>
       
        <div className="abt-para-color-3">
        <h6>Values</h6>
          <p>Naturals Beauty Academy values excellence, professionalism, and
          creativity. We prioritize integrity, inclusivity, and a
          student-centric approach. Committed to continuous learning and
          sustainability, our passion inspires successful careers.
        </p></div>
        
        <div className="abt-para-color-4">
        <h6>Goals</h6>
         <p> Naturals Beauty Academy aims to empower beauty professionals with
          comprehensive education and skills. We prioritize creativity,
          professionalism, and sustainability, shaping passionate individuals
          for successful careers in the beauty industry.
        </p></div>
      </div>
      <Acardefooter />
    </>
  );
};

export default about;
