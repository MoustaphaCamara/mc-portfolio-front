import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="contact">
      <div className="app__footer app__darkbg app_flex">
        <div className="app__footer-contact-container">
          <h2 className="head-text">Contactez moi</h2>
          <ul className="app__footer-icons-list">
            <li>
              <a
                href="https://www.linkedin.com/in/camara-moustapha/"
                target="_blank"
              >
                <span className="app__footer-icons-line"></span>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/MoustaphaCamara" target="_blank">
                <span className="app__footer-icons-line"></span>
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="mailto:cmr.mous@gmail.com">
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
    </div>
  );
};

export default Footer;
