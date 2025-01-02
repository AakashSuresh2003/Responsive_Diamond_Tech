import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const links = [
  { text: "Wood Processing Machines", href: "/" },
  { text: "Stone Processing Machines", href: "/" },
  { text: "Laser Machines", href: "/" },
  { text: "About Us", href: "/aboutus" },  
  { text: "Services", href: "/" },
  { text: "Contact Us", href: "#contactus" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`} style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <nav className="options navbar navbar-expand-xl navbar-dark"> 
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
          {isMobile && ( 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          )}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav"> 
            <ul className="navbar-nav ml-auto">
              {links.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={link.href}>  
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
