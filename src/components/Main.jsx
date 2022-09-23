import React from "react";
import text3 from "../assets/Componente-1-–-7.webp";
import text2 from "../assets/aaas.webp";
import image1 from "../assets/rec-nube.png";
import image2 from "../assets/rec-hoja.png";
import image3 from "../assets/rec-pant.png";

const Main = () => {
  return (
    <div className="container-global-main">
      <div className="text1-main">
        <p>
          El almacenamiento como servicio brinda la agilidad de las operaciones
          en la nube y la flexibilidad de la experiencia de propiedad, a las
          aplicaciones y los datos, independientemente de donde estén, lo que
          permite la transformación digital de la empresa para que puedas
          centrarte en acelerar la obtención de resultados, y no en gestionar la
          infraestructura.
        </p>
      </div>
      <div className="text2-main">
        <img src={text2} alt="background-text2" />
        <p>
          <strong>
            VETA, empresa con más de 15 años de experiencia en el sector de
            Tecnologías de Información, y TEAM,{" "}
          </strong>{" "}
          líder en el mayoreo de valor e integrador de soluciones de tecnología
          especializada, te invitan a este evento donde conocerás cómo acelerar
          la modernización de tu empresa basada en datos, desde el extremo hasta
          la nube.
        </p>
      </div>
      <img src={text3} alt="image" />
      <div className="container-list">
        <div className="images-list">
          <ol>
            <div className="item-list">
              <img src={image1} alt="nube-hp" />
              <li>Simplifica las operaciones con agilidad en la nube.</li>
            </div>
            <div className="item-list">
              <img src={image2} alt="hoja-hp" />
              <li>Consumo flexible como Servicio y bajo demanda.</li>
            </div>
            <div className="item-list">
              <img src={image3} alt="pantall-hp" />
              <li>
                Ejecuta cualquier aplicación, sin comprometer tus recursos.
              </li>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Main;
