import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import { GiRobe } from "react-icons/gi";
import { MdVaccines } from "react-icons/md";
import { MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Experiences.scss";
// import { images } from "../../constants";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'experiences'] | order(year desc)";
    client.fetch(query).then((data) => {
      setExperiences(data);
      console.log(data);
    });
  }, []);

  return (
    <div id="experiences">
      <h2 className="head-text">Expériences</h2>
      <motion.div className="app__skills-exp">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "var(--purple-color)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "16px solid  var(--purple-color)",
              }}
              date={experience.year}
              iconStyle={{
                background: "var(--light-purple-color)",
                color: "#fff",
              }}
              icon={
                experience.company === "bsOft.fr" ? (
                  <IoLogoReact />
                ) : experience.company === "Ponsard & Dumas" ? (
                  <GiRobe />
                ) : experience.company === "MSD Vaccins" ? (
                  <MdVaccines />
                ) : (
                  <BsPersonWorkspace />
                )
              }
              iconClassName={"test"}
            >
              {/* content */}
              <div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  key={index}
                >
                  <h3 className="vertical-timeline-element-title">
                    {experience.company}
                  </h3>
                  <h4 className="bold-text">{experience.occupation}</h4>
                  <p className="p-text">{experience.description}</p>
                </motion.div>
                {/* end of content */}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};
export default MotionWrap(Experiences, "app__experiences app__darkbg");
