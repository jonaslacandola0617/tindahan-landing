"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icon";

const APP_URL = "https://tindahan.vercel.app";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
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
  </header>;
}

export function MotionBoot() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
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
    }, { threshold: 0.14, rootMargin: "0px 0px -7%" });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
