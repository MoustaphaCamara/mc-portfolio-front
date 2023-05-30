import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Slider from "react-slick";

import { MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";

import "./Portfolio.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../../hooks/useFetch";

const settings = {
  dots: true,
  dotsClass: "slick-dots",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const filterButtons = [
  "Tout afficher",
  "React",
  "Vue",
  "Javascript",
  "Typescript",
  "SASS",
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Tout afficher");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredData, setFilteredData] = useState([]);
  // default filtering doesn't display all data on load

  const { data, loading, error } = useFetch(
    "*[_type == 'works'] | order(releaseDate desc)"
  );
  if (error) console.log(error);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "Tout afficher") {
        setFilteredData(data);
      } else {
        setFilteredData(data.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="portfolio">
      <h2 className="head-text">
        mon <span> portfolio</span>
      </h2>

      <div className="app__portfolio-filter">
        {filterButtons.map((filter, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(filter)}
            className={`app__btn ${
              activeFilter === filter ? "app__btn-active" : ""
            }`}
          >
            {filter}
          </div>
        ))}
      </div>

      <Slider {...settings}>
        {data &&
          filteredData &&
          filteredData.map((work, index) => (
            <motion.div
              key={index}
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
                  <h4 className="head-text">{work.title}</h4>
                  <p style={{ marginTop: 10 }}>{work.description}</p>
                  <p style={{ color: "var(--orange-color)" }}>
                    Technologies utilisées :
                  </p>
                  <div className="app__portfolio-icons">
                    {work.icon.map((icon, index) => (
                      <img src={urlFor(icon)} alt={work.name} key={index} />
                    ))}
                  </div>
                  <div className="app__portfolio-links">
                    <a
                      href={work.sourceCode}
                      target="_blank"
                      rel="noreferrer"
                      className="app__portfolio-link-item"
                    >
                      <AiFillGithub /> Code source
                    </a>
                    <a
                      href={work.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="app__portfolio-link-item"
                    >
                      <AiFillEye /> Visiter
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
