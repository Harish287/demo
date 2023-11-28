import { Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer";
import Body from "../components/body";

export default function Root() {
  return (
    <div>
      <Header />

      <div className="content">
        <Outlet />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
