import { useState } from 'react';
import { contactEmail, planIncludes } from '../data.js';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // TODO: conectar el endpoint real (por ejemplo POST /api/contacto o un servicio de correo).
    // const data = Object.fromEntries(new FormData(e.target));
    e.target.reset();
    setSent(true);
  }

  return (
    <>
      <section className="sub section">
        <div className="wrap sub__inner">
          <div className="sub__copy">
            <span className="eyebrow">Suscripción</span>
            <h2>Suscribe el software TMH para Psicólogos</h2>
            <p className="body-text">Contrata la Ficha Clínica Inteligente y favorece procesos terapéuticos basados en la evidencia. Escríbenos y te enviamos las condiciones de contratación vigentes.</p>
          </div>
          <div className="plan">
            <span className="eyebrow">Versión inicial</span>
            <h3>TMH para Psicólogos</h3>
            <div className="plan__list">
              {planIncludes.map(item => (
                <div className="plan__item" key={item}><span>·</span><span>{item}</span></div>
              ))}
            </div>
            <p className="plan__note">Información de precios y planes disponible próximamente.</p>
            <a className="btn btn--primary" href={`mailto:${contactEmail}`}>Quiero solicitar una demo</a>
          </div>
        </div>
      </section>

      <section className="contact" id="formulario">
        <div className="wrap contact__inner">
          <div className="contact__copy">
            <span className="eyebrow">Comunícate con nosotros</span>
            <h2>Contáctanos</h2>
            <p className="body-text">Cuéntanos sobre tu práctica clínica o institución y te contactaremos con la información de contratación y una demostración del software.</p>
            <div className="sub__mail">
              <span>Correo electrónico</span>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <div className="form__grid">
              <label className="field">Nombre y apellido
                <input name="nombre" type="text" required placeholder="Tu nombre" />
              </label>
              <label className="field">Correo electrónico
                <input name="email" type="email" required placeholder="nombre@correo.com" />
              </label>
              <label className="field">Teléfono (opcional)
                <input name="telefono" type="tel" placeholder="+56 9 1234 5678" />
              </label>
              <label className="field">Perfil profesional
                <select name="perfil" defaultValue="Psicólogo/a">
                  <option>Psicólogo/a</option>
                  <option>Psiquiatra</option>
                  <option>Centro clínico o institución</option>
                  <option>Investigación / academia</option>
                  <option>Otro</option>
                </select>
              </label>
            </div>
            <label className="field">Mensaje
              <textarea name="mensaje" rows={4} required placeholder="Cuéntanos qué necesitas" />
            </label>
            <label className="field field--check">
              <input name="acepta" type="checkbox" required />
              <span>Autorizo el uso de mis datos para ser contactado por Transparent Mental Health.</span>
            </label>
            <button className="btn btn--primary" type="submit">Enviar mensaje</button>
            {sent && <p className="form__ok">Gracias por escribirnos. Recibimos tu mensaje y te responderemos al correo indicado.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
