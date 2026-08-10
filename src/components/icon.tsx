import type { ReactNode } from "react";

const paths = {
  store: <><path d="M3.5 9 4.5 4h15l1 5"/><path d="M4.5 9v10.5h15V9"/><path d="M9.5 19.5v-6h5v6"/></>,
  package: <><path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v9l9 5 9-5V8M12 13v9"/><path d="M16.5 5.5 7.5 10.5"/></>,
  bag: <><path d="M6.5 8h11l-1 12h-9l-1-12Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>,
  receipt: <><path d="M6 2h12v18l-2.5-1.8L13 20l-1.5-1.8L10 20l-2.5-1.8L6 20V2Z"/><path d="M9 7.5h6M9 11h6M9 14.5h4"/></>,
  chart: <><path d="M4 20V11M12 20V4M20 20v-6M2 20h20"/></>,
  camera: <><path d="M4 8h3.2L9 5.5h6L16.8 8H20v11H4V8Z"/><circle cx="12" cy="13.2" r="3.4"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m8.5 12.3 2.4 2.4 4.6-5"/></>,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
  sparkle: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></>,
  shield: <><path d="M12 3 5 6v5c0 4.7 2.7 8 7 10 4.3-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.7-3.2 2.5-5 5.5-5s4.8 1.8 5.5 5"/><path d="M15 6.5a3 3 0 0 1 0 5.5M16 14c2.5.4 4 2 4.5 5"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.6 5.5 3.6 9S14.5 18.5 12 21c-2.5-2.5-3.6-5.5-3.6-9S9.5 5.5 12 3Z"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "icon" }: { name: IconName; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
