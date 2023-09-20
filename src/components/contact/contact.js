import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import "../../../sources/CSS/styles.css"

function Contact() {
  return (
    <div className="centered-content">
      <div className="card custom-card">
        <h3 className="card-title text-center mb-4">Contáctanos</h3>
        <form>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="Email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Comentarios" id="comentario" style={{ height: '100px' }}></textarea>
            <label htmlFor="comentario">Comentarios</label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-primary custom-input custom-btn">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;