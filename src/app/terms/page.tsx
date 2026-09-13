import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE_URL } from "@/lib/site";

const CONTACT_EMAIL = process.env.PRIVACY_EMAIL ?? "jonas.lacandola@jonasl.online";

export const metadata: Metadata = {
  title: "Terms of Service | Tindahan",
  description: "Terms that apply when you create an account or use Tindahan.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Service agreement"
      title="Terms of Service"
      intro="These terms explain the rules for using Tindahan, the responsibilities of store owners and staff, and the limits of the service."
      updated="September 13, 2026"
    >
      <section>
        <h2>1. Accepting these terms</h2>
        <p>By creating a Tindahan account or using the service, you agree to these Terms of Service and acknowledge the <a href="/privacy">Privacy Policy</a>. If you are using Tindahan for a business, you confirm that you are authorized to accept these terms for that business.</p>
        <p>You must have legal capacity to enter into this agreement. If you do not agree with these terms, do not create an account or continue using the service.</p>
      </section>

      <section>
        <h2>2. What Tindahan provides</h2>
        <p>Tindahan is a store operating assistant intended to help small retailers manage tasks such as inventory, sales, barcodes, supplier receipts, reports, and staff access. Features may change as the product develops.</p>
        <p>Tindahan may be offered free during pilot, testing, promotional, or early-access periods. If a paid plan is offered or selected, the price, billing period, and applicable charges shown before checkout will control for that purchase.</p>
      </section>

      <section>
        <h2>3. Your account</h2>
        <p>You are responsible for providing accurate account information, protecting your password, and keeping access to your email and devices secure. Do not share one account between people when Tindahan provides separate staff access.</p>
        <p>Store owners are responsible for deciding who may access their store and for removing staff access when it is no longer appropriate.</p>
      </section>

      <section>
        <h2>4. Your store data</h2>
        <p>You keep ownership of the information and content you enter into Tindahan. You give Tindahan permission to host, process, copy, transmit, and display that content only as reasonably necessary to provide, secure, maintain, and improve the service.</p>
        <p>You are responsible for the accuracy and lawfulness of store data you enter, including information about staff, suppliers, customers, receipts, and transactions. If information belongs to another person, you are responsible for having a lawful reason to collect and use it.</p>
      </section>

      <section>
        <h2>5. Receipt intelligence</h2>
        <p>Receipt scanning and OCR are assistance tools. Extracted supplier names, products, quantities, prices, and other fields may be incomplete or incorrect. You are responsible for reviewing the result before confirming it.</p>
        <p>Tindahan is designed so that extracted receipt data does not change inventory until a user reviews and confirms the update. You remain responsible for your inventory, accounting, purchasing, tax, and business records.</p>
      </section>

      <section>
        <h2>6. Billing and payments</h2>
        <p>If you use a paid Tindahan plan, payments may be processed by a third-party payment provider such as Xendit. Tindahan may store payment references, transaction status, amounts, and statements, but payment credentials are handled by the payment provider.</p>
        <p>Tindahan-generated billing statements are service records and are not represented as official BIR tax invoices unless explicitly stated otherwise.</p>
      </section>

      <section>
        <h2>7. Acceptable use</h2>
        <p>You may not use Tindahan to break the law, access another store without permission, probe or bypass security controls, upload malicious code, interfere with the service, impersonate another person, abuse invitation or email features, or store content you have no right to use.</p>
        <p>We may restrict or suspend access when reasonably necessary to protect users, investigate abuse, comply with law, or prevent harm to the service.</p>
      </section>

      <section>
        <h2>8. Availability and changes</h2>
        <p>We aim to keep Tindahan reliable, but the service may occasionally be unavailable because of maintenance, provider outages, security work, or other events. We may add, modify, or retire features as the product evolves.</p>
        <p>Where a change materially affects these terms or how personal data is handled, we will update the applicable notice and effective date.</p>
      </section>

      <section>
        <h2>9. Deactivation and termination</h2>
        <p>You may deactivate an account through available account settings. Deactivation removes active access but does not necessarily delete historical store, transaction, billing, or audit records. Privacy and deletion requests are handled under the <a href="/privacy">Privacy Policy</a> and applicable law.</p>
        <p>We may terminate or restrict accounts that materially violate these terms, threaten the security of the service, or are used unlawfully.</p>
      </section>

      <section>
        <h2>10. Intellectual property</h2>
        <p>Tindahan's software, visual design, branding, documentation, and original product content remain the property of their respective owner(s) and are protected by applicable intellectual-property laws. These terms give you a limited right to use the service; they do not transfer ownership of Tindahan itself.</p>
      </section>

      <section>
        <h2>11. Disclaimers and limits</h2>
        <p>Tindahan is a business-assistance tool, not a substitute for professional accounting, tax, legal, or regulatory advice. Reports and automated extraction depend on the data supplied to the service and may contain errors.</p>
        <p>To the fullest extent permitted by Philippine law, Tindahan is provided without a guarantee that it will be uninterrupted or error-free. Tindahan is not responsible for indirect or consequential losses caused by inaccurate user-entered data, unreviewed OCR results, third-party outages, or unauthorized access resulting from a user's failure to protect account credentials.</p>
        <p>Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded.</p>
      </section>

      <section>
        <h2>12. Governing law</h2>
        <p>These terms are governed by the laws of the Republic of the Philippines. Any dispute should first be raised with us in good faith so we have an opportunity to resolve it informally.</p>
      </section>

      <section>
        <h2>13. Contact</h2>
        <div className="legal-callout">
          <p>Questions about these terms may be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        </div>
      </section>
    </LegalPage>
  );
}
