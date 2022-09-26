import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Modal } from "@mantine/core";
import ModalHP from "./ModalHP";
import Recaptcha from "react-google-invisible-recaptcha";

const FormHp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [info, setInfo] = useState([]);

  const [modal, setModal] = useState(false);

  const [resolved, setResolved] = useState(false);

  const refRecaptcha = useRef(null);

  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1qM3L1VjPotdgtcTvOSfAxsixCmJB4FbnTxoyioRNkbE/1"
      )
      .then((res) => setInfo(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    refRecaptcha.current.execute();

    const formdata = new FormData();
    formdata.append("Nombre", name);
    formdata.append("Apellidos", lastname);
    formdata.append("Empresa", company);
    formdata.append("Cargo", occupation);
    formdata.append("Correo_empresarial", email);
    formdata.append("telefono", phone);

    axios
      .post("https://hooks.zapier.com/hooks/catch/666990/bc5qvkm/", formdata)
      .catch(() =>
        alert("Algo ha salido mal a la hora de enviar el formulario")
      );

    const newUser = {
      Nombre: name,
      Apellidos: lastname,
      Empresa: company,
      Cargo: occupation,
      Correo_empresarial: email,
      telefono: phone,
    };

    setInfo([...info, newUser]);
    setModal(true);
  };

  const onResolved = () => {
    alert(
      name +
        ": Recaptcha resolved with response: " +
        refRecaptcha.current.callbacks.getResponse()
    );
    setResolved(true);
  };

  return (
    <>
      <Modal
        opened={modal}
        onClose={() => {
          setName("");
          setLastname("");
          setOccupation("");
          setCompany("");
          setEmail("");
          setPhone("");
          setModal(false);
        }}
      >
        <ModalHP />
      </Modal>
      <form onSubmit={handleSubmit}>
        <p>Regístrese ahora</p>
        <label htmlFor="text">
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="text">
          Apellidos:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        <label htmlFor="text">
          Empresa:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </label>
        <label htmlFor="text">
          Cargo:
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          />
        </label>
        <label htmlFor="email">
          Correo empresarial:
          <input
            type="email"
            value={email}
            onBlur={() => {
              info
                .map(({ Correo_empresarial }) => Correo_empresarial)
                .includes(email) &&
                (alert("¡Ups!,este usuario ya está registrado"),
                setName(""),
                setOccupation(""),
                setCompany(""),
                setEmail(""),
                setNumber(""));
            }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="text">
          Teléfono Móvil:
          <input
            type="tel"
            pattern="[0-9]{10}"
            value={phone}
            maxLength={10}
            minLength={10}
            onChange={(e) => {
              if (
                /\d/.test(e.target.value) !== false ||
                e.target.value === ""
              ) {
                return setPhone(e.target.value);
              }
            }}
            required
          />
        </label>
        <div className="captcha-and-button">
          <Recaptcha
            ref={refRecaptcha}
            sitekey="6LcqNDEiAAAAAP1OPWbhWUJDL0Bjj5QUl1BsfUGw"
            onResolved={onResolved}
          />
          <button type="submit">ENVIAR</button>
        </div>
      </form>
    </>
  );
};

export default FormHp;
