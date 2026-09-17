import { motion } from 'framer-motion';
import './About.scss';
import { MotionWrap } from '../../wrapper';
import { NavList } from '../../constants/navList.ts';
import { aboutImage } from '../../constants/images.ts';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const cvLang =
    currentLang === 'fr' ? 'fr'
      : currentLang === 'en'
        ? 'en' : 'es';

  const cvUrl = `https://moustaphacamara.github.io/cv/?lang=${cvLang}`;

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
            href={cvUrl}
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
