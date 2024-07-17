import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const links = [
  { text: "Wood Processing Machines", href: "/" },
  { text: "Stone Processing Machines", href: "/" },
  { text: "Laser Machines", href: "/" },
  { text: "Company Profile", href: "/" },
  { text: "Gallery", href: "/" },
  { text: "Service", href: "/" },
  { text: "Contact", href: "/" },
  { text: "Careers", href: "/" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
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

  const gradientStyle = {
    background: scrolled ? "rgb(0,0,0)" : "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
    transition: "background-color 0.3s ease-out",
    fontFamily: '"Abel", sans-serif',
  };

  const navbarStyle = {
    opacity: scrolled ? 0.7 : 1,
    transform: scrolled ? "translateY(-100%)" : "translateY(0)",
    transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
    fontFamily: '"Abel", sans-serif',
  };

  return (
    <div className="container-fluid p-0">
      <div className={`componentHeader bg-black text-white p-2 w-100 ${scrolled ? "hidden" : ""}`}>
        <ul className="row list-unstyled w-100 m-0">
          <li className="col-sm-12 col-md-4 text-center text-md-left">
            Gem industries, No; 140, G.N.T.Road, Puzhal, Chennai- 600066.
          </li>
          <li className="col-sm-12 col-md-4 text-center">
            Call us : +91 7299211777, 9340011444
          </li>
          <li className="col-sm-12 col-md-4 text-center text-md-right">
            Email : diamond_tech@yahoo.com
          </li>
        </ul>
      </div>
      <nav className={`text-white p-2 ${scrolled ? "navbar-fixed" : ""}`} style={gradientStyle}>
        <div className="d-flex align-items-center justify-content-between">
          <img src={logo} alt="logo" className="logo" />
          <FaBars className="d-md-none menu-icon" onClick={toggleMenu} />
          <ul className={`d-none d-md-flex nav justify-content-center m-0 ${isOpen ? "open" : ""}`} style={{ fontSize: '24px' }}>
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link text-white px-2" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className={`d-md-none nav flex-column justify-content-center m-0 ${isOpen ? "open" : "d-none"}`} style={{ textAlign: 'center', fontSize: '16px' }}>
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link text-white px-2" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
