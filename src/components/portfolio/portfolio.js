import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './portfolio.scss';
import m1 from '../../images/m1.jpg';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: m1,
    desc: 'Una tienda en línea construida con React que ofrece una experiencia de compra fluida y moderna.',
  },
  {
    id: 2,
    title: 'CSS Grid Layout',
    img: m1,
    desc: 'Un proyecto que demuestra el uso de CSS Grid para crear diseños responsivos y atractivos.',
  },
  {
    id: 3,
    title: 'Portfolio Personal',
    img: m1,
    desc: 'Un portafolio personal para mostrar proyectos y habilidades de desarrollo web.',
  },
  {
    id: 4,
    title: 'Aplicación de Tareas',
    img: m1,
    desc: 'Una aplicación de gestión de tareas que permite a los usuarios organizar su día a día.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['end end', 'start start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
