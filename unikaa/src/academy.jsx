import React, { useState } from "react";
import "./routes/acade/academy.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Imagelogo from "./unikaalogo.png";
const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);

  return (
    <nav className="navbars">
      <div className="contain">
        <div className="navbar-content">
          <div className="brand-and-toggler flex flex-sb">
            {/* <Link
              to="/home"
              className="navbar-brand text-uppercase fw-7 text-white ls-2 fs-17"
            >
              Academy
            </Link> */}
            <button
              type="button"
              className="navbar-open-btn text-white"
              onClick={() => setNavToggler(!navToggler)}
            >
              <FaBars size={30} />
            </button>

            <div
              className={
                navToggler
                  ? "navbar-collapse show-navbar-collapse"
                  : "navbar-collapse"
              }
            >
              <button
                type="button"
                className="navbar-close-btn text-white"
                onClick={closeNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="navbar-nav-nav">
                <li className="nav-item-acade">
                  {/* <h1>unikaa</h1> */}

                  <Link
                    to="/home"
                    className="nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    <img src={Imagelogo} alt="" />{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/home"
                    className="nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/franchises"
                    className="nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    Franchise
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ourcourse"
                    className="nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    OurCourse
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
