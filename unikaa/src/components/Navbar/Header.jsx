import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Logo from ".//1.png";
import "../Navbar/Header.css";
const Header = () => {
  return (
    <header>
      <div className="top">
        <h1>unikaa</h1>
        <p>hair and beauty salon</p>
      </div>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
          UNIKAA
        </Link>

        {/* for large screen */}
        <Navbar />

        {/* for small screen */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
