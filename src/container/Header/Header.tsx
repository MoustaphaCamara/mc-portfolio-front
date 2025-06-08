import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';
import { react, laravel, php, vue, profile } from '../../constants/images';
import './Header.scss';
import { NavList } from '../../constants/navList.ts';
import { useTranslation } from 'react-i18next';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const technologies: string[] = [
  react,
  laravel,
  php,
  vue,
];

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="app__header app__flex" id={NavList.Homepage}>
      <motion.div
        transition={{ duration: 0.5 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>{t('header.hello')}</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">{t('header.welcome')}</p>
              <h1 className="head-text">{t('header.title')}</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">{t('header.occupation')}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        whileInView={{ opacity: [0, 1] }}>
        <img src={profile} alt="profile-bg" />
      </motion.div>

      <motion.div
        className="app__header-circles"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}>
        {technologies.map((technology, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={technology} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrap(Header, 'app__darkbg');
