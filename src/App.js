import './app.scss';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Parallax from './components/parallax/parallax';
import Services from './components/services/services';

const App = () => {
  return (
    <div>
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Servicios">
        <Parallax type="servicios" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portafolio">
        <Parallax type="portafolio" />
      </section>
      <section id="Contacto">
        <Parallax />
      </section>
    </div>
  );
};

export default App;
