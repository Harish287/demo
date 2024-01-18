import React, { useState } from "react";

import Consulting from "./consulting.jpg";
import Prebridal from "./Pre-Bridal.jpg";
import Teach from "./teach.jpg";
import Actual from "./acutal.jpg";

import Image1 from "./bridal-jewellery-1.jpg";
import Image2 from "./classy-HD-makeup-look.webp";
import Image3 from "./57f1bf97aaca1a3e5b3720cb2e042d7d.jpg";

import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";

function Slideonimg() {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);
  const firstHandler = () => {
    setfirst(true);
    setsecond(false);
    setthird(false);
    setfourth(false);
  };

  const secondHandler = () => {
    setfirst(false);
    setsecond(true);
    setthird(false);
    setfourth(false);
  };

  const thirdHandler = () => {
    setfirst(false);
    setsecond(false);
    setthird(true);
    setfourth(false);
  };

  const fourthHandler = () => {
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfourth(true);
  };

  return (
    <>
      <div className="slide-all-pic">
        <div className="big-img">
    
            {/*************************************************firstslide********************************************/}
            {first && <h1 className="name-of-the-artist">PREETHI MENON</h1>}
            {first && (
              <h4 className="exprience-of-year">years of experience:5</h4>
            )}
            {first && (
              <p>
                A Beauty Aficionado with over 5+ years of expertise, trained by
                Meenakshi Dutt, Bharat & Dorris and SMA International among the
                likes. A Unisex Look Expert for the much sought after “Nude/No
                Make Up Look”! Formerly associated as a
                makeup-artist/content-creator with most trends under her sleeve,
                at MAC Cosmetics. And has a long standing assignment with the
                Current Captain and Indian Footballer Sunil Chettri among the
                many other celebrities, oh the list is long!
              </p>
            )}
            {first && <img src={Consulting} alt="" />}
        
          {first && (
            <button className="right-btn-slide" onClick={fourthHandler}>
              <FaCaretSquareLeft />
            </button>
          )}
          {first && (
            <button className="left-btn-slide" onClick={secondHandler}>
              <FaCaretSquareRight />
            </button>
          )}

          {/*************************************************secondslide********************************************/}

          {second && <h1 className="name-of-the-artist">Vimala</h1>}
          {second && (
            <h4 className="exprience-of-year">years of experience:9</h4>
          )}
          {second && (
            <p>
              Our In-House Beauty Connoisseur with 28 years of hands- down
              experience in creating over 5000+ of the most beautiful brides in
              and outside the country. Trained by wizards of the Industry namely
              Domini Cruz, Ann Beck, Asha Hariharan among the few. Holds a long
              standing association with the top brands in the business like
              L'Oreal, Wella etc. and with top celebrities, Simran, Illayaraja,
              Ramya Krishnan, Actress Kanmani and the likes. You name it - photo
              shoots, our local mahurathams, fashion shows or international
              events, she has been there and done that!
            </p>
          )}
          {second && (
            <img src={Consulting} alt="" className="second-slide-img" />
          )}

          {second && (
            <button className="right-btn-slide" onClick={firstHandler}>
              <FaCaretSquareLeft />
            </button>
          )}
          {second && (
            <button className="left-btn-slide" onClick={thirdHandler}>
              <FaCaretSquareRight />
            </button>
          )}

          {/*************************************************thirdslide********************************************/}

          {third && <h1 className="name-of-the-artist">kamala</h1>}
          {third && (
            <h4 className="exprience-of-year">years of experience:9</h4>
          )}
          {third && (
            <p>
              Our In-House Beauty Connoisseur with 28 years of hands- down
              experience in creating over 5000+ of the most beautiful brides in
              and outside the country. Trained by wizards of the Industry namely
              Domini Cruz, Ann Beck, Asha Hariharan among the few. Holds a long
              standing association with the top brands in the business like
              L'Oreal, Wella etc. and with top celebrities, Simran, Illayaraja,
              Ramya Krishnan, Actress Kanmani and the likes. You name it - photo
              shoots, our local mahurathams, fashion shows or international
              events, she has been there and done that!
            </p>
          )}
          {third && (
            <img src={Consulting} alt="" className="second-slide-img" />
          )}

          {third && (
            <button className="right-btn-slide" onClick={secondHandler}>
              <FaCaretSquareLeft />
            </button>
          )}
          {third && (
            <button className="left-btn-slide" onClick={fourthHandler}>
              <FaCaretSquareRight />
            </button>
          )}

          {/*************************************************fourthslide********************************************/}

          {fourth && <h1 className="name-of-the-artist">amala</h1>}
          {fourth && (
            <h4 className="exprience-of-year">years of experience:9</h4>
          )}
          {fourth && (
            <p>
              Our In-House Beauty Connoisseur with 28 years of hands- down
              experience in creating over 5000+ of the most beautiful brides in
              and outside the country. Trained by wizards of the Industry namely
              Domini Cruz, Ann Beck, Asha Hariharan among the few. Holds a long
              standing association with the top brands in the business like
              L'Oreal, Wella etc. and with top celebrities, Simran, Illayaraja,
              Ramya Krishnan, Actress Kanmani and the likes. You name it - photo
              shoots, our local mahurathams, fashion shows or international
              events, she has been there and done that!
            </p>
          )}
          {fourth && (
            <img src={Consulting} alt="" className="second-slide-img" />
          )}

          {fourth && (
            <button className="right-btn-slide" onClick={thirdHandler}>
              <FaCaretSquareLeft />
            </button>
          )}
          {fourth && (
            <button className="left-btn-slide" onClick={firstHandler}>
              <FaCaretSquareRight />
            </button>
          )}


        </div>

        <div className="consultent-slideone">
          {/*************************************************firstslide********************************************/}

          {first && (
            <div className="consults">
              <img src={Consulting} className="consultings-img" alt="" />
            </div>
          )}

          {first && (
            <div className="consults">
              <img src={Consulting} className="consultings-img" alt="" />
            </div>
          )}

          {first && (
            <div className="consults">
              <img src={Prebridal} className="consultings-img" alt="" />
            </div>
          )}
          {first && (
            <div className="consults">
              <img src={Teach} className="consultings-img" alt="" />
            </div>
          )}
          {first && (
            <div className="consults">
              <img src={Actual} className="consultings-img" alt="" />
            </div>
          )}

          {/*************************************************secondslide********************************************/}

          {second && (
            <div className="consults1">
              <img src={Image1} className="consultings-img1" alt="" />
            </div>
          )}

          {second && (
            <div className="consults1">
              <img src={Image2} className="consultings-img1" alt="" />
            </div>
          )}

          {second && (
            <div className="consults1">
              <img src={Image3} className="consultings-img1" alt="" />
            </div>
          )}

          {second && (
            <div className="consults1">
              <img src={Teach} className="consultings-img1" alt="" />
            </div>
          )}

          {second && (
            <div className="consults1">
              <img src={Actual} className="consultings-img1" alt="" />
            </div>
          )}

          {/*************************************************thirdslide********************************************/}

          {third && (
            <div className="consults2">
              <img src={Consulting} className="consultings-img2" alt="" />
            </div>
          )}

          {third && (
            <div className="consults2">
              <img src={Consulting} className="consultings-img2" alt="" />
            </div>
          )}

          {third && (
            <div className="consults2">
              <img src={Prebridal} className="consultings-img2" alt="" />
            </div>
          )}
          {third && (
            <div className="consults2">
              <img src={Teach} className="consultings-img2" alt="" />
            </div>
          )}
          {third && (
            <div className="consults2">
              <img src={Actual} className="consultings-img2" alt="" />
            </div>
          )}

          {/*************************************************thirdslide********************************************/}

          {fourth && (
            <div className="consults3">
              <img src={Consulting} className="consultings-img3" alt="" />
            </div>
          )}

          {fourth && (
            <div className="consults3">
              <img src={Consulting} className="consultings-img3" alt="" />
            </div>
          )}

          {fourth && (
            <div className="consults3">
              <img src={Prebridal} className="consultings-img3" alt="" />
            </div>
          )}
          {fourth && (
            <div className="consults3">
              <img src={Teach} className="consultings-img3" alt="" />
            </div>
          )}
          {fourth && (
            <div className="consults3">
              <img src={Actual} className="consultings-img3" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Slideonimg;
