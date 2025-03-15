import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: ' 🏊 Ecommerce de Productos para Piscinas (Personal, 2025)',
      description: 'Desarrollo completo de un ecommerce para la venta de piscinas y productos relacionados, con integración de un panel administrativo para la gestión de productos, categorías y reportes de ventas con gráficos.',
      Tecnologías: 'FastAPI, React, Bootstrap',
      Repositorio: 'https://github.com/FranciscoTerron/ma-piscinas',
    },
    {
      title: '🧾 Gestión de Finanzas Personales (Personal, 2025)',
      description: 'Desarrollé una aplicación web completa para la gestión de finanzas personales, con integracion de reportes mensuales. Desde el diseño de la interfaz hasta la implementación del backend y la base de datos.',
      Tecnologías: 'FastAPI, React',
      Repositorio: 'https://github.com/mero02/gestion-presupuestos',
    },
    {
      title: '🌱 Sistema de Monitoreo de Datos Ambientales (UNPSJB, 2024)',
      description: 'Diseñé y desarrollé un sistema para visualizar datos ambientales en tiempo real con alertas automatizadas vía Telegram. Desde el diseño de la interfaz hasta la implementación del backend y la base de datos.',
      Tecnologías: 'FastAPI, React',
      Repositorio: 'https://github.com/UNPSJB/RMA-grupo-4',
    },
    {
      title: '📚 To-Do-List (Personal, 2024)',
      description: 'Aplicación web CRUD para administrar tareas, que permite la creación de usuarios.',
      Tecnologías: 'Flask, Bootstrap, HTML, CSS, JavaScript',
      Repositorio: 'https://github.com/mero02/to-do-list',
    },
    {
      title: '🌀 Fractales (UNPSJB, 2024)',
      description: 'Aplicación web que dibuja dos tipos de fractales (Curva del Dragón y la Curva de Hilbert).',
      Tecnologías: 'Flask, Bootstrap, HTML, CSS, JavaScript(canvas), Python(turtle)',
      Repositorio: 'https://github.com/ilugr/FTI_Curvas',
    },
    {
      title: '🚗 Extractor de patentes (UNPJJB, 2024)',
      description: 'Aplicación web que permite extraer y validar patentes de vehículos a partir de un texto de entrada, según los formatos oficiales de Argentina.',
      Tecnologías: 'Flask, Bootstrap, HTML, CSS',
      Repositorio: 'https://github.com/mero02/FTI-Extractor-Patentes',
    },
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tecnologías:</strong> {project.Tecnologías}</p>
            <a href={project.Repositorio} target="_blank" rel="noreferrer" className="project-link">
              Ver Repositorio
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;