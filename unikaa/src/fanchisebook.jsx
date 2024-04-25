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
    experience: "",
    confirm: "",
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
      errors.name === "" &&
      errors.phone === "" &&
      errors.email === "" &&
      errors.experience === "" &&
      errors.confirm === ""
    ) {
      axios
        .post("http://unikaabeauty.com/unikaabeautyacademy/costomers/enquire", values)
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
          <div class="card-body  franchise-width">
            <form action="" onSubmit={handleSubmit}>
              <div className="container row g-5 ">
                <div className="col-md-12 ">
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

                <div className="col-md-12 mb-3">
                  <label htmlFor="phone" className="form-label">
                    <strong>Phone Number</strong>
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
                  <label htmlFor="experience" className="form-label">
                    <strong>Experience</strong>
                  </label>

                  <select
                    type="experience"
                    placeholder="Enter experience"
                    name="experience"
                    onChange={handleInput}
                    className="form-select "
                  >
                    <option selected="true">-Select-</option>
                    <option value="0-1">0-1</option>
                    <option value="1-2">1-2</option>
                    <option value="2-3">2-3</option>
                    <option value="3-4">3-4 </option>
                    <option value="4-5">4-5</option>
                    <option value="5-6">5-6 </option>
                    <option value="6-7">6-7</option>
                    <option value="7-8">7-8 </option>
                    <option value="8-9">8-9</option>
                    <option value="more than that">more than that </option>
                  </select>

                  {errors.experience && (
                    <span className="text-danger">{errors.experience}</span>
                  )}
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="confirm" className="form-label">
                    <strong>Are You An Existing Beautician</strong>
                  </label>
                  <div className="yes-or-no-button">
                    {" "}
                    <div>
                      {" "}
                      <input
                        type="radio"
                        name="confirm"
                        value="Yes"
                        onChange={handleInput}
                      />
                      yes
                    </div>
                    <div>
                      {" "}
                      <input
                        type="radio"
                        name="confirm"
                        value="No"
                        onChange={handleInput}
                      />
                      No
                    </div>
                  </div>
                  {errors.confirm && (
                    <span className="text-danger">{errors.confirm}</span>
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
