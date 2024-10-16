import './app.scss';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <div>
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Servicios">Portafolio1</section>
      <section id="Portafolio">Portafolio2</section>
      <section id="Contacto">Portafolio3</section>
    </div>
  );
};

export default App;
