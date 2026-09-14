/* Scroll reveal TMH — misma lógica que el diseño HTML.
   Descubre grupos de contenido por sección (section > contenedor > items) y los anima al entrar
   en viewport con fade + desplazamiento escalonado. Respeta prefers-reduced-motion. */

const EASE = 'cubic-bezier(.22,.72,.2,1)';

let io = null;
const seen = new WeakSet();

function observer() {
  if (io) return io;
  io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.style.opacity = '1';
      e.target.style.transform = 'none';
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  return io;
}

function isStack(el) {
  if (!el || el.children.length < 2) return false;
  const d = getComputedStyle(el).display;
  if (d !== 'flex' && d !== 'grid') return false;
  for (const n of el.childNodes) if (n.nodeType === 3 && n.textContent.trim()) return false;
  return true;
}

function isRow(el) {
  const cs = getComputedStyle(el);
  return cs.display === 'flex' && cs.flexDirection.startsWith('row') && el.children.length === 2;
}

function prep(el, from, delay) {
  if (seen.has(el)) return;
  seen.add(el);
  let start = 'translateY(22px)';
  if (from === 'left') start = 'translateX(-26px)';
  if (from === 'right') start = 'translateX(26px)';
  el.style.willChange = 'opacity, transform';
  el.style.opacity = '0';
  el.style.transform = start;
  el.style.transition = `opacity 680ms ${EASE} ${delay}ms, transform 780ms ${EASE} ${delay}ms`;
  observer().observe(el);
}

function group(items, rowSplit) {
  let d = 0;
  items.forEach((el, i) => {
    if (el.dataset && el.dataset.noReveal !== undefined) return;
    prep(el, rowSplit ? (i === 0 ? 'left' : 'right') : 'up', d);
    d += rowSplit ? 90 : 70;
  });
}

/** Prepara y observa el contenido visible. Llamar tras cada montaje de página. */
export function revealScan() {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('main section').forEach(section => {
    const box = section.firstElementChild;
    if (!box) return;
    const items = isStack(box) ? [...box.children] : [box];
    group(items, isStack(box) && isRow(box));
    items.forEach(item => {
      if (isStack(item) && !isRow(item)) group([...item.children], false);
    });
  });
}
