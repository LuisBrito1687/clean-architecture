import React from 'react';

function App() {
  return (
    <div>
      <header className="container text-center">
        <div className="container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png"
            alt=""
          />
          <br />
          <h1 className="lead">Si lo puedes pensar, lo puedes crear.</h1>
          <br />
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-subtitulos fondo-subtitulos">
              Programas Academicos
            </h2>

            <div className="row">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://www.certus.edu.pe/blog/wp-content/uploads/2020/02/por-que-estudiar-desarrollo-software-portada-1200x720.jpg"
                      className="d-block w-100"
                      alt="Ingenierias"
                      style={{ height: '300px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="fondo-card-title">Ingenierias</h5>
                      <p className="fondo-texto">
                        Con el mejor personal capacitado
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://merida.anahuac.mx/hubfs/carreras-relacionadas-con-negocios-png.png"
                      className="d-block w-100"
                      alt="Licenciaturas"
                      style={{ height: '300px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="fondo-card-title">Licenciaturas</h5>
                      <p className="fondo-texto">
                        Desde economía hasta diseño digital.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://blog.ucsp.edu.pe/hubfs/Imported_Blog_Media/Instituto%20t%C3%A9cnico%20o%20universidad%20licenciada%2C%20%C2%BFCu%C3%A1l%20es%20la%20opci%C3%B3n%20ideal.jpg"
                      className="d-block w-100"
                      alt="TSU"
                      style={{ height: '300px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="fondo-card-title">TSU</h5>
                      <p className="fondo-texto">
                        Las mejores bases para tu futura experiencia laboral.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h2 className="text-subtitulos fondo-subtitulos">Servicios</h2>

            <div className="row">
              <div
                id="carouselExampleCaptions2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://www.isotools.us/wp-content/uploads/2015/02/certificaciones-laborales-e1424521335498.jpg"
                      className="d-block w-100"
                      alt="Ingenierias"
                      style={{ height: '300px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="fondo-card-title">Certificaciones</h5>
                      <p className="fondo-texto">
                        Con el mejor personal capacitado
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.america-retail.com/static//2021/01/agencia-conectividad-salud-tecnologia-servicio-medico.jpg"
                      className="d-block w-100"
                      alt="Licenciaturas"
                      style={{ height: '300px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="fondo-card-title">Servicio Medico</h5>
                      <p className="fondo-texto">
                        Te protege de todo, menos de la comida de la cafeteria
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i0.wp.com/www.olmeca.edu.mx/wp-content/uploads/2021/09/22_becas.jpg?fit=1194%2C585&ssl=1"
                      className="d-block w-100"
                      alt="TSU"
                      style={{ height: '300px' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="fondo-card-title">Becas</h5>
                      <p className="fondo-texto">
                        no te daran dinero, pero si un descuento :D
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions2"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3">
                    Universidad Tecnológica de Emiliano Zapata
                  </i>
                </h6>
                <p>
                  Este footer fue creado por el equipo de Wong. <br />
                  Este programa es público ajeno a cualquier partido político
                  queda prohibido el uso para fines distintos a los establecidos en el programa.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Divisiones</h6>
                <p>
                  <a href="#!" className="text-reset">
                    DATID
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    DAMI
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    DACEA
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    DATEFI
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Academia de idiomas
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Biblioteca
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Complejo deportivo
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Cafetería
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>
                  <i className="fas fa-home me-3"></i>
                  Av. Universidad Tecnológica No.1, Col. Palo Escrito, C.P. 62760,
                  Emiliano Zapata, Morelos
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  servicios@utez.edu.mx
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>Tel. (01 777) 3 68 11 65
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 <a className="text-reset fw-bold" href="#">UTEZ</a>
        </div>
      </footer>
    </div>
  );
}

export default App;