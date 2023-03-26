import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

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

const technologies = [images.flutter, images.redux, images.sass];
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        transition={{ duration: 0.5 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Salut, moi c'est</p>
              <h1 className="head-text">Moustapha</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Développeur Web</p>
            <p className="p-text">Web Mobile</p>
          </div>
        </div>
      </motion.div>

      {/* profile pic */}
      <motion.div
        className="app__header-img"
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        whileInView={{ opacity: [0, 1] }}
      >
        <img src={images.profile} alt="profile-bg" />
        {/* profile background */}
        <motion.img
          className="overlay_circle"
          transition={{ duration: 1, ease: "easeInOut" }}
          whileInView={{ scale: [0, 1] }}
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      {/* profile circles*/}
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

export default AppWrap(Header, "accueil");
