import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h1>Mauro G. San Pedro | Desarrollador Full Stack</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>Sobre Mí</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Proyectos</Link></li>
          <li><Link to="/skills" onClick={toggleMenu}>Habilidades</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;