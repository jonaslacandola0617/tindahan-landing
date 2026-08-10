import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const common = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function StoreIcon(props: IconProps) {
  return <svg {...common} {...props}><path d="M4 10v9h16v-9"/><path d="M3 10 5 4h14l2 6"/><path d="M3 10c0 1.2 1 2 2.2 2S7.4 11.2 7.4 10c0 1.2 1 2 2.3 2s2.3-.8 2.3-2c0 1.2 1 2 2.3 2s2.3-.8 2.3-2c0 1.2 1 2 2.2 2S21 11.2 21 10"/><path d="M8 19v-4h4v4"/></svg>;
}
export function ArrowUpRight(props: IconProps) { return <svg {...common} {...props}><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>; }
export function ArrowRight(props: IconProps) { return <svg {...common} {...props}><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></svg>; }
export function Sparkles(props: IconProps) { return <svg {...common} {...props}><path d="m12 3 1.1 3.2L16 7.5l-2.9 1.2L12 12l-1.2-3.3L8 7.5l2.8-1.3L12 3Z"/><path d="m18.5 13 .7 2 1.8.8-1.8.7-.7 2-.8-2-1.7-.7 1.7-.8.8-2Z"/><path d="m6 13 .8 2.4L9 16.3l-2.2.9L6 19.5l-.9-2.3-2.1-.9 2.1-.9L6 13Z"/></svg>; }
export function ReceiptIcon(props: IconProps) { return <svg {...common} {...props}><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>; }
export function BoxIcon(props: IconProps) { return <svg {...common} {...props}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.1V21"/></svg>; }
export function ChartIcon(props: IconProps) { return <svg {...common} {...props}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>; }
export function ScanIcon(props: IconProps) { return <svg {...common} {...props}><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10"/></svg>; }
export function UsersIcon(props: IconProps) { return <svg {...common} {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>; }
export function CheckIcon(props: IconProps) { return <svg {...common} {...props}><path d="m5 12 4 4L19 6"/></svg>; }
export function ShieldIcon(props: IconProps) { return <svg {...common} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>; }
export function ZapIcon(props: IconProps) { return <svg {...common} {...props}><path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z"/></svg>; }
export function GlobeIcon(props: IconProps) { return <svg {...common} {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>; }
export function MenuIcon(props: IconProps) { return <svg {...common} {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>; }
