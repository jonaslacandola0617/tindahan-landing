"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const ACK_KEY = "tindahan-cookie-notice-v1";
const NOTICE_EVENT = "tindahan-cookie-notice-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(NOTICE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(NOTICE_EVENT, callback);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(ACK_KEY) !== "acknowledged";
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return false;
}

export function CookieNotice() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function acknowledge() {
    try {
      window.localStorage.setItem(ACK_KEY, "acknowledged");
    } catch {
      // Storage may be blocked; the custom event still dismisses until navigation.
    }
    window.dispatchEvent(new Event(NOTICE_EVENT));
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
