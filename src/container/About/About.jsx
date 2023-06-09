import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor } from "../../client";
import { MotionWrap } from "../../wrapper";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";

const About = () => {
  const { data, loading, error } = useFetch("*[_type == 'about']");
  if (error) console.log(error);

  return (
    <div id="a-propos">
      <h2 className="head-text">
        A <span>propos</span> de <span>moi</span>
      </h2>
      <div className="app__profiles">
        {loading && <Loader />}
        {data?.map((item, index) => (
          <div className="app__profile-item" key={index}>
            <img src={urlFor(item.imgUrl)} alt="who-am-i" />
            <p>{item.description}</p>
          </div>
        ))}
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
