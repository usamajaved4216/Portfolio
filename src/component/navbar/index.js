import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div style={{height:'10vh'}}>
      <nav>
        <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
          <li className="menu-button" onClick={hideSidebar}><a href="#"><IoClose fontSize={30} /></a></li>

          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="service" smooth={true} duration={500}>Service</Link></li>
          <li><Link to="project" smooth={true} duration={500}>Project</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <ul>
          <li><Link to="home" smooth={true} duration={500}><a style={{ color: ' #bf2237f1', fontWeight: 'bold', fontSize: '25px',}}>Usama Javed</a></Link></li>
          <li className="hideOnMobile"><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="hideOnMobile"><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li className="hideOnMobile"><Link to="service" smooth={true} duration={500}>Service</Link></li>
          <li className="hideOnMobile"><Link to="project" smooth={true} duration={500}>Project</Link></li>
          <li className="hideOnMobile"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li className="menu-button" onClick={showSidebar}><a href="#"><RxHamburgerMenu fontSize={30} /></a></li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;








