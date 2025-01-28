import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa los iconos

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        {/* Icono de correo */}
        <a
          href="mailto:mero2sp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar correo"
        >
          <FaEnvelope className="icon" />
        </a>

        {/* Icono de LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mauro-san-pedro/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>

        {/* Icono de GitHub */}
        <a
          href="https://github.com/mero02"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon" />
        </a>
      </div>

      {/* Texto de derechos de autor */}
      <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;