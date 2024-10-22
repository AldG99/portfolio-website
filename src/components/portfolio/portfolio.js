import React from 'react';
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
  return (
    <div className="portfolio">
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
