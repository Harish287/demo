import React from "react";
import "./franchise.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import imagefra1 from "./Assets/IdealOwner.jpg";
import imagefra2 from "./Assets/hair9.jpg";
import imagefra3 from "./Assets/hair _cut2.jpg";
import imagefra4 from "./Assets/hair_cut 11.jpg";
import imagefra5 from "./Assets/keratin.webp";
import i1 from "./Assets/1.webp";
import i2 from "./Assets/2.webp";
import i3 from "./Assets/3.webp";
import i4 from "./Assets/4.webp";
import i5 from "./Assets/5.webp";
import i6 from "./Assets/6.webp";

import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Page = (props) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="page">
      {children}
    </div>
  );
};

const franchise = () => {
  return (
    <>
      {/********************************************scrollanimation*******************************************/}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>

      <div className="france">
        <div className="overflow-auto">
          <p className="francep">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <Page children="join The Naturals From Today!" />
            </AnimatedOnScroll>{" "}
          </p>
        </div>

        <div className="franchise1p">
          <AnimatedOnScroll animationIn="bounceInLeft">
            {/* <Page children="bounceInLeft" /> */}
            <p>Be A Part Of India's Largest Saloon Chain An Exciting </p>
          </AnimatedOnScroll>
        </div>
        <div className="franchise2p">
          <AnimatedOnScroll animationIn="bounceInLeft">
            {/* <Page children="bounceInLeft" /> */}
            <p>Enterpreneurship Opprtunity Of You</p>
          </AnimatedOnScroll>
        </div>
      </div>

      <div className="franchise2h">
        <h3>
          Over 400 Women Entrepreneurs Have Found Their Calling. Are You Next?
        </h3>
        <p>
          Become A Successful Entrepreneur With India’s Largest Family Salon
          Chain
        </p>
      </div>

      <Card
        className="frenchisecard"
        // style={{
        //   width: "80rem",
        //   display: "flex",
        //   justifyContent: "center",
        //   marginLeft: "120px",
        //   alignItems: "center",
        //   backgroundColor: "pink",
        // }}
      >
        <Card.Title
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontFamily: "Butler",
            marginTop: "70px",
          }}
        >
          Hear From Our Franchisee Owners
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "center",
            // padding: "0 126px",
            fontSize: "17px",
            fontFamily: "Inner-sans-serif",
            marginTop: "20px",
          }}
        >
          The success of any franchise is determined by the success of its
          franchise partners. Naturals is fortunate to have many such success
          stories to tell. Hear from our partners how Naturals have empowered
          them and have opened new growth vistas.
        </Card.Text>
        {/* <Card.Img variant="top" src="../Assets/abc.jpg" /> */}

        <Card.Body
          style={{
            textAlign: "center",
            padding: "0 126px",
            fontSize: "17px",
            fontFamily: "Inner-sans-serif",
            marginTop: "20px",
            display: "flex",
            position: "relative",
          }}
        >
          {/* <Card.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagefra1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body> */}

          <Card.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagefra2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>

          <Card.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagefra3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>

          <Card.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagefra4} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>

          <Card.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagefra5} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>

          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </Card.Body>
      </Card>

      <div className="francise3h">
        <h1>The Naturals Nationwide Wave</h1>
      </div>

      <br></br>

      {/**********************************************card2***********************************************/}

      <Card className="frenchisecard2">
        <Card.Title
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontFamily: "Butler",
            marginTop: "70px",
          }}
        >
          <p className="francesuppo"> Franchise Support & Benefits</p>
        </Card.Title>

        <Card.Body
          style={{
            textAlign: "center",
            padding: "0 126px",
            fontSize: "17px",
            fontFamily: "Inner-sans-serif",
            marginTop: "20px",
            display: "flex",
            position: "relative",
          }}
        >
          <Card.Body>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <Card.Img
                style={{
                  width: "137px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "70px",
                }}
                variant="top"
                src={i1}
              />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  Franchise Cost
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  It will cost approximately 15 to 30 lakhs depending on the
                  size of the project
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>

          <Card.Body>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <Card.Img
                style={{
                  width: "137px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "70px",
                }}
                variant="top"
                src={i2}
              />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  Financial Support
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Business loan of up to INR 30 Lakhs from State Bank of India.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>

          <Card.Body>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <Card.Img
                style={{
                  width: "137px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "70px",
                }}
                variant="top"
                src={i3}
              />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  Special Training Offered
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Special training is offered to recruits from our industry
                  experts who are well-versed in L’Oréal, Wella product lines
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card.Body>

        <div className="francesuppo-colm2">
          <Card.Body>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <Card.Img
                style={{
                  width: "137px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "70px",
                }}
                variant="top"
                src={i4}
              />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  Proven Return On Investment
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Starting a franchise with Naturals presents an opportunity to
                  increase your investment in a systematic and steady manner.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>

          <Card.Body>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <Card.Img
                style={{
                  width: "137px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "70px",
                }}
                variant="top"
                src={i5}
              />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Brand Value</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Naturals Salon has grown from 1 salon to 650 salons by
                  building its brand over the past 16 years. Now we are inviting
                  you to be part of this success story.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>



          <Card.Body>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <Card.Img
                style={{
                  width: "137px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "70px",
                }}
                variant="top"
                src={i6}
              />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  Marketing Support
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Naturals provide PR Assistance, Marketing, Business
                  Generation, IT & PoS Billing and continuous operations
                  support.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </div>
      </Card>
      <br></br>
    </>
  );
};

export default franchise;
