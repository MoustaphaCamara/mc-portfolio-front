import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export const navList = [
  "accueil",
  "a propos",
  "portfolio",
  "competences",
  "temoignages",
  "contact",
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navTop, setNavTop] = useState(0);
  var lastScroll = 0;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScroll) {
        setNavTop(-70);
      } else {
        setNavTop(0);
      }
      lastScroll = window.scrollY;
    });
  }, []);

  return (
    <nav
      className="app__navbar"
      style={{ top: navTop, transition: "all 1s ease" }}
    >
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo-portfolio" />
      </div>
      <ul className="app__navbar-links">
        {navList.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <div className="app__navbar-burger">
            {/* close icon */}
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navList.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
