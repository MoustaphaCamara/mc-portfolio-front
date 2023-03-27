import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
  Test,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      {/* <Testimonials /> */}
      <Footer />
      {/* <Test /> */}
    </div>
  );
};

export default App;
