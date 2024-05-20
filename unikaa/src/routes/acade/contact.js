import React, { useState } from "react";
// import Navbar from "../../academy";
import Navbar from "../../components/Navbar/Header"
import Acardefooter from "./acadefooter";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import Validation from "./contactvalidation";

import axios from "axios";

function Contact() {
  const [values, setValues] = useState({
    fname: "",
    number: "",
    email: "",
    course: "",
    message: "",
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
    alert("Are you sure you want to submit the form?");
    // event.target.reset();

    setErrors(Validation(values));
    if (
      errors.fname === "" &&
      errors.number === "" &&
      errors.email === "" &&
      errors.course === "" &&
      errors.message === ""
    ) {
      axios
        .post("http://localhost:8081/academy_count", values)
        .then((res) => {
          navigate("/academysubmit");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Navbar />
      {/* <br /> */}
      <div>
        <h1 className="academy-contact-h1"> Unikaa Academy Enquiry</h1>

        <div className="container mt-5  contact-full">
          <div
            class="card contact-full-back"
            // style={{ width: "100%" }}
          >
            <div class="card-body class-full-second">
              <form action="" onSubmit={handleSubmit}>
                <div className="container column g-5 mt-5">
                  <div className="col-md-12 ">
                    <label htmlFor="fname" className="form-label">
                      <strong>Full Name</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      name="fname"
                      onChange={handleInput}
                    />
                    {errors.fname && (
                      <span className="text-danger">{errors.fname}</span>
                    )}
                  </div>

                  <div className="col-md-12 mb-3">
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

                  <div className="col-md-12 mb-3">
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

                  <div className="col-md-12 mb-3">
                    <label htmlFor="course" className="form-label">
                      <strong>Course</strong>
                    </label>

                    <select
                      type="course"
                      placeholder="Enter course"
                      name="course"
                      onChange={handleInput}
                      className="form-select "
                    >
                      <option selected="true">-Select-</option>
                      <option value="Classic Bridal Makeup Course">
                        Classic Bridal Makeup Course
                      </option>
                      <option value="Certificate Course in Barbering">
                        {" "}
                        Certificate Course in Barbering
                      </option>
                      <option value="Certificate in Beauty Therapy">
                        Certificate in Beauty Therapy
                      </option>
                      <option value="Pro Makeup Artistry Course">
                        Pro Makeup Artistry Course
                      </option>
                      <option value="Certificate in Hairdressing">
                        Certificate in Hairdressing
                      </option>
                      <option value="Diploma in Cosmetology">
                        Diploma in Cosmetology
                      </option>
                    </select>

                    {errors.course && (
                      <span className="text-danger">{errors.course}</span>
                    )}
                  </div>

                  <div className="col-md-12 mb-3">
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

                  <div class="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div></div>
      <h1 className="academy-contact-h1"> contact</h1>

      <div className="acadamy-address-details-card">
        <div className="acadamy-address-details-card-info">
          <div className="acadamy-address-details-card-icon">
            <FaPhoneAlt />
          </div>
          <h3> +91 7092 77 44 55</h3>
          <p>Phone Support</p>
        </div>
        <div className="acadamy-address-details-card-info">
          <div className="acadamy-address-details-card-icon">
            <IoIosMail />
          </div>
          <h3> Info@unikaa.in</h3>
          <p>Email Address</p>
        </div>
        <div className="acadamy-address-details-card-info">
          <div className="acadamy-address-details-card-icon">
            <MdLocationPin />
          </div>
          <h3>Chennai, Tamilnadu, India.</h3>
          <p>Office Address</p>
        </div>
      </div>

      <br />

      <Acardefooter />
    </>
  );
}

export default Contact;
