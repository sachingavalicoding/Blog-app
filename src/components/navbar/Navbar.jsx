import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css"
const Navbar = () => {
    const [Open, setOpen] = useState(false);
    return (
        <>
            <div className="navbar__container">
                <div className="top__nav-container border-bottom">
                    <h3> Hello Coders </h3>
                    <div className="top__nav-links">
                        <BsFacebook />
                        <AiFillInstagram />
                        <FaLinkedin />
                        <FaSquareXTwitter />
                    </div>
                </div>
                <div className="navbar__heading border-bottom">
                    <h1>  CodingERA  </h1>
                    <p> join with us </p>
                </div>
                <header className="header__container ">
                    <button className="btn">SUBCRIBE </button>
                    <FaBarsStaggered onClick={() => setOpen((prev) => !prev)} />
                </header>

            </div>

            <div className={` sidebar__container   ${Open ? "show" : "hidden"} `}>
                <nav>
                    <Link to={"/"} > Home  </Link>
                    <Link to={"/about"} >About  </Link>
                    <Link to={"/blogs"} >Blogs   </Link>
                    <Link to={"/contact"} >Contact  </Link>
                    <div className="btn__container">
                        <button className="btn">Join with us </button>
                    </div>
                </nav>
            </div>
        </>


    )
}

export default Navbar