import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { aiLayers } from '../data.js';

export default function AiBand() {
  return (
    <section className="ai">
      <div className="ai__inner">
        <span className="ai__chip"><i className="ai__dot" />IA + criterio clínico</span>
        <h2>Tecnología que cuida
          <br/><span>Datos que transforman</span></h2>
        <p>Menos tiempo ordenando información y más tiempo para comprender, acompañar y ayudar a las personas.</p>
        <div className="ai__grid">
          {aiLayers.map(l => (
            <div className="ai__card" key={l.title}>
              <span className="ai__icon"><Icon name={l.icon} size={19} /></span>
              <span className="ai__text">
                <strong>{l.title}</strong>
                <span>{l.body}</span>
              </span>
            </div>
          ))}
        </div>
        <Link to="/software-clinico" className="btn btn--pill btn--light">
          Conoce nuestro software<span className="btn__arrow btn__arrow--dark">→</span>
        </Link>
      </div>
    </section>
  );
}
