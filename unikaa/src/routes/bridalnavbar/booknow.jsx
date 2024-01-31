import React, { useState } from "react";
import Validation from "./booking";
import axios from "axios";
import Navbar from "../bridalnavbar/bridal";

// import { useNavigate } from "react-router-dom";

function Booknow() {
  const [values, setValues] = useState({
    Fname: "",
    Lname: "",
    email: "",
    number: "",
    place: "",
    message: "",
  });

  // const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    axios
      .post("http://localhost:8081/contact", values)
      .then(
        (res) => console.log(res)

        //  { navigate("/home"); }
      )
      .catch((err) => console.log(err));
    // if (
    //   errors.Fname === "" &&
    //   errors.Lname === "" &&
    //   errors.email === "" &&
    //   errors.number === "" &&
    //   errors.place === "" &&
    //   errors.message === ""
    // ) {console.log("res")
    //   // axios
    //   //   .post("http://localhost:8081/contact", values)
    //   //   .then(
    //   //     (res) => console.log(res)

    //   //     //  { navigate("/home"); }
    //   //   )
    //   //   .catch((err) => console.log(err));
    // }else{
    //   console.log("res56")
    // }
  };

  return (
    <>
      <Navbar />
      <h2
        style={{
          textAlign: "center",
          fontFamily: " against, sans-serif",
          fontSize: " 32px",
          lineheight: "55px",
          fontWeight: "400",
        }}
      >
        Contact Us
      </h2>
      <div className="container mt-5">
        <div class="card bg-light" style={{ width: "50rem" }}>
          <div class="card-body">
            <form action="" onSubmit={handleSubmit}>
              <div className="container row g-5 mt-5">
                <div className="col-md-6 ">
                  <label htmlFor="Fname" className="form-label">
                    <strong>First Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                    name="Fname"
                    onChange={handleInput}
                  />
                  {errors.Fname && (
                    <span className="text-danger">{errors.Fname}</span>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="Lname" className="form-label">
                    <strong>Last Name</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="Lname"
                    onChange={handleInput}
                    className="form-control"
                  />
                  {errors.Lname && (
                    <span className="text-danger">{errors.Lname}</span>
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

      <div class="card" style={{ width: "40rem" }}>
        <div class="card-body">
          <h5 class="card-title">Contact Information</h5>

          <p class="card-text"> +91 7092 77 44 55</p>
          <p className="card-text"> Info@unikaa.in</p>
          <p className="card-text">Chennai, Tamilnadu, India.</p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
}

export default Booknow;
