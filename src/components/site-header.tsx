"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icon";

const APP_URL = "https://tindahan.vercel.app";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setProgress(Math.min(100, Math.max(0, (window.scrollY / max) * 100)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <>
    <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${progress}%` }}/></div>
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="TINDAHAN home">
          <span className="brand-glyph"><Icon name="store"/></span>
          <span>Tindahan</span>
        </a>

        <nav className={`nav-links${open ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#receipts" onClick={() => setOpen(false)}>Receipt scan</a>
          <a href="#how" onClick={() => setOpen(false)}>How it works</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a className="nav-mobile-signin" href={`${APP_URL}/sign-in`}>Sign in</a>
        </nav>

        <div className="nav-actions">
          <a className="nav-signin" href={`${APP_URL}/sign-in`}>Sign in</a>
          <a className="button button-small button-primary" href={`${APP_URL}/register`}>
            Try TINDAHAN <Icon name="arrow"/>
          </a>
          <button className="nav-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(value => !value)}>
            <Icon name={open ? "close" : "menu"}/>
          </button>
        </div>
      </div>
    </header>
  </>;
}

export function MotionBoot() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const elements = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: 0.12, rootMargin: "0px 0px -6%" });
      elements.forEach(element => observer.observe(element));
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let frame = 0;

    const updatePointer = (event: PointerEvent) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        root.style.setProperty("--pointer-x", x.toFixed(3));
        root.style.setProperty("--pointer-y", y.toFixed(3));
        root.style.setProperty("--tilt-x", `${(x * 2.2).toFixed(2)}deg`);
        root.style.setProperty("--tilt-y", `${(y * -1.8).toFixed(2)}deg`);
        root.style.setProperty("--float-x", `${(x * 12).toFixed(2)}px`);
        root.style.setProperty("--float-y", `${(y * 10).toFixed(2)}px`);
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return null;
}
