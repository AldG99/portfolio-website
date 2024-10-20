import React from 'react';
import { motion } from 'framer-motion';
import './services.scss';

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          Me concentro en ayudar a que tu marca crezca <br /> y avance.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <h1>
            <b>Ideas</b> únicas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Para sus ideas</b> de negocio.
          </h1>
          <button>¿QUÉ HAGO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>LOL</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>LOL</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>LOL</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>LOL</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
