const paths = {
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
  brain: <><path d="M12 5a3 3 0 0 0-3 3 2.6 2.6 0 0 0-1.5 4.7A3 3 0 0 0 9 18a3 3 0 0 0 3-1.5" /><path d="M12 5a3 3 0 0 1 3 3 2.6 2.6 0 0 1 1.5 4.7A3 3 0 0 1 15 18a3 3 0 0 1-3-1.5" /><path d="M12 5v13.5" /></>,
  layers: <><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 12l10 5 10-5" /><path d="M2 17l10 5 10-5" /></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></>,
  cpu: <><rect x="8" y="8" width="8" height="8" rx="1.5" /><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></>,
  usercheck: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M16 11l2 2 4-4" /></>,
  folder: <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
  checklist: <><path d="M9 6h11M9 12h11M9 18h11" /><path d="M4 6l1.5 1.5L8 5" /><path d="M4 12l1.5 1.5L8 11" /><path d="M4 18l1.5 1.5L8 17" /></>,
  pulse: <path d="M3 12h3.5l2-6 3.5 12 2.5-8 1.5 2H21" />,
  search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5" /><path d="m9 11 1.6 1.6L13.5 9.5" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" /></>,
  telescope: <><path d="m4 14 8-3.5" /><path d="m10.5 5.5 7 2.5-1.5 4-7-2.5z" /><path d="M9 21l3-6 3 6" /><circle cx="12" cy="14" r="1.5" /></>,
  hands: <><path d="M11 12V5.5a1.5 1.5 0 0 1 3 0V12" /><path d="M14 8.5a1.5 1.5 0 0 1 3 0V13a6 6 0 0 1-6 6H9l-4-4" /><path d="M8 11V7a1.5 1.5 0 0 1 3 0" /></>,
  lock: <><rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></>,
  arrow: <path d="M5 12h13m0 0-5-5m5 5-5 5" />
};

export default function Icon({ name, size = 24, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.layers}
    </svg>
  );
}
