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
import Languages from './components/Languages/Languages.tsx';

const App = () => {
  return (
    <div className="app">
      <Languages />
      <Navbar />
      <Header />
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
