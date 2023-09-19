import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import "./home.css"

function Home() {
  useEffect(() => {
    $(".card-body p").each(function () {
      var contenido = $(this).text();
      if (contenido.indexOf("Ingeniería") !== -1) {
        $(this).css("color", "lightseagreen");
      } else if (contenido.indexOf("Licenciatura") !== -1) {
        $(this).css("color", "green");
      }
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top" style={{
        background: "linear-gradient(90deg, rgba(129,223,202,1) 0%, rgba(39,166,138,1) 47%, rgba(5,92,73,1) 100%)"
      }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png" alt="utez" height="35"
            width="85" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link txtNav" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link txtNav" href="#">Acerca de nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link txtNav" href="#">Carreras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link txtNav" href="#">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <div className="container text-center">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
              aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active p-3">
              <img
                src="http://www.utez.edu.mx/cache/resized/16acce321aadc17f49913cbb8dc67d23.png"
                className="img-fluid w-100" alt="..." />
            </div>
            <div className="carousel-item p-3">
              <img src="http://www.utez.edu.mx/cache/resized/884ce91760c5e10e04bfb84e6ab1c30b.png"
                className="img-fluid w-100" alt="..." />
            </div>
            <div className="carousel-item p-3">
              <img src="http://www.utez.edu.mx/images/2023/08/Plantacion_de_100_arboles.png"
                className="img-fluid w-100 " alt="..." />
            </div>
            <div className="carousel-item p-3">
              <img src="http://www.utez.edu.mx/images/2022/02/Portada-conocenos.png" className="img-fluid w-100"
                alt="..." />
            </div>
          </div>
        </div>
        <h1 id="carreras" className="text-center">¿Quiénes Somos?</h1>
        <p style={{ textAlign: "justify" }}>
          <span style={{ fontFamily: "helvetica" }}>
            La Universidad Tecnológica Emiliano Zapata (UTEZ), es una Universidad pública creada en el año 2000 que
            forma parte del Sistema Nacional de Universidades Tecnológicas de la SEP, cuyo innovador modelo ofrece
            planes de estudio para formar Técnicas y Técnicos Superiores Universitarios e Ingenieros e Ingenieras en
            sólo tres años ocho meses, generando profesionistas competentes con altos niveles tecnológicos para dar
            respuesta a las necesidades de los sectores social y productivo de la región y del país.
          </span>
        </p>
      </div>
      <br />
      <div className="container mb-4">
        <h1 id="carreras" className="text-center">NUESTRAS CARRERAS</h1>
        <br />
        <div id="listaCarreras" className="row">
          <div className="col-12">
            <div className="card-deck">
              <div id="listUsers" className="row">
                <div className="col-md-4">
                  <div className="card mb-4">
                    <div className="cropped">
                      <img
                        src="https://www.epitech-it.es/wp-content/uploads/2022/06/softwares-de-programacion.jpg"
                        className="card-img-top" alt="Avatar" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Desarrollo de Software</h5>
                      <p>Ingeniería</p>
                      <p className="card-text"></p>
                    </div>
                    <div className="details-label"> VER DETALLES </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="https://alodoctor.co/assets/iblog/post/29.jpg" className="card-img-top"
                      alt="Avatar" />
                    <div className="card-body">
                      <h5 className="card-title">Terapia Física</h5>
                      <p className="card-text">Licenciatura</p>
                      <p className="card-text"></p>
                    </div>
                    <div className="details-label"> VER DETALLES </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="https://www.grupocibernos.com/hubfs/en%20que%20consiste%20la%20ciberseguridad.jpg"
                      className="card-img-top" alt="Avatar" />
                    <div className="card-body">
                      <h5 className="card-title">Redes y Ciberseguridad</h5>
                      <p className="card-text">Ingeniería</p>
                      <p className="card-text"></p>
                    </div>
                    <div className="details-label"> VER DETALLES </div>
                  </div>
                </div>
                {/* Aquí continúa el código para las otras carreras */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;