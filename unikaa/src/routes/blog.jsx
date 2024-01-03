import React from "react";
import "../belog.css";
import image from "../Assets/about-us.webp";
import image1 from "../Assets/parlour.jpg";
import image2 from "../Assets/Bridal-Makeup-Artist-for-Your-Special-Day.webp";
import image3 from "../Assets/Blogp-1.webp";
import image4 from "../Assets/Beauty-Whisperers-2-1.webp";
import image5 from "../Assets/Starting-Your-Own-Salon-5-1536x1180.jpg";
import image6 from "../Assets/Top-7-Hair-Grooming-Tips-For-Men-1536x1180.jpg";
import image7 from "../Assets/Celebrity-Bridal-Looks-1536x1180.jpg";
import image8 from "../Assets/Blog-Feature-Image-01-1536x1180.webp";
import image9 from "../Assets/Blog-Feature-Images-01_11zon-1-1536x1180.jpg";
import image10 from "../Assets/Blog-Feature-Images-02_11zon-1536x1180.jpg";
import image11 from "../Assets/Skin-types.webp";
import image12 from "../Assets/Leaders-in-heels-1.webp";
import image13 from "../Assets/Blog-Feature-Images-07_11zon-1536x1180.jpg";
import image14 from "../Assets/Blog-Feature-Images-08_11zon-1536x1180.jpg";
import image15 from "../Assets/Blog-Feature-Images-09_11zon-1536x1180.jpg";
import image16 from "../Assets/Blog-Feature-Images-10_11zon-1536x1180.jpg";
import image17 from "../Assets/Blog-Feature-Images-11_11zon-1536x1180.jpg";
import image18 from "../Assets/Blog-Feature-Images-12_11zon-1536x1180.jpg";

function blog() {
  return (
    <>
      <div></div>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="bg">
              <img
                src={image}
                alt="pic"
                style={{
                  width: "100%",
                  height: 300,
                  position: "relative",
                  zIndex: "-1",
                }}
              ></img>
            </div>
            <div
              className="content"
              style={{
                position: "absolute",
                zIndex: "1",
                marginTop: -180,
                marginLeft: 420,
                fontFamily: "serif",
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "900",
                color: "white",
              }}
            >
              <p>"Beauty Whisperers - Blogs"</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row imagealine">
          <div className="col-lg-4 col-md-4 col-12 ">
            <img
              src={image1}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">Tips to find best haircare salon in chennai</a>
              <p>
                With a plethora of options around us at any given moment, it can
                be a bit tedious to choos...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image2}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                How To Choose The Right Bridal Makeup Artist For Your Special
                Day?
              </a>
              <p>
                Most girls have a dream bridal look in mind. It’s an exciting
                experience, working t...
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="container">
        <div className="row imagealine">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image3}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Beyond Sunscreen: Additional Tips For Protecting Your Hair From
                The Sun?
              </a>{" "}
              <p>
                Dear Whisperers, I hope you are well. As I comeback every week
                with something to learn, to...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image4}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">The Monsoon Mane</a>
              <p>
                A wise man once said, “secrets are best be heard”; But I say
                “secrets are best when ...
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row imagealine">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image5}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Starting Your Own Salon? Here’s Everything You Need To Know
              </a>
              <p>
                There is something intrinsically special about the beauty
                business that attracts more inde...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image6}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Your Crowning Glory – Top 7 Hair Grooming Tips For Men{" "}
              </a>
              <p>
                Personal grooming is essential to enhance one’s overall
                appearance; particularly for men...
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row imagealine">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image7}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Recreate Your Favourite Celebrity Bridal Looks With Unikaa's
              </a>
              <p>
                With the wedding season right around the corner, decisions to
                make with one’s weddin...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image8}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                It’s Raining Myths! Busting 7 Lifestyle Myths About Monsoons
              </a>
              <p>
                Where people and cultures converge, myths and folklore are a
                natural extension of life and...
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row  imagealine">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image9}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">5 Grooming Essentials For The Workplace</a>
              <p>
                Personal grooming is key to enhancing our overall appearance. It
                boosts our self-assurance...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image10}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Easy Personal Grooming Tips That All Women Need To Know
              </a>
              <p>
                Everyone appreciates someone who takes care of themselves. One
                must maintain their appeara...
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <div className="container">
        <div className="row imagealine">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image11}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Here’s How to Create a Skincare Routine for All Skin Types!
              </a>
              <p>
                ‘All skin types’, we said. So, just how many are there? As many
                individuals, it wouldn...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image12}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Leaders in Heels: Inspiring Women Entrepreneurs from around the
                World
              </a>
              <p>
                Leaders in Heels: Inspiring Women Entrepreneurs from around the
                World
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row imagealine">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image13}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Redefining Training Techniques In Beauty and Wellness
              </a>
              <p>
                2020 was a watershed moment in every sector, including beauty.
                As customers had fewer soci...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image14}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                Stepping Out to Step Up – Women Entrepreneurship In India On The
                Rise
              </a>
              <p>
                We are far past what dictated the concept that women could not
                be successful founders, co-...
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row imagealine">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image15}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">Skin Care At Home – What You May Be Missing</a>
              <p>
                Have you ever counted how many cosmetic items you use on a
                daily? The list of products inc...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image16}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">Summer Hair Cuts That Go With Every Look</a>
              <p>
                Summer is already taking on, and now is the time for you to
                experiment with new hairstyles...
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">
        <div className="row imagealine">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image17}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">S A Consumer’s Guide to Buying a Franchise </a>
              <p>
                6 Things You Must Do Before Buying a Franchise A franchise is a
                proven, market-tested busi...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img
              src={image18}
              alt="loading"
              style={{ width: "90%", height: "80%" }}
            ></img>
            <div className="bloglink">
              <a href="/blogs">
                How Unikaa's Rejuvenated to the Next-Level through Franchising?{" "}
              </a>
              <p>
                A case study on Unikaa's Franchising Model Among the many beauty
                salons in India that are ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">footer</div>
        </div>
      </div> */}
    </>
  );
}
export default blog;
