import { Dispatch, FC, SetStateAction } from 'react';
import './Modal.scss';
import { useTranslation } from 'react-i18next';
import { $SpecialObject } from 'i18next/typescript/helpers';


interface ModalProps {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ setToggle }) => {
  const { i18n } = useTranslation();
  const navList: $SpecialObject = i18n.t('navList', { returnObjects:true });
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
