import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
        {/* item 1 */}
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "gray" }}>
          <CardMedia
            component="img"
            alt="test"
            height="120"
            image={images.figma}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Front-end
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              <img src={images.html} alt="" width="50px" />
              <img src={images.css} alt="" width="50px" />
              <img src={images.javascript} alt="" width="50px" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque
              mollitia velit explicabo perferendis blanditiis molestiae enim
              reiciendis impedit! Minus.
            </Typography>
          </CardContent>
        </Card>
        {/* eo item1 */}
        <div className="app__skills-item">
          <h4 className="head-text">front</h4>
          <div className="icons-container">
            <img src={images.react} alt="" />
          </div>
        </div>
        <div className="app__skills-item">
          <h4 className="head-text">back</h4>
          <div className="icons-container">
            <img src={images.react} alt="" />
          </div>
        </div>
        <div className="app__skills-item">
          <h4 className="head-text">framework-libs</h4>
          <div className="icons-container">
            <img src={images.react} alt="" />
          </div>
        </div>
        <div className="app__skills-item">
          <h4 className="head-text">server-stack & outils</h4>
          <div className="icons-container">
            <img src={images.react} alt="" />
          </div>
        </div>

        <div className="app__skills-item">
          <h4 className="head-text">design</h4>
          <div className="icons-container">
            <img src={images.react} alt="" />
          </div>
        </div>
        {/* COMPETENCES */}
        {/* <motion.div className="app__skills-list">
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
        </motion.div> */}

        {/* EXPERIENCES ENTREPRISE
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
          </VerticalTimeline> */}
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
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default MotionWrap(Skills, "app__skills app__darkbg");
