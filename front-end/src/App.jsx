import React from "react";

import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
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
      <Work />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
