import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import AiBand from '../components/AiBand.jsx';
import { features, principles } from '../data.js';

export default function Software() {
  const [open, setOpen] = useState({});
  const toggle = i => setOpen(o => ({ ...o, [i]: !o[i] }));

  return (
    <>
      <section className="software section">
        <div className="wrap">
          <div className="software__head">
            <span className="eyebrow">Nuestro software</span>
            <h2>Conoce nuestra Ficha Clínica Inteligente</h2>
            <p className="lead"><strong>Más tiempo para tus pacientes. Más herramientas para tu práctica clínica.</strong></p>
            <p className="body-text">Registro clínico, organización de la información y herramientas de inteligencia artificial en un mismo entorno de trabajo.</p>
          </div>

          <div className="software__grid">
            {features.map((f, i) => (
              <article className="card" key={f.title}>
                <div className="card__top">
                  <span className="card__icon card__icon--solid"><Icon name={f.icon} size={20} /></span>
                  <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                {open[i] && <p className="card__detail">{f.detail}</p>}
                <button className="card__toggle" onClick={() => toggle(i)} aria-expanded={!!open[i]}>
                  <span className="card__sign">{open[i] ? '−' : '+'}</span>
                  {open[i] ? 'Ver menos' : 'Ver más'}
                </button>
              </article>
            ))}
          </div>

          <div className="banner">
            <p>La tecnología organiza y analiza. El profesional interpreta y decide.</p>
            <Link to="/contacto" className="btn btn--white">Solicita una demo</Link>
          </div>
        </div>
      </section>

      <section className="purpose section">
        <div className="wrap purpose__inner">
          <div className="purpose__copy">
            <span className="eyebrow">Tecnología con propósito</span>
            <h2>La IA debería ampliar las capacidades humanas, no reemplazarlas.</h2>
            <p className="body-text">Una inteligencia artificial que acompaña y fortalece el trabajo profesional, sin sustituir el juicio clínico ni la relación humana.</p>
            <div className="principles">
              {principles.map(p => (
                <div className="principle" key={p.label}>
                  <Icon name={p.icon} size={20} />
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="purpose__media" />
        </div>
      </section>

      <AiBand />
    </>
  );
}
