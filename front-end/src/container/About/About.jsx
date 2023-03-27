import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import Typed from "typed.js";

const About = () => {
  const el = React.useRef(null);

  const generateTyped = (data) => {
    const typed = new Typed(el.current, {
      strings: [data[0].description],
      typeSpeed: 15,
      backSpeed: 0,
      smartBackspace: false,
      loop: false,
    });
  };

  useEffect(() => {
    const query = "*[_type == 'about']";
    client.fetch(query).then((data) => {
      generateTyped(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        A <span>propos</span> de <span>moi</span>
      </h2>
      <div className="app__profiles">
        <p className=" app__profile-item typed" ref={el}></p>

        <motion.button
          className="button"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <a href="./src/assets/pdf/CV_Moustapha-Camara.pdf" target="_blank">
            CV (pdf)
          </a>
        </motion.button>
      </div>
    </>
  );
};
export default MotionWrap(About, "app__about");
// export default AppWrap(
//   MotionWrap(About, "app__about"),
//   "a propos",
//   "app_whitebg"
// );
