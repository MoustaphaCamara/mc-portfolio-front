import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TbCircleLetterB } from "react-icons/tb";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'experiences']";
    const skillsQuery = "*[_type == 'skills']";

    // get Experiencs
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
    // get Skills
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div id="competences">
      <h2 className="head-text">Compétences & Expérience</h2>

      <div className="app__skills-container">
        {/* COMPETENCES */}
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

        {/* EXPERIENCES ENTREPRISE */}
        <motion.div className="app__skills-exp">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<TbCircleLetterB />}
              iconClassName={"test"}
            >
              <h3 className="vertical-timeline-element-title">bsOft.fr</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Développeur web
              </h4>
              <ul>
                <li>
                  Création d'interface utilisateur (React/TypeScript) avec
                  Yeoman
                </li>
                <li>Intégration d'applications via API</li>
                <li>
                  POC : application d'onglet dans Microsoft Teams (avec SSO)
                </li>
                <li>
                  Rédaction documentation & spécifications pour maintenabilité
                  du projet
                </li>
                <li>
                  Création & intégration d'un bot discord en NodeJs/Express
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<TbCircleLetterB />}
              iconClassName={"test"}
            >
              <h3 className="vertical-timeline-element-title">bsOft.fr</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Développeur web
              </h4>
              <ul>
                <li>
                  Création d'interface utilisateur (React/TypeScript) avec
                  Yeoman
                </li>
                <li>Intégration d'applications via API</li>
                <li>
                  POC : application d'onglet dans Microsoft Teams (avec SSO)
                </li>
                <li>
                  Rédaction documentation & spécifications pour maintenabilité
                  du projet
                </li>
                <li>
                  Création & intégration d'un bot discord en NodeJs/Express
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {/* {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.experience.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      key={work.name}
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                      data-tooltip-place="top"
                      data-tooltip-variant="light"
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip id={work.name} className="skills-tooltip" />
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </div>
  );
};

export default MotionWrap(Skills, "app__skills app__darkbg");
