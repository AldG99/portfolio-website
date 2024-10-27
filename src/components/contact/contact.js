import React from 'react';
import './contact.scss';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={containerVariants}>
        <motion.h1 variants={itemVariants}>Último trabajo juntos</motion.h1>
        <motion.div className="item" variants={itemVariants}>
          <h2>Correo</h2>
          <span>Hola@react.com</span>
        </motion.div>
        <motion.div className="item" variants={itemVariants}>
          <h2>Dirección</h2>
          <span>Puebla, México</span>
        </motion.div>
        <motion.div className="item" variants={itemVariants}>
          <h2>Celular</h2>
          <span>+1 234 5678</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Entregar</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
