import { useRef } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { RiMessage2Line } from "react-icons/ri";

const Navbar = () => {

	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

	return (
		<>
			<header>
				<h3 style={{ color: ' #bf2237f1', fontWeight: 'bold', fontSize: '2rem', }}>Usama Javed</h3>
				<nav ref={navRef}>
					<div className="icon">
						<HiOutlineHome className="navicon" />
						<Link to="home" smooth={true} duration={500} onClick={closeNavbar}><a>  Home</a></Link>
					</div>
					<div className="icon">
						<IoPersonCircleSharp className="navicon" />
						<Link to="about" smooth={true} duration={500} onClick={closeNavbar}><a>  About</a></Link>

					</div>
					<div className="icon">
						<IoNewspaperOutline className="navicon" />
						<Link to="skills" smooth={true} duration={500} onClick={closeNavbar}><a> Skills</a></Link>

					</div>
				
					<div className="icon">
						<RiMessage2Line  className="navicon" />
						<Link to="contact" smooth={true} duration={500} onClick={closeNavbar}><a>  Contact</a></Link>

					</div>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button
					className="nav-btn"
					onClick={showNavbar}>
					<FaBars />
				</button>
			</header>
		</>

	);
};

export default Navbar;
