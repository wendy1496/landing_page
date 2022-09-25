import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <section className='contact'>
      <h1>Contacto</h1>
      <div className='contact__form'>
        <input className='contact__form-bg-gray' type="text" name="fullName" placeholder='Nombre completo' autoComplete='off' />
        <input className='contact__form-bg-gray' type="email" name="userEmail" placeholder='Correo electrónico' autoComplete='off' />
        <input className='contact__form-bg-gray' type="tel" name="userPhone" placeholder='Número de celular' autoComplete='off' />
        <textarea className='contact__form-bg-gray' name="userMessage" placeholder='Mensaje'></textarea>
        <button>Enviar mensaje</button>
      </div>
    </section>
  )
}
