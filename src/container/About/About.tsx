import { motion } from 'framer-motion';
import files from '../../constants/files.ts';
import './About.scss';
import { urlFor } from '../../client.ts';
import { MotionWrap } from '../../wrapper';
import useFetch from '../../hooks/useFetch.ts';
import Loader from '../../components/Loader/Loader';
import { NavList } from '../../constants/navList.ts';
import { AboutData } from '../../shared/interfaces/data.ts';
import { Queries } from '../../constants/queries.ts';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { data, loading, error } = useFetch<AboutData>(Queries.About);
  if (error) console.log(error);
  const { t } = useTranslation();

  return (
    <div id={NavList.About}>
      <h2 className="head-text">{t('about.title')}</h2>
      <div className="app__profiles">
        {loading && <Loader />}
        {data?.map((item, index: number) => (
          <div className="app__profile-item" key={index}>
            <img src={urlFor(item.imgUrl)} alt="who-am-i" />
            <p>{item.description}</p>
          </div>
        ))}
        <div className="curriculum">
          <motion.a
            href={files.cv_fr as string}
            target="_blank"
            className="btn btn-action"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}>
            {t('about.curriculumFR')}
          </motion.a>
          <motion.a
            href={files.cv_en as string}
            target="_blank"
            className="btn btn-action"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}>
            {t('about.curriculumEN')}
          </motion.a>
        </div>
      </div>
    </div>
  );
};
export default MotionWrap(About, 'app__about app_darkbg');
