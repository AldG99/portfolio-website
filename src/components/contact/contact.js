import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Último trabajo juntos</h1>
        <div className="item">
          <h2>Correo</h2>
          <span>Hola@react.com</span>
        </div>
        <div className="item">
          <h2>Dirección</h2>
          <span>Puebla, México</span>
        </div>
        <div className="item">
          <h2>Celular</h2>
          <span>+1 234 5678</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Entregar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
