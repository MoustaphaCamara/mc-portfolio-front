import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';
import { urlFor } from '../../client.ts';
import useFetch from '../../hooks/useFetch.ts';
import Loader from '../../components/Loader/Loader';
import 'react-vertical-timeline-component/style.min.css';
import './Skills.scss';
import { NavList } from '../../constants/navList.ts';
import { SanityData } from '../../constants/data.ts';
import * as Filter from '../../constants/filters.ts';
import Button from '../../components/Button.tsx';
import { Queries } from '../../constants/queries.ts';

const queryList: string[] = [
  Filter.Skills.ALL,
  Filter.Skills.FRONT,
  Filter.Skills.BACK,
  Filter.Skills.DB,
  Filter.Skills.FRAMEWORK,
  Filter.Skills.TOOLS,
  Filter.Skills.DESIGN,
];
const Skills = () => {
  const [filter, setFilter] = useState('backend');
  const [query, setQuery] = useState<Queries | string>(Queries.SKILLS);

  const { data, loading, error } = useFetch(query);
  if (error) console.log(error);

  useEffect(() => {
    if (filter === 'tout afficher') {
      setQuery(Queries.SKILLS);
    } else {
      setQuery(`*[_type == 'skills' && category == "${filter}"]`);
    }
  }, [filter]);

  return (
    <div id={NavList.SKILLS}>
      <h2 className="head-text">Compétences</h2>
      <div className="app__skills-filter">
        {queryList.map((item: string, index: number) => (
          <Button
            key={index}
            content={item}
            status={filter}
            setStatus={setFilter}
          />
        ))}
      </div>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {loading && <Loader />}
          {data?.map((skill: SanityData) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [-40, 0] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}>
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}>
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

export default MotionWrap(Skills, 'app__skills app__darkbg');
