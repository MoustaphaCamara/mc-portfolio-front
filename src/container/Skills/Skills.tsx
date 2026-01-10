import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';
import { urlFor } from '../../client.ts';
import useFetch from '../../hooks/useFetch.ts';
import Loader from '../../components/Loader/Loader';
import 'react-vertical-timeline-component/style.min.css';
import './Skills.scss';
import { NavList } from '../../constants/navList.ts';
import { SkillData } from '../../shared/interfaces/data.ts';
import * as Filter from '../../constants/filters.ts';
import Button from '../../components/Button.tsx';
import { Queries } from '../../constants/queries.ts';
import { useTranslation } from 'react-i18next';

const queryList: string[] = [
  Filter.Skills.All,
  Filter.Skills.Front,
  Filter.Skills.Back,
  Filter.Skills.Db,
  Filter.Skills.Framework,
  Filter.Skills.Tools,
];

const Skills = () => {
  const [filter, setFilter] = useState('backend');
  const [query, setQuery] = useState<Queries | string>(Queries.Skills);

  const { data, loading, error } = useFetch<SkillData>(query);
  if (error) console.log(error);

  useEffect(() => {
    if (filter === 'tout afficher') {
      setQuery(Queries.Skills);
    } else {
      setQuery(`*[_type == 'skills' && category == "${filter}"]`);
    }
  }, [filter]);

  const { t } = useTranslation();
  return (
    <div id={NavList.Skills}>
      <h2 className="head-text">{t('skills.title')}</h2>
      <div className="app__skills-filter">
        {queryList.map((item: string, index: number) => (
          <div key={index}>
            <Button content={item} status={filter} setStatus={setFilter} />
          </div>
        ))}
      </div>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {loading && <Loader />}
          {data?.map((skill) => (
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
      <h3 className="head-text">{t('skills.titleAdditional')}</h3>
      <div className="app__skills-complementary">
        <div className="app__skills-complementary-items">
          <p className="p-text">
            {t('skills.additionalFirstLine')}
          </p>
        </div>
        <div className="app__skills-complementary-desktop">
          <p className="p-text">
            {t('skills.additionalSecondLine')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotionWrap(Skills, 'app__skills');
