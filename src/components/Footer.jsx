import React from "react";
import email from "../assets/mensaje.webp";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-register">
        <div className="register">
          <button onClick={() => window.scrollTo(0, 0)}>REGISTRO</button>
          <p>Dudas y comentarios:</p>
          <p className="email-text">administracion@solucionesveta.com.mx</p>
          <img src={email} alt="email-hp" />
        </div>
      </div>
      <div className="privacity">
        <p>Aviso de privacidad</p>
      </div>
    </div>
  );
};

export default Footer;
