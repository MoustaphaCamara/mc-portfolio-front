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
      <h2 className="head-text">Contactez moi</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:cmr.mous@gmail.com" className="p-text">
            cmr.mous@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <i className="fa-brands fa-linkedin"></i>
          <img src={images.linkedin} alt="mobile" />
          <a href="tel:+33 (7) 01 02 03 04" className="p-text">
            +33 (7) 01 02 03 04
          </a>
        </div>
      </div>
      <div className="copyright">
        <p className="p-text">@2023 Moustapha</p>
        <p className="p-text">Tous droits reservés</p>
      </div>
    </>
  );
};
// export default MotionWrap(Footer, "app__footer app__whitebg");

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
