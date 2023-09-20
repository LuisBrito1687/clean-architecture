import React from 'react';
import "../../../sources/CSS/styles.css"

function About() {
  return (
    <div className="container">
      <div className="col d-flex align-items-center">
        <img src="https://www.diariodemorelos.com/noticias/sites/default/files/field/image/utez_14-01-21.jpg?mrf-size=m" alt="utez" height="auto" width="auto"/>
      </div>
      <h1>¿Quiénes somos?</h1>
      <p>
        Somos una Institución de Educación Superior dedicada a formar
        profesionistas competitivos, con capacidades tecnológicas, sentido
        humanístico y responsabilidad social, en un ambiente de mejora continua,
        a través de programas educativos pertinentes y de calidad para contribuir
        a satisfacer las necesidades de la sociedad.
      </p>
    </div>
  );
}

export default About;