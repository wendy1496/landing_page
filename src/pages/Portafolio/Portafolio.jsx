import React from 'react'
import todoImg from '../../assets/img/todo-image.png'
import weatherImg from '../../assets/img/weather-image.png'
import api from '../../assets/img/API.png'
import landing from '../../assets/img/api-image.png'
import './Portafolio.css'

export const Portfolio = () => {
  const projects = [{
    title: 'API Clima',
    img: weatherImg,
    description: 'Interfaz sencilla para la consulta y detalle sobre el clima de una ciudad mediante una predicción meteorológica',
    preview: 'https://632fe869b515e81e06a320b5--luminous-semifreddo-306f87.netlify.app/',
    link: 'https://github.com/wendy1496/Apli_Clima'
  }, {
    title: 'To Do List',
    img: todoImg,
    description: 'Aplicación para la gestión y creación de distintas tareas, teniendo como detalle su fecha de realización y la decripción de la actividad a realizar',
    preview: 'https://632fe76e08aa9d327d57e02e--helpful-gelato-d69f5b.netlify.app/',
    link: 'https://github.com/wendy1496/toDoList'
  }, {
    title: 'API Heroes',
    img: api,
    description: 'API para la consulta de distintos héroes del Universo Cinematográfico de Marvel',
    preview: 'https://632fe8d59dc9972951f7c478--tiny-malasada-ebfa09.netlify.app/',
    link: 'https://github.com/wendy1496/api-heroes'
  }, {
    title: 'Landing Page',
    img: landing,
    description: 'Proyecto final, landing page personal',
    preview: 'https://glittering-boba-1b662e.netlify.app/',
    link: 'https://github.com/wendy1496/landing_page'
  }]

  const listProjects = projects.map((project, index) => (<div className='projects__items' key={index}>
    <figure className='projects__image'>
      <img src={project.img} alt={project.title} />
    </figure>
    <div className='projects__description'>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className='projects__actions'>
        <a href={project.preview} target="_blank" rel="noopener noreferrer">Vista previa</a>
        <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>))

  return (
    <section className='projects'>
      <h1>Portafolio</h1>
      <div className='projects__list'>
        {listProjects}
      </div>
    </section>
  )
}
