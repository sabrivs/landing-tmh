import { Link } from 'react-router-dom';
import { nav, contactEmail } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__mark"><img src="/assets/logo-stacked.png" alt="Transparent Mental Health" /></span>
          <p>StartUp de desarrollo tecnológico especializada en salud mental para países de habla hispana.</p>
        </div>
        <div className="footer__col">
          <span className="footer__title">Navegación</span>
          {nav.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="footer__col">
          <span className="footer__title">Contacto</span>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <span>Chile</span>
        </div>
      </div>
      <div className="footer__legal">
        <span>© {new Date().getFullYear()} Transparent Mental Health. Todos los derechos reservados.</span>
        <span>La IA apoya la reflexión profesional; no reemplaza el juicio clínico.</span>
      </div>
    </footer>
  );
}
