import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper/";
import { client } from "../../client";
import { images } from "../../constants";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  // permet de destructurer (formData.name)

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // look further into this, un peu avancée comme syntaxe
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };
    // name:name, email;email...
    // send data to sanity client
    // client.create(contact);
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Allons prendre un café et discutons</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:cmr.mous@gmail.com" className="p-text">
            cmr.mous@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+33 (7) 01 02 03 04" className="p-text">
            +33 (7) 01 02 03 04
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Ton nom"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Ton email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Ton message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Merci pour votre message !</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
