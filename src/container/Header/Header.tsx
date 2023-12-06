import React from "react";
import { motion } from "framer-motion";

import { MotionWrap } from "../../wrapper";

import { images } from "../../constants";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const technologies:any[] = [images.next, images.react, images.nodejs, images.sanity];
const Header = () => {
  return (
    <div className="app__header app__flex" id="accueil">
      <motion.div
        transition={{ duration: 0.5 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>{"<salut />"}</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Moi c'est</p>
              <h1 className="head-text">Moustapha</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Développeur Web</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        whileInView={{ opacity: [0, 1] }}
      >
        <img src={images.profile} alt="profile-bg" />
      </motion.div>

      <motion.div
        className="app__header-circles"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        {technologies.map((technology, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={technology} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrap(Header, "app__darkbg");
