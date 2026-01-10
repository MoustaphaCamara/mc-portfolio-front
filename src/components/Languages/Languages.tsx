import { Dispatch, FC, SetStateAction } from 'react';
import { flagFr, flagEn, flagEs } from '../../constants/images';
import { useTranslation } from 'react-i18next';
import './Languages.scss';

interface Language {
  nativeName: string;
  flag: string;
}

interface Languages {
  [key: string]: Language;
}

interface LanguagesProps {
  isMobile: boolean;
}

// TODO: make it a dropdown and place it in the navbar
const languages: Languages = {
  fr: { nativeName: 'FR', flag: flagFr },
  en: { nativeName: 'EN', flag: flagEn },
  es: { nativeName: 'ES', flag: flagEs },
};

const Languages: FC<LanguagesProps> = ({ isMobile }) => {
  const { i18n } = useTranslation();
  return (
    <div className={`${isMobile ? 'app__langs_mobile' : 'app__langs'}`}>
      <li>
        {Object.keys(languages).map((lang) => (
          <button
            className={`lang_button ${i18n.resolvedLanguage === lang ? 'active' : ''}`}
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            disabled={i18n.resolvedLanguage === lang}>
            <img src={languages[lang].flag} alt={languages[lang].nativeName} />
          </button>
        ))}
      </li>
    </div>
  );
};

export default Languages;
