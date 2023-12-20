import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./bridal.css";

function ColorSchemesExample() {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);
  return (
    <>
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
                className="navbar-open-btn text-white  "
                onClick={() => setNavToggler(!navToggler)}
              >
                <FaBars size={30} color="crimson"/>
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
                  <FaTimes size={30}  color="crimson"/>
                </button>
                <Navbar bg="" data-bs-theme="dark">
                  <Container>
                    <Navbar.Brand href="/homes">BRIDAL</Navbar.Brand>
                    {/* <Nav className="me-auto"> */}
                    <Link></Link>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="/homes">Home</Nav.Link>
                      <Nav.Link href="/Services">Services</Nav.Link>
                      <Nav.Link href="/makeup">Makeup Experts</Nav.Link>
                      <Nav.Link href="/blogs">Blogs</Nav.Link>
                      <Button href="/booknow" variant="outline-success">
                        Book Now
                      </Button>
                    </Nav>
                  </Container>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
