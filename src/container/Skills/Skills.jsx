import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";
import "./Skills.scss";
import useFetch from "../../hooks/useFetch";

const queryList = [
  "tout afficher",
  "frontend",
  "backend",
  "database",
  "frameworks",
  "tools",
  "design",
];

const Skills = () => {
  const [filter, setFilter] = useState("tout afficher");
  const [query, setQuery] = useState("*[_type == 'skills']");

  const { data, loading, error } = useFetch(query);
  if (error) console.log(error);

  useEffect(() => {
    if (filter === "tout afficher") {
      setQuery(`*[_type == 'skills']`);
    } else {
      setQuery(`*[_type == 'skills' && category == "${filter}"]`);
    }
  }, [filter]);

  return (
    <div id="competences">
      <h2 className="head-text">Compétences</h2>
      <div className="app__skills-filter">
        {queryList.map((item, index) => (
          <div
            className={`app__skills-filter-item app__btn ${
              filter === item ? "app__btn-active" : ""
            }`}
            key={index}
            onClick={() => {
              setFilter(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {data?.map((skill) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [-40, 0] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <h3 className="head-text">[..., complémentaires]</h3>
      <div className="app__skills-complementary">
        <div className="app__skills-complementary-items">
          <p className="p-text">
            Anglais C1 - Espagnol C1 - Méthode AGILE - SCRUM
          </p>
        </div>
        <div className="app__skills-complementary-desktop">
          <p className="p-text">
            RoundCube - Buzzee CRM - SAGE Commercial - Comet SAP
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotionWrap(Skills, "app__skills app__darkbg");
