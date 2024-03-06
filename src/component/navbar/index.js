import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <nav>
        <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
          <li className="menu-button" onClick={hideSidebar}><a href="#"><IoClose fontSize={30} /></a></li>
          <li><a href="/">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="/Service">Service</a></li>
          <li><a href="/Project">Project</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        <ul>
          <li><a style={{
            color:' #bf2237f1',
            fontWeight:'bold',
            fontSize:'25px',
            }} href="#">Usama Javed</a></li>
          <li className="hideOnMobile"><a href="/">Home</a></li>
          <li className="hideOnMobile"><a href="/About">About</a></li>
          <li className="hideOnMobile"><a href="/Service">Service</a></li>
          <li className="hideOnMobile"><a href="/Project">Project</a></li>
          <li className="hideOnMobile"><a href="/Contact">Contact</a></li>
          <li className="menu-button" onClick={showSidebar}><a href="#"><RxHamburgerMenu fontSize={30} /></a></li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;