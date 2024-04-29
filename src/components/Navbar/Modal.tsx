import React, { Dispatch, FC, SetStateAction } from 'react';
import './Modal.scss';
import { navList } from '../../constants/navList.ts';

interface ModalProps {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ setToggle }) => {
  return (
    <div className="app__modal" onClick={() => setToggle(false)}>
      <ul className="app__modal-links">
        {navList.map((item: string) => (
          <li key={item}>
            <div />

            <a href={`#${item}`} onClick={() => setToggle(false)}>
              {item.replace('-', ' ')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
