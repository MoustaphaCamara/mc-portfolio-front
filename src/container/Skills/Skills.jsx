import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filter, setFilter] = useState("tout afficher");
  const [active, setActive] = useState("tout afficher");

  const queryList = [
    "tout afficher",
    "frontend",
    "backend",
    "database",
    "frameworks",
    "tools",
    "design",
  ];

  // postman ovhcloud netlify
  const fetchData = (query) => {
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  };
  useEffect(() => {
    if (filter === "tout afficher") {
      const query = `*[_type == 'skills']`;
      fetchData(query);
    } else {
      const query = `*[_type == 'skills' && category == "${filter}"]`;
      fetchData(query);
    }
  }, [filter]);

  return (
    <div id="competences">
      <h2 className="head-text">Compétences</h2>
      <div className="app__skills-filter">
        {queryList.map((item, index) => (
          <div
            className={`app__skills-filter-item app__btn ${
              active === item ? "app__btn-active" : ""
            }`}
            key={index}
            onClick={() => {
              setFilter(item);
              setActive(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
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
            Anglais Courant - Espagnol C1 - Méthode AGILE - SCRUM{" "}
          </p>
        </div>
        <div className="app__skills-complementary-desktop">
          <p className="p-text">
            Suite Office(Word, Excel, PowerPoint, Outlook, Teams) - RoundCube -
            Buzzee CRM - SAGE Commercial - Comet SAP
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotionWrap(Skills, "app__skills app__darkbg");
