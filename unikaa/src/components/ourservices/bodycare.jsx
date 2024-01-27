import React from "react";
import bodyimg from "./bodycare/nail-spa-icon.png";
import Pedicure from "./bodycare/foot-spa-icon.png";
import BodyPolishing from "./bodycare/body-polishing-icon.png";
import quickmassage from "./bodycare/quick-massage-icon.png";
import headmassage from "./bodycare/head-massage-icon .png";
import bodymassage from "./bodycare/body-massage-icon.png";
// import bodyimg from "./bodycare/nail-spa-icon.png";



import "./bodycares.css";

const BodyCare = () => {
  return (
    <div className="body">
      <div className="bodyheads-img">
        <h1>body Care</h1>
      </div>
      <div className="bodycare">
        <div className="bodycares-div">
          <img src={bodyimg} className="body-img" alt="logo" />
          <h1>Manicure</h1>
          <p>
            The Spa Manicure is an all herbal manicure that helps you de-stress
            by releasing the tension from your nerves using organic products.
            The Radiant Manicure is an excellent way to whiten dull or tanned
            skin. Get rid of unevenly tanned skin with this special manicure.
            The Intense Moisturizing Manicure is recommended for dry hands. Soak
            your hands in a special moisturising mixture for soft, beautiful
            hands.
          </p>
        </div>
        <div className="bodycares-div">
          <img src={Pedicure} className="body-img" alt="logo" />
          <h1>Pedicure</h1>
          <p>
            A pedicure is the best stress relief for the body. It releases the
            tension from your feet, relieving and detoxing the entire body. we
            specialise in 3 types of pedicure – Radiant Pedicure, Intense
            Moisturizing Pedicure and Spa Pedicure. The Radiant Pedicure is best
            suited for tanned feet. It lightens tans and blemishes, making your
            feet beautiful. The Intense Moisturizing Pedicure is recommended for
            dry feet. Soak your feet in a specially designed moisturising
            mixture and watch the dryness disappear! The Spa Pedicure is an
            all-natural pedicure that uses organic products, which help soothe
            your nerves that leaves you feeling completely relaxed.
          </p>
        </div>
        <div className="bodycares-div">
          <img src={BodyPolishing} className="body-img" alt="logo" />
          <h1>Body Polishing</h1>
          <p>
            Lavish your skin with one of our indulgent body polishes to come
            with smooth and radiant skin. Whether it’s your neck, elbows, knees,
            under arms, back, legs or a full body treatment combined with a
            de-tanning pack, our obliging staff is on hand to help you achieve
            that glow.
          </p>
        </div>
        <div className="bodycares-div">
          <img src={bodymassage} className="body-img" alt="logo" />
          <h1>Body Massage</h1>
          <p>
            Alleviate the tension in your system with a pick of one of our
            therapeutic full body massages. Whether it’s Deep Tissue or Swedish,
            a beneficial Balinese, an Aroma Relax, a De-stress or a Signature
            Studio11 massage; these therapies will improve circulation,
            rebalance your energies and help you reconnect with your inner self
          </p>
        </div>
        <div className="bodycares-div">
          <img src={quickmassage} className="body-img" alt="logo" />
          <h1>Quick Massage</h1>
          <p>
            A series of short massages to bring quick relief to aching body
            parts are on the cards at UNIKAA. There is the calming head, neck
            and shoulder combination, that old faithful back massage, a
            treatment for stressed legs, a palm massage as well as hand and foot
            reflexology to swiftly energize you and provide you with quick
            relief. Rediscover beauty from the inside out.
          </p>
        </div>
        <div className="bodycares-div">
          <img src={headmassage} className="body-img" alt="logo" />
          <h1>Head Massage</h1>
          <p>
            Feel the aches and anxiety fall gently away with our deeply relaxing
            head massages. You have your choice of a dry head massage or you may
            select from a coconut oil, mint oil, aroma oil or traditional Indian
            champi massage with herbal oil. Just put your head in our hands.
          </p>
        </div>

        <div className="bodycares-div">
          <img src={bodymassage} className="body-img" alt="logo" />
          <h1>body Spa</h1>
          <p>
            Get the bounce back in your step and in your body when you treat
            yourself to one of our deluxe body spa therapies. Each one is named
            for the results promised. Whether you want your body smoothed,
            revitalized, nourished or repaired there’s a treatment to suit you;
            just name it.
            <ul>
              <li>Repairing body Spa</li>
            </ul>
            <ul>
              <li>Smoothening body Spa</li>
            </ul>
            <ul>
              <li>Vitalizing Treatment</li>
            </ul>
            <ul>
              <li>Nourishing body Spa</li>
            </ul>
          </p>
        </div>
        {/* 
        <div className="bodycare-div">
          <img src={bodyimg} className="body-img" alt="logo" />
          <h1>Waxing</h1>
          <p>
            body removal is another component of the beauty services we provide.
            These rich waxing treatments target everything from the upper lip,
            chin, jaw line, arms and legs to the more intimate areas such as the
            bikini line, stomach, midriff and back. With a pick of regular or
            chocolate waxes your skin will feel as exquisite as you feel.
          </p>
        </div>
        <div className="bodycare-div">
          <img src={bodyimg} className="body-img" alt="logo" />
          <h1>Threading</h1>
          <p>
            Tackling those stray facial bodys is a breeze for our staff who are
            well-trained in the art of threading. body around the eyebrows,
            upper lip, forehead, chin and jaw line will be easily done away with
            so you appear clean and fresh faced.
          </p>
        </div> */}
      </div>

    </div>
  );
};

export default BodyCare;
