
import { FaBarsStaggered, FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import "./navbar.css"
const Navbar = () => {
    const [Open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>


            <header className="header__container ">
                <FaBarsStaggered onClick={() => setOpen((prev) => !prev)} />
                <TiHome onClick={() => navigate("/")} />
                <FaCircleUser />
            </header>



            <div className={` sidebar__container   ${Open ? "show" : "hidden"} `}>
                <div className="sidebar_heading">
                    <h2> Coding ERA ...</h2>
                    <IoClose onClick={() => setOpen((prev) => !prev)} />
                </div>
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