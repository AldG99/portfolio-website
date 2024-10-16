import './parallax.scss';
import { motion } from 'framer-motion';

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === 'servicios'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1>
        {type === 'servicios' ? '¿Que hacemos?' : '¿Que hicimos?'}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
