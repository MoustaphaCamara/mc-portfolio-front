import {About, Experiences, Footer, Header, Hobbies, Portfolio, Skills} from "./container";
import {Navbar} from "./components";
import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Header/>
            <About/>
            <Skills/>
            <Experiences/>
            <Portfolio/>
            <Hobbies/>
            <Footer/>
        </div>
    );
};

export default App;
