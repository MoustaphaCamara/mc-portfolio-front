import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Portfolio.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { images } from "../../constants";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Tout afficher");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const query = "*[_type == 'works']";

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Tout afficher") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
        console.log(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="portfolio">
      <h2 className="head-text">
        mon <span> portfolio</span>
      </h2>

      <div className="app__portfolio-filter">
        {["Tout afficher", "React", "Vue", "Vanilla"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__btn ${
              activeFilter === item ? "app__btn-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <Slider {...settings}>
        {filterWork.map((work, index) => (
          <motion.div
            animate={animateCard}
            transition={{
              duration: 0.5,
              delayChildren: 0.5,
            }}
          >
            <div className="app__portfolio-item" key={index}>
              <div className="app__portfolio-item-picture-container">
                <div className="app__portfolio-item-picture">
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <img src={urlFor(work.imgUrl)} alt={work.name} />
                  </a>
                </div>
              </div>
              <div className="app__portfolio-item-description">
                <h4 className="head-text">
                  {/* rendre dynamique --> dans bdd ajouter techno utilisées pour chaque projet via TAGS  */}
                  {/* tags actuels = techno pour filtrage, faire mm système de filtrage que partie SKILLS et laisser tags pour les technos (multichoix) */}
                  {/* <img src={images.sass} alt="sass" />
                  <img src={images.vue} alt="vue" />
                  <img src={images.react} alt="react" /> */}
                  {work.title}
                </h4>
                <p style={{ marginTop: 10 }}>{work.description}</p>
                {/* technos utilisées : mapper les tags */}
                <div className="app__portfolio-links">
                  <a
                    href={work.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="app__portfolio-link-item"
                  >
                    <AiFillGithub /> code source
                  </a>
                  <a
                    href={work.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="app__portfolio-link-item"
                  >
                    <AiFillEye /> visiter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};
export default MotionWrap(Portfolio, "app__portfolio app__darkbg");
