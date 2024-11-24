import {
  About,
  Experiences,
  Footer,
  Header,
  Hobbies,
  Portfolio,
  Skills,
} from './container';
import { Navbar } from './components';
import './App.scss';
import { useTranslation } from 'react-i18next';

const langs = {
  fr: { nativeName: 'French'},
  en: { nativeName: 'English'},
  es: { nativeName: 'Spanish'},
};

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="head-text">
        {t('navbar')}
        {Object.keys(langs).map((lang) => (
          <button type="submit" key={lang} onClick={() => i18n.changeLanguage(lang)}
                  disabled={i18n.resolvedLanguage === lang}>
            {langs[lang].nativeName}
          </button>
        ))}
      </div>
      <About />
      <Skills />
      <Experiences />
      <Portfolio />
      <Hobbies />
      <Footer />
    </div>
  );
};

export default App;
