import Link from "next/link";

export function LegalBar() {
  return (
    <div className="global-legal-bar">
      <div className="global-legal-bar-inner">
        <span>Privacy-first · Philippines</span>
        <nav aria-label="Privacy and legal links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </nav>
      </div>
    </div>
  );
}
