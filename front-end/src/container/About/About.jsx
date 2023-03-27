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
      typeSpeed: 10,
      backSpeed: 0,
      smartBackspace: false,
      loop: false,
      showCursor: false,
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
        <motion.a
          href="./src/assets/pdf/CV_Moustapha-Camara.pdf"
          target="_blank"
          className="btn btn-action"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          voir cv (pdf)
        </motion.a>
      </div>
    </>
  );
};
export default MotionWrap(About, "app__about app_darkbg");
// export default AppWrap(
//   MotionWrap(About, "app__about"),
//   "a propos",
//   "app_whitebg"
// );
