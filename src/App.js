import './app.scss';
import Contact from './components/contact/contact';
import Cursor from './components/cursor/cursor';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Parallax from './components/parallax/parallax';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';

const App = () => {
  return (
    <div>
      <Cursor />
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
      <Portfolio />
      <section id="Contacto">
        <Contact />
      </section>
    </div>
  );
};

export default App;
