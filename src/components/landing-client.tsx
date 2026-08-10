"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "./icons";

export function AmbientCursor() {
  useEffect(() => {
    const root = document.documentElement;
    const move = (event: PointerEvent) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return null;
}

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    for (const item of items) observer.observe(item);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
  return null;
}

export function MobileNav({ appUrl }: { appUrl: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-nav-wrap">
      <button className="mobile-menu" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <MenuIcon />
      </button>
      {open && (
        <div className="mobile-panel">
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#receipt-intelligence" onClick={() => setOpen(false)}>Receipt Intelligence</a>
          <a href="#workflow" onClick={() => setOpen(false)}>How it works</a>
          <a href="#pilot" onClick={() => setOpen(false)}>Pilot</a>
          <a className="mobile-cta" href={`${appUrl}/sign-in`}>Open TINDAHAN</a>
        </div>
      )}
    </div>
  );
}
