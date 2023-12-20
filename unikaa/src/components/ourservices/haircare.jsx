import React from "react";
import hairimg from "../ourservices/haircare/essential-styling.png";
import "./haircare.css";

const HairCare = () => {
  return (

    <div className="hair">
      
      <div className="hairhead-img">
        <h1>Hair Care</h1>
      </div>
      <div className="haircare">
        <div className="hair-div">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Hair styling</h1>
          <p>
            Find your balance with the help of our basic to advanced haircuts.
            Whether your hair falls above or below your shoulders or whether
            you'd like a fringe cut or style change, our professional stylists
            are at hand to give you that head over heels effect.
          </p>
        </div>
        <div className="hair-div ">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Fantasy Styling</h1>
          <p>
            From hot rollers to tongs and flatirons, our qualified professionals
            wield the tools of their trade like a magic wand. Experience your
            dream by blossoming under the crimping, ironing, curling and blow
            drying skills of our proficient in-house staff.
            <ul>
              <li>Crimping</li>
            </ul>
            <ul class="mb-0">
              <li >ironing</li>
            </ul>
            <ul class="mb-0">
              <li>Tongs</li>
            </ul>
          </p>
        </div>
        <div className="hair-div">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Advanced Styling</h1>
          <p>
            Our advanced styling options include styling your hair into
            magnificent updos and putting in glorious extensions to complement
            your own lovely locks. These services are all about crowning
            yourself with glory, so indulge to the fullest.
            <ul>
              <li>Hair Up Do</li>
            </ul>
          </p>
        </div>
        <div className="hair-div">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Wash ‘n Blow dry</h1>
          <p>
            Find your balance with the help of our basic to advanced haircuts.
            Whether your hair falls above or below your shoulders or whether
            you'd like a fringe cut or style change, our professional stylists
            are at hand to give you that head over heels effect.
          </p>
        </div>
        <div className="hair-div">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Coloring</h1>
          <p>
            Go bold and beautiful by taking advantage of our hair coloring
            services. You have a choice of everything from root and box root
            touch ups to global color, highlights, fashion streaks, henna and
            block coloring. Vote vibrant and usher some color into your life.
            <ul>
              <li>Highlights Full</li>
            </ul>
            <ul>
              <li>Fashion Streaks</li>
            </ul>
          </p>
        </div>
        <div className="hair-div">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Transformers</h1>
          <p>
            The long and short of our technical processes is that we are very
            flexible. Classic perming and spiral perming along with re-bonding,
            smoothening and straightening are at your disposal. Our capable
            stylists follow the hottest trends and use most reliable techniques
            to make spending time on yourself valuable
            <ul>
              <li>Perming – Classic</li>
            </ul>
            <ul>
              <li>Perming – Spiral</li>
            </ul>
            <ul>
              <li>Straightening</li>
            </ul>
            <ul>
              <li>Relaxing</li>
            </ul>
          </p>
        </div>

        <div className="hair-div">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Hair Spa</h1>
          <p>
            Get the bounce back in your step and in your hair when you treat
            yourself to one of our deluxe hair spa therapies. Each one is named
            for the results promised. Whether you want your hair smoothed,
            revitalized, nourished or repaired there’s a treatment to suit you;
            just name it.
            <ul>
              <li>Repairing Hair Spa</li>
            </ul>
            <ul>
              <li>Smoothening Hair Spa</li>
            </ul>
            <ul>
              <li>Vitalizing Treatment</li>
            </ul>
            <ul>
              <li>Nourishing Hair Spa</li>
            </ul>
          </p>
        </div>

        <div className="hair-div">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Waxing</h1>
          <p>
            Hair removal is another component of the beauty services we provide.
            These rich waxing treatments target everything from the upper lip,
            chin, jaw line, arms and legs to the more intimate areas such as the
            bikini line, stomach, midriff and back. With a pick of regular or
            chocolate waxes your skin will feel as exquisite as you feel.
          </p>
        </div>
        <div className="hair-div">
          <img src={hairimg} className="hair-img" alt="logo" />
          <h1>Threading</h1>
          <p>
            Tackling those stray facial hairs is a breeze for our staff who are
            well-trained in the art of threading. Hair around the eyebrows,
            upper lip, forehead, chin and jaw line will be easily done away with
            so you appear clean and fresh faced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HairCare;
