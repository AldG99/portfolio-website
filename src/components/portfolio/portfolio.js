import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './portfolio.scss';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: '',
    desc: 'TEXT',
  },
  {
    id: 2,
    title: 'CSS',
    img: '',
    desc: 'TEXT',
  },
  {
    id: 3,
    title: 'React Commerce',
    img: '',
    desc: 'TEXT',
  },
  {
    id: 4,
    title: 'React Commerce',
    img: '',
    desc: 'TEXT',
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
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
