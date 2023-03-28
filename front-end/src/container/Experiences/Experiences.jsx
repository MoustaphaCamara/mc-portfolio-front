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
import "./Experiences.scss";
import { images } from "../../constants";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'experiences']";
    // get Experiencs
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <div>
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
                Création d'interface utilisateur (React/TypeScript) avec Yeoman
              </li>
              <li>Intégration d'applications via API</li>
              <li>
                POC : application d'onglet dans Microsoft Teams (avec SSO)
              </li>
              <li>
                Rédaction documentation & spécifications pour maintenabilité du
                projet
              </li>
              <li>Création & intégration d'un bot discord en NodeJs/Express</li>
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
                Création d'interface utilisateur (React/TypeScript) avec Yeoman
              </li>
              <li>Intégration d'applications via API</li>
              <li>
                POC : application d'onglet dans Microsoft Teams (avec SSO)
              </li>
              <li>
                Rédaction documentation & spécifications pour maintenabilité du
                projet
              </li>
              <li>Création & intégration d'un bot discord en NodeJs/Express</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {experiences?.map((experience) => (
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
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default MotionWrap(Experiences, "app__experiences app__darkbg");
