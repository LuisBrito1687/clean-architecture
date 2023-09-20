import React from 'react';
import "../../../sources/CSS/styles.css"


function News() {
  return (
    <div className="container mt-3">
      <div className="titulo-con-linea">
        <h1 style={{ color: '#009574' }}>Noticias UTEZ</h1>
        <div className="linea-separadora"></div>
      </div>
      <div className="row">
        <div className="col-md-5 col-12 mt-3">
          <div className="card bg-dark text-white w-100 h-100">
            <img src="./assets/english.jpg" className="card-img img-dark w-100 h-100" style={{ objectFit: 'cover !important' }} alt="English" />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="text-white">
                <a href="">
                  <h5>Más de 100 alumnos en nuestro Senior English Course</h5>
                </a>
                <p>Agosto 10, 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* Otras tarjetas de noticias */}
      </div>
    </div>
  );
}

export default News;