import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { images } from "../../constants";
import "./Test.scss";

const Test = () => {
  return (
    <div className="caroucontainer">
      <Carousel centerMode width="700px">
        <div className="carousel">
          <img src={images.about01} />
          <p className="legend">Legend 1</p>
        </div>
        <div className="carousel">
          <img src={images.about01} />

          <p className="legend">Legend 2</p>
        </div>
        <div className="carousel">
          <img src={images.about01} />

          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Test;
