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
import { ExperienceData } from '../../shared/interfaces/data.ts';
import { Queries } from '../../constants/queries.ts';
import { DiPhp } from 'react-icons/di';
import { useTranslation } from 'react-i18next';
import { NavList } from '../../constants/navList.ts';

const companyIcons = {
  'Deltablot':<DiPhp />,
  'bsOft.fr': <IoLogoReact />,
  'Ponsard & Dumas': <GiRobe />,
  'MSD Vaccins': <MdVaccines />,
  'HelloCSE': <IoLogoLaravel />,
  'ACTA (Arc Europe)': <BsPersonWorkspace />,
};

const Experiences = () => {
  const { data, loading, error } = useFetch<ExperienceData>(Queries.Experiences);
  if (error) console.log(error);
  const { t } = useTranslation();
  return (
    <div id={NavList.Experiences}>
      <h2 className="head-text">{t('experiences.title')}</h2>
      <div className="app__skills-exp">
        <VerticalTimeline>
          {loading && <Loader />}
          {data?.map((experience: ExperienceData, index) => (
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
