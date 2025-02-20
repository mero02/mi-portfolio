import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projects = [
    {
      title: '🧾 Gestión de Finanzas Personales (Personal, 2025)',
      description: 'Desarrollé una aplicación web completa para la gestión de finanzas personales, desde el diseño de la interfaz hasta la implementación del backend y la base de datos.',
      Tecnologías: 'FastAPI, React',
      Repositorio: 'https://github.com/mero02/gestion-presupuestos',
    },
    {
      title: '🌱 Sistema de Monitoreo de Datos Ambientales (UNPSJB, 2024)',
      description: 'Diseñé y desarrollé un sistema para visualizar datos ambientales en tiempo real con alertas automatizadas vía Telegram.',
      Tecnologías: 'FastAPI, React',
      Repositorio: 'https://github.com/UNPSJB/RMA-grupo-4',
    },
    {
      title: '📚 To-Do-List (Personal, 2024)',
      description: 'Aplicación web CRUD para administrar tareas, que permite la creacion de usuarios.',
      Tecnologías: 'Flask, Bootstrap, HTML, CSS, JavaScript',
      Repositorio: 'https://github.com/mero02/to-do-list',
    },
    {
      title: '🌀 Fractales (UNPSJB, 2024)',
      description: 'Aplicación web que dibuja dos tipos de fractales (Curva del Dragon y la Curva de Hilbert).',
      Tecnologías: 'Flask, Bootstrap, HTML, CSS, JavaScript(canvas), Python(turtle)',
      Repositorio: 'https://github.com/ilugr/FTI_Curvas',
    },
    {
      title: '🚗 Extractor de patentes (UNPJJB, 2024)',
      description: 'Aplicación web que permite extraer y validar patentes de vehículos a partir de un texto de entrada, según los formatos oficiales de Argentina.',
      Tecnologías: 'Flask, Bootstrap, HTML, CSS',
      Repositorio: 'https://github.com/mero02/FTI-Extractor-Patentes',
    },
    {
      title: '📚 Gestión Docentes (Talento Tech, 2024)',
      description: 'Aplicación web CRUD para administrar docentes.',
      Tecnologías: 'Flask, HTML, CSS, JavaScript',
      Repositorio: 'https://github.com/Estefaniavago/Back_CAC24173',
    },
    {
      title: '🖥️ Página Web Responsiva (Talento Tech, 2024)',
      description: 'Desarrollé una web con integración de videos y formularios interactivos.',
      Tecnologías: 'Bootstrap, HTML, CSS, JavaScript',
      Repositorio: 'https://github.com/Melina240488/Proyecto_24173',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tecnologías: {project.Tecnologías}</p>
            <a href={project.Repositorio} target="_blank" rel="noreferrer">Ver Repositorio</a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;