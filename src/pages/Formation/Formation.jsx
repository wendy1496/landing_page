import React from 'react'
import './Formation.css'

export const Formation = () => {
  const studies = [
  {
    title: 'Ingeniera en software',
    from: 'Tecnológico de Antioquia',
    date: '2015 - 2022'
  },
  {
    title: 'Curso especializado frontend',
    from: 'Compuestudio',
    date: '2020 - 2021'
  },
  {
    title: 'Curso básico de Illustrator',
    from: 'Platzi',
    date: '2020'
  },
  {
    title: 'Curso Frontend con React JS',
    from: 'Fundación Internacional María Luisa de Moreno.',
    date: 'Actualmente'
  }]

  const listStudies = studies.map((study, index) => (<div className='formation__items' key={index}>
    <h2>{study.title}</h2>
    {study.from ? <p>{study.from}</p> : null}
    {study.date ? <h3>{study.date}</h3> : null}
  </div>))

  return (
    <section className='formation'>
      <h1>Estudios</h1>
      <div className='formation__list'>
        {listStudies}
      </div>
    </section>
  )
}
