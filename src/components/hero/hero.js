import { motion } from 'framer-motion';
import './hero.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>A GG</motion.h2>
          <motion.h1 variants={textVariants}>
            Desarrollador Web y Diseñador de UI
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              Ver los Últimos Trabajos
            </motion.button>
            <motion.button variants={textVariants}>Contáctame</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="slidingTextContainer">
        Escritor Creador de contenido Influenciador
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
