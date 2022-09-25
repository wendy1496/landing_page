import React from 'react'
import photo from '../../assets/img/seo.png'
import photo2 from '../../assets/img/aprender-en-linea.png'
import './Experience.css'

export const Experience = () => {
  return (
    <section className='experience'>
      <h1>Experiencia</h1>
      <div className='experience__list'>
        <div className='experience__items'>
        <img src={photo} alt="Personal profile" loading="lazy" />

          <h2>Desarrolladora Web</h2>
          <p>Actualmente, laboro como desarrolladora web, realizando aplicativos para resolver y agilizar procesos a áreas específicas del Tecnológico de Antioquia.</p>
        </div>
      </div>
      <div className='experience__list'>
        <div className='experience__items'>
        <img src={photo2} alt="Personal profile" loading="lazy" />

          <h2>Docente de cátedra</h2>
          <p>También laboro como docente de cátedra en el TdeA, dicto materias como Construcción de software II que abarca temas realacionados a POO y construcción de software III, en el cual se ven temas de desarrollo web.</p>
        </div>
      </div>
    </section>
  )
}
