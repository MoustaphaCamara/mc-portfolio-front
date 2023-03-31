import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Hobbies.scss";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const query = "*[_type == 'hobbies']";
    client.fetch(query).then((data) => {
      setHobbies(data);
    });
  }, []);
  const current = hobbies[currentIndex];

  return (
    <div id="hobbies">
      <h2 className="head-text">Hobbies</h2>
      {hobbies.length && (
        <>
          <div className="app__hobbies-item app__flex">
            <img src={urlFor(current.imgUrl)} alt="hobby" />
            <div className="app__hobbies-content">
              <h4 className="bold-text">{current.name}</h4>
              <p className="p-text">{current.description}</p>
            </div>
          </div>
          <div className="app__hobbies-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? hobbies.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === hobbies.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default MotionWrap(Hobbies, "app__hobbies");
