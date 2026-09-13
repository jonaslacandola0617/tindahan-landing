import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE_URL } from "@/lib/site";

const PRIVACY_EMAIL = process.env.PRIVACY_EMAIL ?? "jonas.lacandola@jonasl.online";

export const metadata: Metadata = {
  title: "Privacy Policy | Tindahan",
  description: "How Tindahan collects, uses, stores, and protects personal data.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy & data protection"
      title="Privacy Policy"
      intro="This policy explains what information Tindahan handles, why we use it, who may process it for us, how long we keep it, and the choices and rights available to you."
      updated="September 13, 2026"
    >
      <section>
        <h2>1. Who this policy covers</h2>
        <p>This Privacy Policy applies to the Tindahan website and the Tindahan Store Assistant application. Tindahan is built for small stores in the Philippines and is designed with the Data Privacy Act of 2012 (Republic Act No. 10173) and its implementing rules in mind.</p>
        <p>For account, service, billing, and support information that Tindahan collects directly, Tindahan acts as the personal information controller. When a store owner or staff member enters information about suppliers, staff, customers, or other people into Tindahan, the store may be the personal information controller for that information and Tindahan may process it on the store's behalf to provide the service.</p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <ul>
          <li><strong>Account information:</strong> name, email address, password hash, optional phone number, email-verification status, preferred language, and theme preference.</li>
          <li><strong>Store information:</strong> store name, type, address and contact details when provided, staff memberships, invitations, and store preferences.</li>
          <li><strong>Store operations:</strong> products, categories, suppliers, barcodes, inventory movements, sales, reports, and other records you create while using Tindahan.</li>
          <li><strong>Receipt information:</strong> supplier receipt images you upload, extracted receipt text and structured fields, product matches, corrections, review decisions, and confirmation history.</li>
          <li><strong>Billing information:</strong> billing name and email, plan and subscription status, transaction identifiers, amounts, payment status, and statements. Payment credentials are handled by the payment provider rather than stored by Tindahan.</li>
          <li><strong>Service and security records:</strong> audit events, notification records, rate-limit state, job status, and similar operational records needed to keep the service reliable and secure.</li>
        </ul>
      </section>

      <section>
        <h2>3. Why we use information</h2>
        <p>We process information only for purposes connected with operating Tindahan, including to create and secure accounts, provide store and staff features, process receipt scans, maintain inventory and sales records, send transactional emails, provide billing where applicable, prevent abuse, troubleshoot problems, respond to support requests, and meet legal obligations.</p>
        <p>Depending on the situation, processing may be necessary to perform our agreement with you, to comply with law, to protect legitimate business and security interests, or because you have given consent for a specific optional purpose.</p>
      </section>

      <section>
        <h2>4. Receipt scanning and automated processing</h2>
        <p>When you upload a supplier receipt, Tindahan may send the receipt to an OCR/document-processing provider so that text and line items can be extracted. The result is presented for human review. Tindahan is designed so that receipt extraction does not update inventory until a user reviews and confirms the result.</p>
      </section>

      <section>
        <h2>5. Service providers and disclosures</h2>
        <p>We may use trusted service providers to operate Tindahan. Depending on the feature you use, these currently include infrastructure and hosting providers, private cloud storage for receipt images, Azure AI Document Intelligence for receipt extraction, Resend for transactional email, and Xendit for billing and payment processing.</p>
        <p>We share only the information reasonably needed for a provider to perform its service. We do not sell personal information and we do not use Tindahan account or store data for third-party advertising.</p>
        <p>Some providers may process information outside the Philippines. Where this occurs, we remain responsible for using service providers and arrangements intended to provide appropriate protection for personal data.</p>
      </section>

      <section>
        <h2>6. How long we keep information</h2>
        <p>We keep information only for as long as it is reasonably needed for the purposes described in this policy, for security and audit requirements, or where retention is required or permitted by law.</p>
        <p>Receipt-photo retention is controlled separately from the structured store record. Tindahan is designed to support 90-, 180-, or 365-day receipt-photo retention periods, with automatic deletion of the stored image after the selected period. Structured receipt records, inventory movements, confirmations, billing records, and audit history may need to be retained longer to preserve the integrity of store records and meet legitimate operational or legal requirements.</p>
        <p>Deactivating an account disables access; it does not automatically erase every historical store, transaction, audit, or billing record.</p>
      </section>

      <section>
        <h2>7. Your responsibilities when adding other people's data</h2>
        <p>If you enter or upload personal information belonging to staff, suppliers, customers, or another person, you are responsible for having a lawful purpose for doing so and for giving any notice required of your store. Do not upload personal or sensitive information that is not needed for a legitimate store purpose.</p>
      </section>

      <section>
        <h2>8. Your privacy rights</h2>
        <p>Subject to applicable law, you may have the right to be informed, access your personal data, object to certain processing, correct inaccurate data, request erasure or blocking where appropriate, obtain data portability where applicable, file a complaint, and seek damages for violations of your rights.</p>
        <p>We may need to verify your identity and may retain information where deletion would conflict with a lawful retention requirement, another person's rights, or the integrity of legitimate business records.</p>
      </section>

      <section>
        <h2>9. Security</h2>
        <p>Tindahan uses measures intended to protect information against unauthorized access, alteration, disclosure, or loss. These include password hashing, authenticated sessions, access controls, store-level separation, private receipt storage, time-limited file access, audit records, and abuse protection. No internet service can guarantee absolute security, so users should also protect their passwords and devices.</p>
      </section>

      <section>
        <h2>10. Cookies and local storage</h2>
        <p>Tindahan currently uses essential cookies and browser storage for functions such as secure sign-in, language and theme preferences, and remembering that you have seen our cookie notice. We do not currently use advertising or analytics cookies. See our <a href="/cookies">Cookie Policy</a> for details.</p>
      </section>

      <section>
        <h2>11. Changes to this policy</h2>
        <p>We may update this policy when Tindahan's features, service providers, or legal obligations change. The effective date at the top of this page will be updated when we make a material revision.</p>
      </section>

      <section>
        <h2>12. Contact and privacy requests</h2>
        <div className="legal-callout">
          <p>Questions, access requests, correction requests, objections, and other privacy concerns can be sent to:</p>
          <p><a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a></p>
          <p>You may also raise privacy concerns with the National Privacy Commission of the Philippines where applicable.</p>
        </div>
      </section>
    </LegalPage>
  );
}
