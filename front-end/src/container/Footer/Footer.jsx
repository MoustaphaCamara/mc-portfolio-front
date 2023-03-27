import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper/";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="app__footer app__darkbg app_flex">
        <div className="app__footer-contact-container">
          <h2 className="head-text">Contactez moi</h2>
          <ul className="app__footer-icons-list">
            <li>
              <a href="#">
                <span className="app__footer-icons-line"></span>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="app__footer-icons-line"></span>
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="app__footer-icons-line"></span>
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="app__footer-copyright-container">
          <p className="p-text">©2023 MC</p>
        </div>
      </div>
    </>
  );
};
// export default MotionWrap(Footer, "app__footer app__darkbg app_flex");

export default Footer;
