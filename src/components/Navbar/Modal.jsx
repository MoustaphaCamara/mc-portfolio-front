import React from "react";
import "./Modal.scss";

import { navList } from "./Navbar";

const Modal = ({ setToggle }) => {
  return (
    <div className="app__modal" onClick={() => setToggle(false)}>
      <ul className="app__modal-links">
        {navList.map((item) => (
          <li key={item}>
            <div />

            <a href={`#${item}`} onClick={() => setToggle(false)}>
              {item.replace("-", " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
