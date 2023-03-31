import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Modal from "./Modal";

export const navList = [
  "accueil",
  "a-propos",
  "competences",
  "portfolio",
  "hobbies",
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
    <div>
      <div
        className="app__navbar"
        style={{ top: navTop, transition: "all 1s ease" }}
      >
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo-portfolio" />
        </div>
        <div className="app__navbar-links">
          <ul>
            {navList.map((item) => (
              <li className="app__flex" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item.replace("-", " ")}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="app__navbar-burger">
          <i className="fa-solid fa-bars" onClick={() => setToggle(true)}></i>
        </div>
      </div>
      {toggle && <Modal setToggle={setToggle} />}
    </div>
  );
};

export default Navbar;
