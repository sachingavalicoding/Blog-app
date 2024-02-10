import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./navbar.css"
const TopNav = () => {
    return (
        <div className="top__nav-container ">
            <h3> Hello Coders </h3>
            <div className="top__nav-links">
                <BsFacebook />
                <AiFillInstagram />
                <FaLinkedin />
                <FaSquareXTwitter />
            </div>
        </div>
    )
}

export default TopNav