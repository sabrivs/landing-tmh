import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { revealScan } from '../lib/reveal.js';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(revealScan);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
