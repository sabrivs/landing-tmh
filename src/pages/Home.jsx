import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import AiBand from '../components/AiBand.jsx';
import { homeCards, trust } from '../data.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <h1>Tecnología para<br /><span className="hero__mid">una mejor</span><br /><span className="hero__accent">salud mental</span></h1>
            <div className="hero__rule" />
            <p className="hero__lead">Desarrollamos tecnología inteligente para apoyar a los profesionales de la salud mental.</p>
            <p className="hero__body">Creamos soluciones digitales que potencian tu trabajo clínico, organizan la información y entregan análisis basados en teoría validada y evidencia científica actualizada.</p>
            <div className="hero__actions">
              <Link to="/software-clinico" className="btn btn--pill">
                Conoce nuestro Software Clínico Inteligente
                <span className="btn__arrow">→</span>
              </Link>
              <span className="hero__note"><Icon name="shield" size={18} />Segura, confidencial y centrada en las personas</span>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__frame">
              <div className="hero__glow" />
              <div className="hero__photo">
                <img src="/assets/hero-sesion.jpg" alt="Profesional de salud mental en sesión con una paciente" />
                <div className="hero__scrim" />
              </div>
              <div className="hero__badge">
                <span className="hero__badgeIcon"><Icon name="pulse" size={18} /></span>
                <span className="hero__badgeText">
                  <strong>Más tiempo para lo clínico</strong>
                  <span>La tecnología ordena, tú acompañas</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/*     <section className="trust">
        <div className="trust__inner">
          {trust.map(t => (
            <div className="trust__item" key={t.title}>
              <span className="trust__icon"><Icon name={t.icon} size={20} strokeWidth={1.7} /></span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="navcards">
        <div className="navcards__inner">
          {homeCards.map(c => (
            <Link to={c.to} className="navcard" key={c.to}>
              <span className="navcard__label">{c.label}</span>
              <span className="navcard__title">{c.title}</span>
              <span className="navcard__body">{c.body}</span>
            </Link>
          ))}
        </div>
      </section>

      <AiBand />

      <section className="cta">
        <div className="cta__inner">
          <h2>¿Lista para transformar tu práctica clínica?</h2>
          <Link to="/contacto" className="btn btn--pill">Solicita una demo<span className="btn__arrow">→</span></Link>
          <span className="cta__note">Sin costo, sin compromiso.</span>
        </div>
      </section>
    </>
  );
}
