import React from "react";

import image from "../Assets/WhatsAp.jpeg";
import "../aboutus.css";
import image2 from "../Assets/home-1.webp";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Page = (props) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="page">
      {children}
    </div>
  );
};

const aboutus = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>

      <div className="abtheader">
        <div className="about-imag">
          <h1 className="text-center">About Us</h1>
          <div className="text-light " style={{ maxWidth: "600px", marginLeft: "auto" }}>
            <h3 className="d-flex align-items-center" style={{ fontWeight: "300", fontSize: "24px" }}>The Journey of Unikaa Beauty Salon</h3>
            <p style={{ fontSize: "16px" }}>
              Unikaa Beauty Salon is the culmination of five years of unwavering passion, extensive research, and
              dedicated development in the beauty industry. Our journey began with a vision: to create a space where
              world-class beauty services could be accessible to everyone, regardless of budget.
            </p>
          </div>

          <div className="text-light mr-auto mt-4" style={{ maxWidth: "600px", marginRight: "auto" }}>
            <h2 className="d-flex align-items-center" style={{ color: "white", fontWeight: "300", fontSize: "24px" }}>The Beginning:</h2>
            <p style={{ fontSize: "16px" }}>
              The seed of Unikaa was planted in 2019 when our founder, Mr. G Agilan, driven by a love for beauty and
              wellness, embarked on a mission to redefine beauty standards in India. Recognizing a gap in the market
              for high-quality yet affordable beauty services, he set out to research the latest trends, techniques, and
              technologies in the beauty sector.
            </p>
          </div>
        </div>


        {/*{ new content on 11/10/2024 */}

        {/* <div className=" container">
          <h2>A brief history of how Unikaa Beauty Salon came to be</h2>

          <h3 className=" d-flex"><h3 className=" d-flex align-items-center justify-content-center" style={{ fontWeight: "600" }}>Our Story:</h3>The Journey of Unikaa Beauty Salon</h3>
          <p>Unikaa Beauty Salon is the culmination of five years of unwavering passion, extensive research, and
            dedicated development in the beauty industry. Our journey began with a vision: to create a space where
            world-class beauty services could be accessible to everyone, regardless of budget.
          </p>
        </div> */}


        <br></br>
        <br></br>
        <div className=" container">
          <h2 className=" d-flex align-items-center justify-content-center " style={{ fontWeight: "600" }}>Years of Research and Development:</h2>
          {/* <br></br> */}
          {/* <br></br> */}
          <p> Over the next five years, our team immersed itself in learning and innovation. We traveled extensively,
            attending international beauty conventions, workshops, and training sessions. This allowed us to gather
            insights from industry experts and explore the best practices in beauty services around the globe.
          </p>
          <p>We conducted surveys and focus groups to understand the needs and preferences of our community.
            This invaluable feedback shaped our offerings, ensuring that every service at Unikaa is designed with our
            clients in mind. From skincare to hairstyling, we meticulously curated a menu that caters to diverse
            beauty needs while maintaining high standards of quality.
          </p>
        </div>



        {/* <div className=" container">
          <h2 className=" d-flex align-items-center " style={{ fontWeight: "600" }}> The Unikaa Experience:</h2>
          <p>At Unikaa Beauty Salon, we believe that beauty should not come with a hefty price tag. Our commitment
            to affordability does not compromise our dedication to excellence. We carefully selected premium
            products and state-of-the-art equipment to deliver exceptional results</p>
          <p>The salon’s ambiance reflects our ethos—welcoming, relaxing, and inspiring. We aim to create a space
            where clients feel pampered and rejuvenated, enhancing not just their appearance but their overall wellbeing.
          </p>
        </div> */}
        {/* 
        <div className=" container">
          <h2 className=" d-flex align-items-center " style={{ fontWeight: "600" }}>Our Passion</h2>
          <p>What truly sets Unikaa apart is our passion for beauty. We are not just a salon; we are a community of
            beauty enthusiasts who believe in empowering our clients. Our skilled team, trained in the latest
            techniques, is here to provide personalized consultations, ensuring each client leaves feeling confident
            and beautiful.</p>
          <p>Experience the fusion of innovation, passion, and affordability at Unikaa Beauty Salon, where your beauty
            dreams come to life. Come visit us and discover a new level of beauty experience that goes beyond just a
            salon visit. Let us help you unleash your inner beauty and confidence at Unikaa Beauty Salon. We are
            committed to creating a welcoming and inclusive environment where everyone feels valued and
            respected.</p>
          <p>At Unikaa Beauty Salon, we strive to exceed expectations and deliver exceptional service that leaves a
            lasting impression on our clients. Our team of skilled professionals is dedicated to providing personalized
            services that cater to your unique beauty needs. From hair styling and makeup to skincare and spa
            treatments, we offer a wide range of services to help you look and feel your best. Whether you're
            preparing for a special event or simply want to pamper yourself, Unikaa Beauty Salon is the perfect
            destination for all your beauty needs. Book your appointment today and let us help you achieve the
            beautiful transformation you've been dreaming of</p> */}
        {/* <div>
            <div>
              <div>
                <h2 className=" d-flex align-items-center ">Our Mission:</h2>
                <p>“Our mission is to make high-quality beauty services available to all, without compromising on
                  excellence.”
                </p>
              </div>

              <div>
                <h2 className=" d-flex align-items-center ">Our Team:</h2>
                <p> Introduce the team with short bios and qualifications
                  Include photos if possible
                </p>
              </div>

              <div>
                <h2 className=" d-flex align-items-center "> Our Values:</h2>
                <p>Customer satisfaction
                  Quality and affordability
                  Commitment to sustainability and cruelty-free products
                </p>
              </div>

              <div>
                <h2 className=" d-flex align-items-center ">Our Mission:</h2>
                <p>“Our mission is to make high-quality beauty services available to all, without compromising on
                  excellence.”
                </p>
              </div>
            </div>
          </div> */}
        {/* </div> */}


        <div className=" container">
          <h2 className=" d-flex align-items-center " style={{ fontWeight: "600" }}></h2>
          <p></p>
        </div>

        {/* new} */}

        {/* <div className="about-head">
          <h2>Unikaa's - Creating Experiences With Businesses</h2>
        </div> */}
        {/* <br></br> */}
        <br></br>
      </div>
      {/* <div className="container">
        <div className="row abt-imagealine">
          <div className="col-lg-4 col-md-4 col-12 ">
            <img
              src={image}
              alt="loading"
              style={{ width: "100%", height: "280px", objectFit: "cover" }}
            ></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="abtus-p" style={{ width: "100%" }}>
              <h3 className="abt-us-h1">Creating A Beautiful World</h3>
              <p>
                Mr Agilan sir was the founder and CEO of Unikaa Beauty Academy,
                and he is the enthusiastic genius behind it. He has evolved
                Unikaabeauty Academy into a premier beauty and wellness
                destination via his knowledge, innovation, and commitment to
                quality.
                <p></p>
                Under the direction of our CEO, Unikaabeauty Academy has been
                known with quality, innovation, and great customer service. He
                is constantly striving to provide new services, integrate
                cutting-edge technologies, and maintain the highest levels of
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <p className="abt-img-para-dn">
        Today, Unikaa's is India’s most prominent chain of hair and beauty
        salons. Thanks to our world-class service, courteous staff and loyal
        support from our patrons, Unikaa's now has 650+ salons across the
        sub-continent and aims to expand to 3000 salons by 2025.
      </p>

      <br></br>
      <br></br> */}
      <hr></hr>

      <div className="abt-drop">
        <p>Milestones Over The Years</p>
      </div>

      <AnimatedOnScroll animationIn="fadeInDownBig">
        <Page style={{ display: "flex", justifyContent: "center" }}>
          <div class="vl"></div>
        </Page>
      </AnimatedOnScroll>
      <div className="abt-droptext-lt-rt">
        <div className="abt-droptext-lt">
          <AnimatedOnScroll animationIn="bounceInRight">
            <h3 className="droptext-lt">Our Mission: -“Our mission is to make high-quality beauty services available to all, without compromising on excellence.”</h3>
          </AnimatedOnScroll>

          <AnimatedOnScroll animationIn="bounceInRight">
            <h3 className="droptext-lt">
              Our Passion:
              What truly sets Unikaa apart is our passion for beauty. We are not just a salon; we are a community of
              beauty enthusiasts who believe in empowering our clients</h3>
          </AnimatedOnScroll>
          {/* <AnimatedOnScroll animationIn="bounceInRight">
            <h3 className="droptext-lt">2023 - First franchisee</h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight">
            <h3 className="droptext-lt"> 2009 - 100+ Salons Across India</h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight">
            <h3 className="droptext-lt">2013 - 250+ Salons Across India</h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight">
            <h3 className="droptext-lt">2015 - 500+ Salons Across India</h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight">
            <h3 className="droptext-lt">2019 - 600+ Salons Across India</h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight">
            <h3 className="droptext-lt">2022 - 700+ Salons Across India</h3>
          </AnimatedOnScroll> */}
        </div>

        <div className="abt-droptext-rt">

          <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              Our Team-
              Introduce the team with short bios and qualifications Include photos if possible
            </h3>
          </AnimatedOnScroll>

          <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              Our Values-
              Customer satisfaction Quality and affordability Commitment to sustainability and cruelty-free products
            </h3>
          </AnimatedOnScroll>
          {/* <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              2023 - Launch Of Unikaa's Training Academy
            </h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              2011 - Signing On Actress Genelia as the Face of Unikaa's
            </h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              2014 - Signing On Actress Kareena Kapoor as the Face of Unikaa's
            </h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              2023 - Started Franchising Unikaa's Training Academy
            </h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              2023 - Launch Of Unikaa's School of makeup{" "}
            </h3>
          </AnimatedOnScroll> */}
        </div>
      </div>
      <br />
      <br />

      {/* <div className="container2">
        <div className="row abt2-imagealine">
          <div className="col-lg-4 col-md-4 col-12 ">
            <img src={image2} alt="loading" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="abtus-p2" style={{ width: "100%" }}>
              <h3 className="abt-us-h3">Milestones Over The Years</h3>
              <p className="abt-us-p3">
                The modern Indian woman has many responsibilities, from caring
                for her family to meeting deadlines at work. Every woman needs a
                place to escape. Unikaa's is that place for women. It is an
                oasis to detox, rejuvenate and relax!
                <p></p>
                With two decades of experience, Unikaa's has revolutionized the
                beauty and franchising industry with over 650+ salons spread
                across India. We are happy about the fact that Unikaa's has
                created 400 women franchise partners and trained over 10000
                staff. Thanks to our 30 lakh+ customers!
                <p></p> Because when you look good, you feel good!

              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="abt-end-para-all">
        <h4 className="abt-end-para">The Unikaa Experience:</h4>
        <p className="abt-end-para-p">
          <p>  At Unikaa Beauty Salon, we believe that beauty should not come with a hefty price tag. Our commitment
            to affordability does not compromise our dedication to excellence. We carefully selected premium
            products and state-of-the-art equipment to deliver exceptional results</p> <p>
            The salon’s ambiance reflects our ethos—welcoming, relaxing, and inspiring. We aim to create a space
            where clients feel pampered and rejuvenated, enhancing not just their appearance but their overall wellbeing.  </p>
        </p>
        <a href="/">
          {" "}
          <button className="abt-end-para-btn"> join us </button>{" "}
        </a>
      </div>

      <div className="abt-end-para-all">
        <h4 className="abt-end-para">Our Passion</h4>
        <p className="abt-end-para-p">
          <p>What truly sets Unikaa apart is our passion for beauty. We are not just a salon; we are a community of
            beauty enthusiasts who believe in empowering our clients. Our skilled team, trained in the latest
            techniques, is here to provide personalized consultations, ensuring each client leaves feeling confident
            and beautiful.</p>
          <p>Experience the fusion of innovation, passion, and affordability at Unikaa Beauty Salon, where your beauty
            dreams come to life. Come visit us and discover a new level of beauty experience that goes beyond just a
            salon visit. Let us help you unleash your inner beauty and confidence at Unikaa Beauty Salon. We are
            committed to creating a welcoming and inclusive environment where everyone feels valued and
            respected.</p>
          <p>At Unikaa Beauty Salon, we strive to exceed expectations and deliver exceptional service that leaves a
            lasting impression on our clients. Our team of skilled professionals is dedicated to providing personalized
            services that cater to your unique beauty needs. From hair styling and makeup to skincare and spa
            treatments, we offer a wide range of services to help you look and feel your best. Whether you're
            preparing for a special event or simply want to pamper yourself, Unikaa Beauty Salon is the perfect
            destination for all your beauty needs. Book your appointment today and let us help you achieve the
            beautiful transformation you've been dreaming of</p>
        </p>
        <a href="/">
          {" "}
          <button className="abt-end-para-btn"> join us </button>{" "}
        </a>
      </div>

      <br />
    </>
  );
};

export default aboutus;
