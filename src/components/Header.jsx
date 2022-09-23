import React from "react";
import logohp from "../assets/logos-01_greenlake.webp";
import logoveta from "../assets/logos-02_veta.webp";
import logoteam from "../assets/logos-03_1.webp";
import FormHp from "./HeaderComponents/FormHp";
import banner from "../assets/master_landing_veta.webp";

const Header = () => {
  const logos = [logohp, logoveta, logoteam];
  return (
    <div className="container-global-header">
      <div className="upper-logos">
        {logos.map((e) => (
          <div className="logo-upper">
            <img src={e} alt={`${e}`} />
          </div>
        ))}
      </div>
      <img src={banner} alt="banner-hpe" />
      <div className="container-info-form">
        <div className="container-text-banner">
          <div className="text-banner">
            <div className="title-and-button">
              <h1>
                Storage
                <br />
                Evolve
              </h1>
              <a
                href="https://www.hpe.com/us/en/greenlake.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button-greenlake">
                  <p>
                    Descubre <strong>HPE GreenLake</strong>
                  </p>
                  <div></div>
                </button>
              </a>
            </div>
            <div className="text-event">
              <div className="text1-event">
                <p>
                  <strong>27 de octubre, 2022.</strong>
                </p>
                <strong>EVENTO PRESENCIAL</strong>
                <p>Autódromo León</p>
              </div>
              <div className="text2-event">
                <p>
                  A Sta. Ana del Conde Km 1.5, <br /> Los López Sur, 37000 León,
                  Gto.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-form-banner">
          <div className="container-form">
            <FormHp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
