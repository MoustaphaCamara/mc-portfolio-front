import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { client } from "../../client";
import { MotionWrap } from "../../wrapper";
import Typed from "typed.js";

const About = () => {
  const el = React.useRef(null);
  const [data, setData] = useState("");

  const generateTyped = (data) => {
    // typed removed bc not a good experience for mobile version (the text appearing displaces the rest of the page)
    const typed = new Typed(el.current, {
      strings: [data.description],
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
      setData(data[0]);
      // generateTyped(data);
    });
  }, []);

  return (
    <div id="a-propos">
      <h2 className="head-text">
        A <span>propos</span> de <span>moi</span>
      </h2>
      <div className="app__profiles">
        <p className="app__profile-item typed">{data.description}</p>
        {/* <p className=" app__profile-item typed" ref={el}></p> */}
        <motion.a
          href="./assets/CV_Moustapha-Camara.pdf"
          target="_blank"
          className="btn btn-action"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          voir cv (pdf)
        </motion.a>
      </div>
    </div>
  );
};
export default MotionWrap(About, "app__about app_darkbg");
