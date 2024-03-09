import { useRef } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
			<header>
				<h3 style={{ color: ' #bf2237f1', fontWeight: 'bold', fontSize: '25px', }}>Usama Javed</h3>
				<nav ref={navRef}>
					<Link to="home" smooth={true} duration={500}><a>Home</a></Link>
					<Link to="about" smooth={true} duration={500}><a>About</a></Link>
					<Link to="service" smooth={true} duration={500}><a>Service</a></Link>
					<Link to="project" smooth={true} duration={500}><a>Project</a></Link>
					<Link to="contact" smooth={true} duration={500}><a>Contact</a></Link>

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








