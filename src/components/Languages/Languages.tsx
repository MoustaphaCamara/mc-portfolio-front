import { images } from '../../constants';
import { useTranslation } from 'react-i18next';
import './Languages.scss';

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

const Languages = () => {
  const { i18n } = useTranslation();

  return (
    <div className="app__langs">
      <li>
        {Object.keys(languages).map((lang) => (
          <button
            className={`lang_button ${i18n.resolvedLanguage === lang ? 'active' : ''}`}
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            disabled={i18n.resolvedLanguage === lang}>
            <img
              src={languages[lang].flag}
              alt={languages[lang].nativeName}
            />
          </button>
        ))}
      </li>
    </div>
  )
}

export default Languages;