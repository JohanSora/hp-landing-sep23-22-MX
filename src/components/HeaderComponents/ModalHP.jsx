import React from "react";
import check from "../../assets/checked.webp";

const ModalHP = () => {
  return (
    <div className="hp-modal">
      <strong>¡Tus datos fueron procesados con exito!</strong>
      <img src={check} alt="hp-checked" />
      <p>
        Muchas gracias por tu registro, estarás recibiendo más información
        próximamente a través de tu correo electrónico.
      </p>
    </div>
  );
};

export default ModalHP;
