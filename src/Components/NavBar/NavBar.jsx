import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const links = [
  { text: "Wood Processing Machines", href: "/" },
  { text: "Stone Processing Machines", href: "/" },
  { text: "Laser Machines", href: "/" },
  { text: "About Us", href: "#aboutus" },
  { text: "Services", href: "/" },
  { text: "Contact Us", href: "#contactus" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
    setIsMobile(window.innerWidth <= 768);
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
      <nav className="options navbar navbar-expand-md navbar-dark">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ml-auto">
              {links.map((link, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link " href={link.href}>
                    {link.text}
                  </a>
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
