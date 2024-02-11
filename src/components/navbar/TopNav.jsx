import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
const TopNav = () => {
  return (
    <div className="top__nav-container ">
      <h3> Hello Coders </h3>
      <div className="top__nav-links">
        <Link to={"https://www.facebook.com/profile.php?id=100063641618962 "}>
          {" "}
          <FaFacebookF />{" "}
        </Link>{" "}
        <Link to={"https://www.instagram.com/a_j6198/ "}>
          {" "}
          <FaInstagram />{" "}
        </Link>{" "}
        <Link to={"https://www.linkedin.com/in/amol-jadhav-282a71260/ "}>
          {" "}
          <FaLinkedinIn />{" "}
        </Link>
        {"  "}
        <Link to={" https://twitter.com/ "}>
          {" "}
          <FaTwitter />{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default TopNav;
