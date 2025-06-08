import './Footer.scss';
import { NavList } from '../../constants/navList.ts';
import { useTranslation } from 'react-i18next';

const currentYear = new Date().getFullYear();
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id={NavList.Contact}>
      <div className="app__footer app__darkbg app_flex">
        <div className="app__footer-contact-container">
          <h2 className="head-text">{t('contact.title')}</h2>
          <ul className="app__footer-icons-list">
            <li>
              <a
                href="https://www.linkedin.com/in/camara-moustapha/"
                target="_blank"
                rel="noreferrer">
                <span className="app__footer-icons-line"></span>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MoustaphaCamara"
                target="_blank"
                rel="noreferrer">
                <span className="app__footer-icons-line"></span>
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="mailto:cmr.mous@gmail.com">
                <span className="app__footer-icons-line"></span>
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="app__footer-copyright-container">
          <p className="p-text">©{currentYear} MC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
