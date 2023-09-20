import React from 'react';
import "../../../sources/CSS/styles.css"

function Chat() {
  return (
    <div>
      <button id="toggle-chat-button" className="btn btn-primary btn-chat">
        <i className="bi bi-chat-fill"></i>
      </button>

      <div className="container" id="chat-container" style={{ display: 'none' }}>
        <div className="chat-container">
          <div id="chatbot-header" className="row">
            <i className="bi bi-headset"> Support</i>
          </div>

          <div className="row">
            <div className="chat-message col-lg-8">
              <i className="bi bi-chat-square-fill" style={{ color: '#0F62F3' }}></i> <b>Support: </b>¡Hola!, ¿en qué puedo ayudarte?
            </div>
            <div className="col-lg-4"></div>
          </div>

          <div className="row">
            <div className="col-lg-4"></div>
            <div className="chat-message col-lg-8">
              <i className="bi bi-person-fill" style={{ color: '#09B425' }}></i> <b>Usuario: </b>Como puedo realizar un clon desde GitHub
            </div>
          </div>
          <form id="chat-form" className="d-flex align-items-end">
            <div className="col-11">
              <input type="text" className="form-control" id="message" placeholder="Escribe tu mensaje..." />
            </div>
            <div className="col-1">
              <button className="btn btn-success" id="send-button">
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;