import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filter, setFilter] = useState("tout afficher");

  const queryList = [
    "tout afficher",
    "frontend",
    "backend",
    "frameworks",
    "database",
    "tools",
    "design",
  ];

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
            className="app__skills-filter-item"
            key={index}
            onClick={() => setFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
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
    </div>
  );
};

export default MotionWrap(Skills, "app__skills app__darkbg");
