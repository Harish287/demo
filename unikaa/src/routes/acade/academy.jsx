import React, { useState } from "react";
import ".//academy.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Imagelogo from "../../unikaalogo.png";

import ScrollTop from "../../scrolltop";

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);

  return (
    <nav className="acade-navbars">
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
              className="acade-navbar-open-btn text-white"
              onClick={() => setNavToggler(!navToggler)}
            >
              <FaBars size={30} />
            </button>

            <div
              className={
                navToggler
                  ? "acade-navbar-collapse acade-show-acade-navbar-collapse"
                  : "acade-navbar-collapse"
              }
            >
              <button
                type="button"
                className="acade-navbar-close-btn text-white"
                onClick={closeNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="acade-navbar-nav-nav">
                {/* <li>
                  <Link to="/" className="text-decoration-none text-secondary">home</Link>
                </li> */}
                <div>
                  <li className="acade-nav-item-acade">
                    {/* <h1>unikaa</h1> */}

                    <Link
                      to="/"
                      className="acade-acade-nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                    >
                      <img src={Imagelogo} alt="" />{" "}
                    </Link>
                  </li>{" "}
                </div>

                <li className="nav-item">
                  <Link
                    to="/home"
                    className="acade-nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="acade-nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/franchises"
                    className="acade-nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    Franchise
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ourcourse"
                    className="acade-nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    OurCourse
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="acade-nav-link-nav text-white ls-1 text-uppercase fw-6 fs-17"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop />
    </nav>
  );
};

export default Navbar;
