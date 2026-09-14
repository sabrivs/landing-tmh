import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { pillars, team } from '../data.js';

export default function About() {
  return (
    <>
      <section className="about section">
        <div className="about__inner wrap">
          <div className="about__head">
            <img src="/assets/logo-tmh.png" alt="TMH" />
            <span className="eyebrow">Misión, visión y equipo</span>
            <h2>Comprometidos con la salud mental</h2>
            <p className="lead">Somos una StartUp de desarrollo tecnológico especializada en salud mental para países de habla hispana.</p>
          </div>

          <div className="about__grid">
            {pillars.map(p => (
              <div className="card" key={p.title}>
                <span className="card__icon"><Icon name={p.icon} size={24} /></span>
                <h3 className="card__label">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>

          <div className="about__band" />

          <div className="team">
            <div className="team__head">
              <span className="eyebrow">Quiénes somos</span>
              <h2>El equipo detrás de TMH</h2>
              <p className="body-text">Experiencia clínica en salud mental y desarrollo tecnológico.</p>
            </div>
            <div className="team__grid">
              {team.map(m => (
                <div className="member" key={m.name}>
                  <div className="member__photo"><img src={m.photo} alt={m.name} /></div>
                  <h3>{m.name}</h3>
                  <span className="member__role">{m.role}</span>
                  <p>{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="banner banner--full">
        <div className="wrap banner__inner">
          <p>Conoce cómo la Ficha Clínica Inteligente apoya tu práctica.</p>
          <Link to="/software-clinico" className="btn btn--primary">Ver el software clínico</Link>
        </div>
      </section>
    </>
  );
}
