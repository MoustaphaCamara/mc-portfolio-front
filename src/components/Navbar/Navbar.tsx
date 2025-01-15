import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import { images } from '../../constants';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { $SpecialObject } from 'i18next/typescript/helpers';
import { NavList } from '../../constants/navList.ts';

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
          <img src={images.logo} alt="logo-portfolio" />
        </div>
        <div className="app__navbar-links">
          <ul>
            {navList.map((item: string, index: number) => (
              <li className="app__flex" key={`link-${item}`}>
                <div />
                <a href={`#${navListIds[index]}`}>{item.replace('-', ' ')}</a>
              </li>
            ))}
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
