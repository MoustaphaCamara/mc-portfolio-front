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
import { images } from '../../constants';

const About = () => {
  const { data, loading, error } = useFetch<AboutData>(Queries.About);
  if (error) console.log(error);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const selectedCV = currentLang === 'fr' ? files.cv_fr : files.cv_en;

  return (
    <div id={NavList.About}>
      <h2 className="head-text">{t('about.title')}</h2>
      <div className="app__profiles">
        {loading && <Loader />}
        {data?.map((item, index: number) => (
          <div className="app__profile-item" key={index}>
            <img src={aboutImage} alt="who-am-i" />
            <p>{t('about.description')}</p>
          </div>
        ))}
        <div className="curriculum">
          <motion.a
            href={selectedCV as string}
            target="_blank"
            className="btn btn-action"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            {t('about.curriculum')}
          </motion.a>
        </div>
      </div>
    </div>
  );
};
export default MotionWrap(About, 'app__about app_darkbg');
