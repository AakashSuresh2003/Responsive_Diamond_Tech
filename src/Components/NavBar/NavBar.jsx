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
  { text: "Service", href: "/" },
  { text: "Contact", href: "#contactus" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className={`head ${scrolled ? "hidden" : ""}`}>
        <ul className="Address">
          <li>
            Gem industries, No; 140, G.N.T.Road, Puzhal, Chennai- 600066.
          </li>
          <li>
            Call us : +91 7299211777, 9340011444
          </li>
          <li>
            Email : diamond_tech@yahoo.com
          </li>
        </ul>
      </div>
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
