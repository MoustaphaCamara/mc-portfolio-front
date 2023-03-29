import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Portfolio,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Experiences from "./container/Experiences/Experiences";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experiences />
      <Portfolio />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
