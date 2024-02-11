import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./navbar.css";
const TopNav = () => {
  return (
    <div className="top__nav-container ">
      <h3> Hello Coders </h3>
      <div className="top__nav-links">
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedinIn />
        <FaTwitter />
      </div>
    </div>
  );
};

export default TopNav;
