import { motion } from 'framer-motion';
import files from '../../constants/files.ts';
import './About.scss';
import { MotionWrap } from '../../wrapper';
import { NavList } from '../../constants/navList.ts';
import { aboutImage } from '../../constants/images.ts';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const selectedCV = currentLang === 'fr' ? files.cv_fr : files.cv_en;
  return (
    <div id={NavList.About}>
      <h2 className="head-text">{t('about.title')}</h2>
      <div className="app__profiles">
          <div className="app__profile-item" >
            <img src={aboutImage} alt="who-am-i" />
            <p>{t('about.description')}</p>
          </div>
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

export default MotionWrap(About, 'app__about');
