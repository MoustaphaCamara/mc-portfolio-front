import React from 'react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsPersonWorkspace } from 'react-icons/bs';
import { IoLogoLaravel, IoLogoReact } from 'react-icons/io5';
import { GiRobe } from 'react-icons/gi';
import { MdVaccines } from 'react-icons/md';

import './Experiences.scss';
import useFetch from '../../hooks/useFetch.ts';
import Loader from '../../components/Loader/Loader';
import { SanityData } from '../../shared/interfaces/data.ts';
import { Queries } from '../../constants/queries.ts';

const companyIcons = {
  'bsOft.fr': <IoLogoReact />,
  'Ponsard & Dumas': <GiRobe />,
  'MSD Vaccins': <MdVaccines />,
  HelloCSE: <IoLogoLaravel />,
  'ACTA (Arc Europe)': <BsPersonWorkspace />,
};

const Experiences = () => {
  const { data, loading, error } = useFetch<Queries>(Queries.EXPERIENCES);
  if (error) console.log(error);

  return (
    <div id="experiences">
      <h2 className="head-text">Expériences</h2>
      <div className="app__skills-exp">
        <VerticalTimeline>
          {loading && <Loader />}
          {data?.map((experience: SanityData, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'var(--purple-color)',
                color: '#fff',
              }}
              contentArrowStyle={{
                borderRight: '16px solid  var(--purple-color)',
              }}
              date={experience.year}
              iconStyle={{
                background: 'var(--light-purple-color)',
                color: '#fff',
              }}
              icon={companyIcons[experience.company]}>
              <div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  key={index}>
                  <h3 className="vertical-timeline-element-title">
                    {experience.company}
                  </h3>
                  <h4 className="bold-text">{experience.occupation}</h4>
                  <span className="bold-text">{experience.contract}</span>
                  <p className="p-text"> {experience.description}</p>
                </motion.div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Experiences;
