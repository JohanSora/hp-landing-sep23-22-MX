import React from "react";

const FormHp = () => {
  return (
    <form onSubmit={() => console.log("aaaaaaaa")}>
      <p>Regístrese ahora</p>
      <label htmlFor="text">
        Nombre:
        <input type="text" />
      </label>
      <label htmlFor="text">
        Apellidos:
        <input type="text" />
      </label>
      <label htmlFor="text">
        Empresa:
        <input type="text" />
      </label>
      <label htmlFor="text">
        Cargo:
        <input type="text" />
      </label>
      <label htmlFor="text">
        Correo empresarial:
        <input type="text" />
      </label>
      <label htmlFor="text">
        Teléfono Móvil:
        <input type="text" />
      </label>
      <div className="captcha-and-button">
        <button type="submit">ENVIAR</button>
      </div>
    </form>
  );
};

export default FormHp;
