import React from "react";
import hairimg from "../ourservices/SkinCare/de-tanning-icon.png";
import cleanupsicon from "../ourservices/SkinCare/clean-ups-icon.png";
import essential from "../ourservices/SkinCare/essential-facials-icon.png";
import facemasks from "../ourservices/SkinCare/face-masks-icon.png";
import peeloff from "../ourservices/SkinCare/peel-off-marks-icon.png";
import premiumfacials from "../ourservices/SkinCare/premium-facials-icon.png";
import signaturefacials from "../ourservices/SkinCare/signature-facials-icon.png";

import "./skin-care.css"

import ScrollTop from "./scrolltop";


const skincare = () => {
  return (
    <div className="skin">
      <div className="skinhead-img">
        <h1>Skin Care</h1>
      </div>
      <div className="skincare">
        <div className="skin-div">
          <img src={hairimg} className="skin-img" alt="logo" />
          <h1>De-tanning treatments</h1>
          <p>
            Our de-tanning treatments go beyond mere primping. With our bouquet
            of top to toe treatments we can actually help undo harmful sun
            damage. From your upper lip, face and neck, across your midriff and
            back, down to your legs, our therapies can help target and restore
            dewy freshness to the complexion across your entire body so you’re
            always comfortable in your own skin.
          </p>
        </div>
        <div className="skin-div">
          <img src={cleanupsicon} className="skin-img" alt="logo" />
          <h1>Clean Ups</h1>
          <p>
            We believe that the compliments aren’t worth it if the treatment
            doesn’t complement you. We want to help you know yourself and your
            skin type. Precisely why we’ve crafted our premium, half hour
            cleanups around various kinds of skin. Indulge in a Blueberry De-tox
            that is perfect for dry skin or choose Calm and Soothe if your skin
            is particularly sensitive. The Fresh Fruit Clean Up will gently
            brighten up the visage while the Oxizenate is extremely calming and
            suitable for all types of skin. Anti-Oxidant therapy can rejuvenate
            tired skin while Vitamin C cleanup will soothe the tans.
          </p>
        </div>
        <div className="skin-div">
          <img src={facemasks} className="skin-img" alt="logo" />
          <h1>Face Masks</h1>
          <p>
            We have tailored a number of twenty minute treatments to suit a
            range of skin types, so no matter what, you’ll find a good fit. Oily
            skin can benefit from the Kavas Mud mask, mature skin would profit
            from the U Las treatment and the Whitening mask is a good choice for
            any skin type. Our face masks are procedures of nurturing love and
            meditative ‘me-time’ so you emerge feeling and looking your best.
            Spend some time on your reflections. We hope you’ll find it a
            completely worthwhile investment.
          </p>
        </div>
        <div className="skin-div">
          <img src={peeloff} className="skin-img" alt="logo" />
          <h1>Peel off masks</h1>
          <p>
            Our peel off masks are simple processes with amazing results from
            which your skin will arise, visibly renewed. From the Energy mask
            suitable for all types of skin to the Four Miracle for pigmented
            skin, the Miracle Cool for oily and acne prone skin, the Rose cool
            for sensitive skin and the Four wonder for mature skin – there are a
            choices for every skin type. Accept your skin and pamper it with our
            professionally administered, knowledge intensive treatments to
            emerge lovely inside and out.
          </p>
        </div>
        <div className="skin-div">
          <img src={essential} className="skin-img" alt="logo" />
          <h1>Essential Facials</h1>
          <p>
            The forty five minute long Essential Facials are aptly named: the
            Fresh Fruit Facial is a burst of restorative vitality, the Hydra Dew
            will invigorate dehydrated dry skin, the Acne Care facial will treat
            pimple prone skin while the Rebalancing treatment is fit for oily
            and combination skin types. If you’re in a quandary the Rejuvenating
            facial suits all kinds of skin while the Oxy Herbal is a natural
            solution that will let the skin breathe.
          </p>
        </div>
        <div className="skin-div">
          <img src={premiumfacials} className="skin-img" alt="logo" />
          <h1>Premium Facials</h1>
          <p>
            Exceptional ingredients and unmatched care are abundant in our
            seventy five minute Premium Facials. Whether it’s a Deep Pore
            cleanse for oily complexion, a Clarifying Acne facial to treat
            pimples, a Whitening facial to improve dull and uneven skin tone, a
            Hydra Fresh facial to rejuvenate dry skin or the sumptuous Herbal
            Gold process, we have plenty of options for everyone. Be yourself
            with us and we guarantee high returns.
          </p>
        </div>
        <div className="skin-div">
          <img src={signaturefacials} className="skin-img" alt="logo" />
          <h1>Signature Facials</h1>
          <p>
            Sign off from a hard day with one of our luxurious, hour and a half
            long Signature Facials. Revive mature skin with the Uplifting Facial
            or soothe pigmented skin with an Ultra Bright Facial. The Herbal
            Platinum Facial is a premium treatment that uses natural ingredients
            to help reveal your inner glow. Come rediscover yourself.
          </p>
        </div>
      </div>
      <ScrollTop/>
    </div>
  );
};

export default skincare;
