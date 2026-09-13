import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy | Tindahan",
  description: "How Tindahan uses essential cookies and browser storage.",
  alternates: { canonical: `${SITE_URL}/cookies` },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Browser storage"
      title="Cookie Policy"
      intro="Tindahan keeps cookie use intentionally limited. This page explains the essential cookies and browser storage used by the website and application."
      updated="September 13, 2026"
    >
      <section>
        <h2>1. What cookies are</h2>
        <p>Cookies are small pieces of information stored by your browser and sent back to a website on later requests. Similar browser technologies, such as local storage and session storage, can remember information on your device without sending it with every request.</p>
      </section>

      <section>
        <h2>2. What Tindahan currently uses</h2>
        <p>Tindahan currently uses <strong>essential functionality only</strong>. We do not currently use advertising cookies or analytics cookies.</p>
        <ul>
          <li><strong>Authentication/session cookies:</strong> used by the Tindahan app to keep signed-in users authenticated securely.</li>
          <li><strong>Language preference:</strong> the app may store your selected English or Filipino preference so pages open in the language you chose.</li>
          <li><strong>Theme preference:</strong> the app may store your light/dark/system theme choice.</li>
          <li><strong>Temporary registration storage:</strong> during account setup, the app uses session storage so information can move between the account and store-setup steps. Session storage is cleared after setup and is not an advertising tracker.</li>
          <li><strong>Cookie-notice acknowledgement:</strong> this marketing site uses local storage to remember that you dismissed the cookie notice so it does not appear on every visit.</li>
        </ul>
      </section>

      <section>
        <h2>3. Why there is no “Reject all” button</h2>
        <p>At the effective date of this policy, Tindahan is not setting optional analytics, personalization, or advertising cookies. The cookies used for signed-in sessions and core preferences support functions a user explicitly requests from the service. Because there is currently no optional cookie category to switch off, the notice is informational rather than a consent wall.</p>
        <p>If Tindahan later introduces non-essential analytics, marketing, or similar technologies, we will update this policy and provide an appropriate preference choice before activating those technologies where required.</p>
      </section>

      <section>
        <h2>4. Browser controls</h2>
        <p>You can delete or block cookies using your browser settings. Blocking essential authentication cookies may prevent sign-in or other app functions from working correctly. Clearing browser storage may also reset saved language, theme, or notice preferences.</p>
      </section>

      <section>
        <h2>5. Changes</h2>
        <p>We will update this page if the cookie or browser-storage practices used by Tindahan materially change. The effective date above shows when this policy was last revised.</p>
      </section>

      <section>
        <h2>6. Related information</h2>
        <p>For information about personal data more generally, see the <a href="/privacy">Privacy Policy</a>. Rules for using the service are in the <a href="/terms">Terms of Service</a>.</p>
      </section>
    </LegalPage>
  );
}
