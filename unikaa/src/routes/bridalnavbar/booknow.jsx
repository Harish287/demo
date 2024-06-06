import React, { useState } from "react";
import Validation from "./booking";
import axios from "axios";
// import Navbar from "../bridalnavbar/bridal";
import "./booknow.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function Booknow() {
  const [values, setValues] = useState({
    Name: "",
    email: "",
    number: "",
    message: "",
     makeup:"",
    place: "",
     });

  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Are you sure you want to submit the form?");
    // event.target.reset();

    setErrors(Validation(values));
    if (
      errors.Name === "" &&
      errors.email === "" &&
      errors.number === "" &&
      errors.message === "" &&
      errors.makeup === "" &&
      errors.place === ""
    ) {
      axios
        .post("http://localhost:8081/tbl_add_booking", values)
        .then((res) => {
          navigate("/submit");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="booknow1" >
      {/* <Navbar /> */}
      <div>
      <h2
        style={{
          textAlign: "center",
           marginTop:"50px",
          fontSize: " 32px",
          lineheight: "55px",
          fontWeight: "400",
        }}
      >
        Unikaa Bridal Enquiry
      </h2>

      <div className="all-connect">
        <div className="container  card-alingnment">
          <div class="card bg-light card-body-all">
            <div class="card-body">
              <form action="" onSubmit={handleSubmit} style={{color:"white"}}>
                <div className="container row g-5 mt-5">
                  <div className="col-md-6 ">
                    <label htmlFor="Name" className="form-label">
                      <strong> Name</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter  Name"
                      name="Name"
                      onChange={handleInput}
                    />
                    {errors.Name && (
                      <span className="text-danger">{errors.Name}</span>
                    )}
                  </div>


                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      <strong>Email</strong>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="number" className="form-label">
                      <strong>Phone Number</strong>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter number"
                      name="number"
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.number && (
                      <span className="text-danger">{errors.number}</span>
                    )}
                  </div>


                   <div className="col-md-6 mb-3">
                    <label htmlFor="makeup" className="form-label">
                      <strong>Last makeup</strong>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter  makeup"
                      name="makeup"
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.makeup && (
                      <span className="text-danger">{errors.makeup}</span>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="message" className="form-label">
                      <strong>Message</strong>
                    </label>
                    <input
                      type="message"
                      placeholder="Enter message"
                      name="message"
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.message && (
                      <span className="text-danger">{errors.message}</span>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="place" className="form-label">
                      <strong>Place</strong>
                    </label>
                    <input
                      type="place"
                      placeholder="Enter place"
                      name="place"
                      onChange={handleInput}
                      className="form-control "
                    />
                    {errors.place && (
                      <span className="text-danger">{errors.place}</span>
                    )}
                  </div>
                  <div class="col-12">
                    <button type="submit" className="btn btn-primary w-50">
                      BookNow
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="card container mt-5 right-card-aline">
          <div class="card-body " style={{textAlign:"center"}}>
            <h5 class="card-title">Contact Information</h5>

            <p class="card-text">
              <FaPhoneAlt /> +91 7092 77 44 55
            </p>
            <p className="card-text">
              <IoIosMail /> Info@unikaa.in
            </p>
            <p className="card-text">
              <MdLocationPin />
              Chennai, Tamilnadu, India.
            </p>
            <div className="card-text">
              <a
                href="https://www.instagram.com/unikaabeauty/"
                class="card-link"
                style={{ color: "black" }}
              >
                <FaInstagram /> Instagram
              </a>
            </div>
            {/* <div><a href="#" class="card-link">
            Another link
          </a></div> */}
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Booknow;
