import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label="Transparent Mental Health — inicio">
          <img src="/assets/logo-horizontal.png" alt="Transparent Mental Health" />
        </Link>
        <button className="nav__toggle" aria-expanded={open} aria-label="Abrir menú" onClick={() => setOpen(o => !o)}>≡</button>
        <nav className="nav" data-open={open} onClick={() => setOpen(false)}>
          {nav.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="nav__cta">Solicita una demo</Link>
        </nav>
      </div>
    </header>
  );
}
