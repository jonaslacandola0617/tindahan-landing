"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icon";

type SiteHeaderProps = {
  appUrl: string;
};

export function SiteHeader({ appUrl }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateScrollState = () => {
      setScrolled(window.scrollY > 18);
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return <>
    <a className="skip-link" href="#top">Skip to content</a>
    <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }}/></div>
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="Tindahan home">
          <span className="brand-glyph"><Icon name="store"/></span>
          <span>Tindahan</span>
        </a>

        <nav id="main-navigation" className={`nav-links${open ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#receipts" onClick={() => setOpen(false)}>Receipt scan</a>
          <a href="#how" onClick={() => setOpen(false)}>How it works</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a className="nav-mobile-signin" href={`${appUrl}/sign-in`} onClick={() => setOpen(false)}>Sign in</a>
        </nav>

        <div className="nav-actions">
          <a className="nav-signin" href={`${appUrl}/sign-in`}>Sign in</a>
          <a className="button button-small button-primary" href={`${appUrl}/register`}>
            Try Tindahan <Icon name="arrow"/>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(value => !value)}
          >
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
      return;
    }

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
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    if (reducedMotion.matches || !finePointer.matches) return;

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
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
