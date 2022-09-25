import React from "react";
import "./Home.css";
import image from "../../assets/img/imagen.png";

export const Home = () => {
  return (
    <section className="home">
      <div className="home__presentation">
        <h1>¡Hola!</h1>
        <h2>Soy Wendy</h2>
        <p>
          Soy Ingeniera en software y docente del Tecnológico de Antioquia, Institución universitaria
        </p>
      </div>
      <div className="home__image">
        <img src={image} alt="Presentation" loading="lazy" />
      </div>
    </section>
  );
};
