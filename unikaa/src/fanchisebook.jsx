import React, { useState } from "react";
import "./franchise.css";
import { useNavigate } from "react-router-dom";
import Validation from "./franchisevalidation";
import axios from "axios";

function Franchise() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
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
    if (errors.name === "" && errors.phone === "" && errors.email === "") {
      axios
        .post("http://localhost:8081/enquire", values)
        .then((res) => {
          navigate("/franchisesubmit");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <br />

      <h1 className="academy-contact-h1"> Unikaa Fanchise Enquiry</h1>

      <div className="container mt-5">
        <div class="card bg-light francise-card">
          <div class="card-body ">
            <form action="" onSubmit={handleSubmit}>
              <div className="container row g-5 mt-5">
                <div className="col-md-6 ">
                  <label htmlFor="name" className="form-label">
                    <strong>Full Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    onChange={handleInput}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    <strong>Phone phone</strong>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone"
                    name="phone"
                    onChange={handleInput}
                    className="form-control"
                  />
                  {errors.phone && (
                    <span className="text-danger">{errors.phone}</span>
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

                <div class="col-12">
                  <button type="submit" className="btn btn-primary w-50">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Franchise;
