import React from "react";
// import "../routes/offers.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../Assets/hair _cut 14.jpg";
import image2 from "../Assets/hair9.jpg";
import image3 from "../Assets/hc-2.webp";
import image4 from "../Assets/hair_cut1.jpg";
import image5 from "../Assets/images 3.avif";
import image6 from "../Assets/images 2.jpg";
import "./offers.css";



function DarkVariantExample() {

  return (
    <Carousel fade data-bs-theme="dark ">
      <Carousel.Item interval={1500}>
      <img
          // width={1600}
          // height={300}
          src={image1}
          class="img-fluid object-fit-cover  "
          alt="..."
        />
        <Carousel.Caption>
          
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          // width={1600}
          // height={300}
          src={image2}
          class="img-fluid object-fit-cover  "
          alt="..."
        />
        <Carousel.Caption>
     
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          // width={1600}
          // height={300}
          src={image3}
          class="img-fluid object-fit-cover"
          alt="..."
        />
        <Carousel.Caption>
          
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          // width={1600}
          // height={300}
          src={image4}
          class="img-fluid object-fit-cover   "
          alt="..."
        />
        <Carousel.Caption>
          
          {/* <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          // width={1600}
          // height={300}
          src={image5}
          class="img-fluid object-fit-cover   "
          alt="..."
        />
        <Carousel.Caption>
          
          {/* <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          // width={1600}
          // height={300}
          src={image6}
          class="img-fluid object-fit-cover   "
          alt="..."
        />
        <Carousel.Caption>
          
          {/* <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
