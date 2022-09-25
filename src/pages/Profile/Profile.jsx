import React from "react";
import photo from '../../assets/img/image.png'
import './Profile.css'

export const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__photo">
        <img src={photo} alt="Personal profile" loading="lazy" />
      </div>
      <div className="profile__description">
        <h1>Perfil</h1>
        <p>
        Desarrolladora web con 2 años de experiencia en manejo de HTML, CSS, JavaScript, Bootstrap y PHP, tengo conocimiento en base de datos SQL y NoSQL. Encontré mi vocación un día que decidí hacer algo diferente y es ser docente, actualmente me desempeño como docente de cátedra en el Tecnológico de Antioquia, enseño asignaturas de desarrollo con java y lenguajes web.
        </p>
      </div>
    </section>
  );
};
