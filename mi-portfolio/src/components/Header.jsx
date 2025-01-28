import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Mauro G. San Pedro | Desarrollador Full Stack</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre Mí</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/skills">Habilidades</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;