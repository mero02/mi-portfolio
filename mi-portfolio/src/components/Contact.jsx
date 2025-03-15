import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <div className="contact-message">
        <p>
          ¿Tienes alguna pregunta, propuesta o simplemente quieres charlar? ¡No dudes en contactarme! 
          Estoy siempre abierto a nuevas oportunidades, colaboraciones o simplemente a conocer gente interesante.
        </p>
        <p>
          Completa el formulario a continuación y me pondré en contacto contigo lo antes posible. ¡Espero tu mensaje!
        </p>
      </div>
      <form action="https://formspree.io/f/mbldolvb" method="POST">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;