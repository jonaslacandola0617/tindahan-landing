import Link from "next/link";
import { Icon } from "@/components/icon";

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="legal-site">
      <header className="legal-header">
        <div className="legal-header-inner">
          <Link className="brand" href="/" aria-label="Tindahan home">
            <span className="brand-glyph"><Icon name="store"/></span>
            <span>Tindahan</span>
          </Link>
          <Link className="legal-back" href="/">← Back to Tindahan</Link>
        </div>
      </header>

      <main className="legal-main">
        <header className="legal-hero">
          <p className="legal-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <p className="legal-updated">Effective {updated}</p>
        </header>
        <article className="legal-document">{children}</article>
      </main>

      <footer className="legal-footer">
        <div className="legal-footer-inner">
          <span>© 2026 Tindahan</span>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
