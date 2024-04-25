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
          <h1>About Us</h1>
        </div>
        <div className="about-head">
          <h2>Unikaa's - Creating Experiences With Businesses</h2>
        </div>
        <div></div>
        <br></br>
        <br></br>
      </div>
      <div className="container">
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
      <br></br>
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
            <h3 className="droptext-lt">2006 - First franchisee</h3>
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
          </AnimatedOnScroll>
        </div>

        <div className="abt-droptext-rt">
          <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              2008 - Launch Of Unikaa's Training Academy
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
              2017 - Started Franchising Unikaa's Training Academy
            </h3>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft">
            <h3 className="droptext-rt">
              2021 - Launch Of Unikaa's School of makeup{" "}
            </h3>
          </AnimatedOnScroll>
        </div>
      </div>
      <br />
      <br />

      <div className="container2">
        <div className="row abt2-imagealine">
          <div className="col-lg-4 col-md-4 col-12 ">
            <img src={image2} alt="loading" style={{ width: "100%" }}></img>
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
      </div>

      <div className="abt-end-para-all">
        <h4 className="abt-end-para">To Helping Women Be Boundless</h4>
        <p className="abt-end-para-p">
          It is impossible to revolutionize the beauty industry without
          beginning at home. Unikaa's female entrepreneurship programs have
          given many aspiring businesswomen a head start. Our strategy offers
          each franchisee the assistance they need to launch a firm without any
          difficulties.In other words, At Unikaa's, we support women's financial
          independence and, over the previous 22 years, we have enabled 400
          women to launch their own businesses. Our goal is to establish a
          society in India devoid of housewives, where women are inspired to
          follow their passions as a means of employment. Because there is no
          better way to make a style statement than to stand on your own two
          feet, Unikaa's wants to empower 2000 women entrepreneurs, open 3000
          salons, and create one million employment by the year 2025. Come be a
          part of the Unikaa's family!
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
