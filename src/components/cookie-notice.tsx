"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ACK_KEY = "tindahan-cookie-notice-v1";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(ACK_KEY) !== "acknowledged");
    } catch {
      setVisible(true);
    }
  }, []);

  function acknowledge() {
    try {
      window.localStorage.setItem(ACK_KEY, "acknowledged");
    } catch {
      // The notice can still be dismissed for this page view when storage is unavailable.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-notice" aria-label="Cookie notice">
      <div>
        <strong>Essential cookies only.</strong>
        <p>
          Tindahan uses necessary cookies in the app for secure sign-in and saved language/theme preferences. We do not currently use advertising or analytics cookies.
        </p>
        <Link href="/cookies">Read our Cookie Policy</Link>
      </div>
      <button type="button" onClick={acknowledge}>Got it</button>
    </aside>
  );
}
