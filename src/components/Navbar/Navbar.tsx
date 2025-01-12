import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import { images } from '../../constants';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { $SpecialObject } from 'i18next/typescript/helpers';
import { NavList } from '../../constants/navList.ts';

interface Language {
  nativeName: string;
  flag: string;
}

interface Languages {
  [key: string]: Language;
}

const languages: Languages = {
  fr: { nativeName: 'FR', flag: images.flagFr },
  en: { nativeName: 'EN', flag: images.flagEn },
  es: { nativeName: 'ES', flag: images.flagEs },
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
  const navList: $SpecialObject = i18n.t('navList', { returnObjects:true });
  const navListIds = Object.values(NavList);
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
            {navList.map((item: string, index: number) => (
              <li className="app__flex" key={`link-${item}`}>
                <div />
                <a href={`#${navListIds[index]}`}>{item.replace('-', ' ')}</a>
              </li>
            ))}
            <li>
              {Object.keys(languages).map((lang) => (
                <button
                  className={`${i18n.resolvedLanguage === lang ? 'active' : ''}`}
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  disabled={i18n.resolvedLanguage === lang}>
                    <img
                      src={languages[lang].flag}
                      alt={languages[lang].nativeName}
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        margin: '0 5px',
                      }}
                    />
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
