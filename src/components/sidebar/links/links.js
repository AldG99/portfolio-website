const Links = () => {

  const items = [
    "Inicio",
    "Servicios",
    "Portafolio",
    "Contacto",
    "Acerca de"
  ];

  return (
    <div className="links">{items.map(item=>(
      <a href={`#${item}`} key={item}>
        {item}
      </a>
    ))}</div>
  );
};

export default Links;