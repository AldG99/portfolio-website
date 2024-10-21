import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './services.scss';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Me concentro en ayudar a que tu marca crezca <br /> y avance.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Ideas</motion.b> únicas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Para sus ideas</motion.b>{' '}
            de negocio.
          </h1>
          <button>¿QUÉ HAGO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
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
