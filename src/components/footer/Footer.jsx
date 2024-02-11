import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className=" container footer__container">
        <div className="footer__main">
          <h2 className="footer__heading"> Coding ERA </h2>
          <div className="footer__content">
            <h2>
              {" "}
              Explore <span> More </span>{" "}
            </h2>
            <h4>
              {" "}
              Dive into the World of <span>Computer Science</span>{" "}
            </h4>
            <p>
              Stay updated with the latest trends, tutorials, and insights.
              Enhance your knowledge and join our community of passionate
              computer science enthusiasts.
            </p>
          </div>
        </div>
        <div className="footer__links">
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
    </footer>
  );
};

export default Footer;
