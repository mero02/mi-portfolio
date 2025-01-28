import React from 'react';

const Skills = () => {
  const frontend = ['React','HTML', 'CSS', 'Bootstrap', 'Chakra UI', 'JavaScript'];
  const backend = ['FastAPI', 'Flask', 'Python'];
  const bases_de_datos = ['SQLite', 'PostgreSQL'];
  const control_versiones = ['Git', 'GitHub'];
  const metodologias = ['Scrum', 'Kanban'];
  const habilidades_blandas = ['Analisis de requisitos', 'Trabajo en equipo', 'Comunicación', 'Proactividad', 'Adaptabilidad', 'Resolución de problemas'];
  
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <h3>Frontend:</h3>
      <ul>
        {frontend.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Backend:</h3>
      <ul>
        {backend.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Bases de datos:</h3>
      <ul>
        {bases_de_datos.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Control de versiones:</h3>
      <ul>
        {control_versiones.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Metodologías:</h3>
      <ul>
        {metodologias.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Habilidades blandas:</h3>
      <ul>
        {habilidades_blandas.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;