import React from "react";
import { images } from "../../constants";
import "./Test.scss";

const Test = () => {
  return (
    <div className="test-container">
      <ul className="social-icons">
        <li>
          <a href="#">
            <span className="line"></span>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="line"></span>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="line"></span>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Test;
