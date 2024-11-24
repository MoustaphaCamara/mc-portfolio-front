import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import { images } from '../../constants';
import { navList } from '../../constants/navList.ts';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';

// todo : styling of buttons & translate title enums
const langs = {
  fr: { nativeName: 'FR'},
  en: { nativeName: 'EN'},
  es: { nativeName: 'ES'},
};

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [navTop, setNavTop] = useState<number>(0);
  const lastScroll = useRef<number>(0);

  useEffect((): void => {
    window.addEventListener('scroll', (): void => {
      if (window.scrollY > lastScroll.current) {
        setNavTop(-70);
      } else {
        setNavTop(0);
      }
      lastScroll.current = window.scrollY;
    });
  }, []);

  const { i18n } = useTranslation();
  return (
    <div>
      <div
        className="app__navbar"
        style={{ top: navTop, transition: 'all 1s ease' }}>
        <div className="app__navbar-logo">
          <img src={images.logo as string} alt="logo-portfolio" />
        </div>
        <div className="app__navbar-links">
          <ul>
            {navList.map((item: string) => (
              <li className="app__flex" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item.replace('-', ' ')}</a>
              </li>
            ))}
            <li>
                {Object.keys(langs).map((lang) => (
                  <button type="submit" key={lang} onClick={() => i18n.changeLanguage(lang)}
                          disabled={i18n.resolvedLanguage === lang}>
                    {langs[lang].nativeName}
                  </button>
                ))}
            </li>
          </ul>
        </div>
        <div className="app__navbar-burger">
          <i className="fa-solid fa-bars" onClick={() => setToggle(true)}></i>
        </div>
      </div>
      {toggle && <Modal setToggle={setToggle} />}
    </div>
  );
};

export default Navbar;
