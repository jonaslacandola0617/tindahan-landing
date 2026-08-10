import { Icon } from "@/components/icon";
import { MotionBoot, SiteHeader } from "@/components/site-header";

const APP_URL = "https://tindahan.vercel.app";

const features = [
  {
    icon: "package" as const,
    kicker: "Inventory",
    title: "Know what you have before you run out.",
    copy: "Track products, stock changes, low-stock items, categories, and barcodes without digging through a notebook.",
    className: "feature-inventory",
  },
  {
    icon: "bag" as const,
    kicker: "Sales",
    title: "Record a sale while the line keeps moving.",
    copy: "Search or scan a product, check stock, and confirm the sale in a few clear steps.",
    className: "feature-sales",
  },
  {
    icon: "receipt" as const,
    kicker: "Receipt intelligence",
    title: "Let the receipt do most of the typing.",
    copy: "Upload a supplier receipt and TINDAHAN prepares the items for review before anything touches your inventory.",
    className: "feature-receipts",
  },
  {
    icon: "chart" as const,
    kicker: "Reports",
    title: "See the answers, not a wall of numbers.",
    copy: "Check sales, top products, stock movement, and what needs attention in language that is easy to act on.",
    className: "feature-reports",
  },
  {
    icon: "users" as const,
    kicker: "Staff access",
    title: "Give staff their own access, not your password.",
    copy: "Owner and staff accounts stay separate, while store data stays inside the right store.",
    className: "feature-staff",
  },
  {
    icon: "globe" as const,
    kicker: "English + Filipino",
    title: "Use the language that feels natural.",
    copy: "Switch between English and Filipino across the app without changing how the workflows work.",
    className: "feature-language",
  },
];

export default function Home() {
  return <>
    <MotionBoot />
    <SiteHeader />

    <main id="top">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-ambient hero-ambient-one" aria-hidden="true"/>
        <div className="hero-ambient hero-ambient-two" aria-hidden="true"/>
        <div className="hero-grid" aria-hidden="true"/>

        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-dot"/> Store Operating Assistant · Para sa araw-araw na tindahan</div>
          <h1 id="hero-title">Run the store.<br/><span>TINDAHAN keeps up.</span></h1>
          <p className="hero-lede">Track stock, record sales, scan supplier receipts, and see what needs attention—without turning your store into a complicated system.</p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href={`${APP_URL}/register`}>Try TINDAHAN <Icon name="arrow"/></a>
            <a className="button button-ghost button-large" href="#how">See how it works</a>
          </div>
          <div className="hero-proof" aria-label="Product highlights">
            <span><Icon name="check"/> No POS hardware required</span>
            <span><Icon name="check"/> English + Filipino</span>
            <span><Icon name="check"/> Human-approved receipt updates</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="TINDAHAN product preview">
          <div className="stage-orbit stage-orbit-one" aria-hidden="true"/>
          <div className="stage-orbit stage-orbit-two" aria-hidden="true"/>
          <div className="stage-spark stage-spark-one" aria-hidden="true"><Icon name="sparkle"/></div>
          <div className="stage-spark stage-spark-two" aria-hidden="true"><Icon name="sparkle"/></div>

          <div className="dashboard-window">
            <div className="window-bar">
              <div className="window-dots"><i/><i/><i/></div>
              <span>Maria&apos;s Mini Mart</span>
              <span className="window-live"><i/> Sample store</span>
            </div>
            <div className="dashboard-body">
              <aside className="mock-sidebar">
                <div className="mock-brand"><span><Icon name="store"/></span><b>Tindahan</b></div>
                <div className="mock-nav is-active"><Icon name="chart"/><span>Dashboard</span></div>
                <div className="mock-nav"><Icon name="package"/><span>Inventory</span></div>
                <div className="mock-nav"><Icon name="bag"/><span>Sales</span></div>
                <div className="mock-nav"><Icon name="receipt"/><span>Receipts</span></div>
              </aside>
              <div className="mock-content">
                <div className="mock-heading"><div><small>Monday, August 10</small><strong>Good afternoon, Maria.</strong></div><button>+ Record sale</button></div>
                <div className="mock-stat-grid">
                  <div className="mock-stat"><span>Sales today</span><strong>₱4,280</strong><small>18 sales recorded</small></div>
                  <div className="mock-stat attention"><span>Needs attention</span><strong>3 items</strong><small>Running low on stock</small></div>
                </div>
                <div className="mock-lower-grid">
                  <div className="mock-panel">
                    <div className="mock-panel-title"><strong>Today&apos;s sales</strong><span>View report</span></div>
                    <div className="mini-bars" aria-hidden="true">
                      <i style={{height:"34%"}}/><i style={{height:"52%"}}/><i style={{height:"43%"}}/><i style={{height:"68%"}}/><i style={{height:"58%"}}/><i style={{height:"82%"}}/><i style={{height:"74%"}}/><i style={{height:"92%"}}/>
                    </div>
                    <div className="bar-labels"><span>8 AM</span><span>12 PM</span><span>4 PM</span></div>
                  </div>
                  <div className="mock-panel stock-list">
                    <div className="mock-panel-title"><strong>Low stock</strong><span>3 items</span></div>
                    <div><i className="product-dot cola"/><span>Coke 1.5L<small>4 left</small></span><b>Low</b></div>
                    <div><i className="product-dot sardines"/><span>Sardines<small>6 left</small></span><b>Low</b></div>
                    <div><i className="product-dot coffee"/><span>3-in-1 Coffee<small>9 left</small></span><b>Watch</b></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="float-card float-receipt">
            <span className="float-icon receipt"><Icon name="receipt"/></span>
            <div><small>Receipt scanned</small><strong>12 items ready to review</strong></div>
            <span className="float-check"><Icon name="check"/></span>
          </div>
          <div className="float-card float-stock">
            <span className="float-icon stock"><Icon name="package"/></span>
            <div><small>Stock updated</small><strong>Coke 1.5L&nbsp; +12</strong></div>
            <span className="float-time">now</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="TINDAHAN capabilities">
        <div className="ticker-track">
          {["INVENTORY","BENTA","RESIBO","BARCODE","REPORTS","LOW STOCK","STAFF","FILIPINO","INVENTORY","BENTA","RESIBO","BARCODE","REPORTS","LOW STOCK","STAFF","FILIPINO"].map((item, index) => <span key={`${item}-${index}`}><i/> {item}</span>)}
        </div>
      </div>

      <section className="manifesto section-shell" data-reveal>
        <div className="section-index">01 / WHY TINDAHAN</div>
        <div className="manifesto-grid">
          <h2>Built around the way a small store <em>actually moves.</em></h2>
          <div className="manifesto-copy">
            <p>Small stores already have enough going on. Customers are waiting, deliveries arrive, stock disappears faster than expected, and receipts pile up.</p>
            <p>TINDAHAN keeps the important things in one place, then gets out of the way.</p>
          </div>
        </div>
        <div className="paper-notes" aria-hidden="true">
          <article className="paper-note note-one"><span>PAUBOS</span><strong>Coke 1.5L</strong><small>4 na lang</small><i/></article>
          <article className="paper-note note-two"><span>BENTA TODAY</span><strong>₱4,280</strong><small>18 transactions</small><i/></article>
          <article className="paper-note note-three"><span>DELIVERY</span><strong>12 items</strong><small>ready to check</small><i/></article>
        </div>
      </section>

      <section className="features section-shell" id="features">
        <div className="section-heading" data-reveal>
          <div><div className="section-index">02 / WHAT IT DOES</div><h2>Everything you need.<br/><span>Nothing you don&apos;t.</span></h2></div>
          <p>Each part of TINDAHAN is built around a normal store task, so the app feels familiar even if you are not used to business software.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => <article className={`feature-card ${feature.className}`} key={feature.kicker} data-reveal style={{"--delay": `${index * 60}ms`} as React.CSSProperties}>
            <div className="feature-top"><span className="feature-icon"><Icon name={feature.icon}/></span><span className="feature-kicker">{feature.kicker}</span></div>
            <h3>{feature.title}</h3>
            <p>{feature.copy}</p>
            {feature.kicker === "Inventory" && <div className="feature-visual inventory-visual" aria-hidden="true">
              <div><span><i className="sku orange"/>Lucky Me Pancit Canton</span><b>28 pcs</b></div>
              <div><span><i className="sku green"/>Coke 1.5L</span><b className="low-pill">4 left</b></div>
              <div><span><i className="sku cream"/>Argentina Corned Beef</span><b>16 pcs</b></div>
            </div>}
            {feature.kicker === "Sales" && <div className="feature-visual sales-visual" aria-hidden="true">
              <div className="sale-row"><span>2 × Coke 1.5L</span><b>₱150</b></div>
              <div className="sale-row"><span>1 × Pancit Canton</span><b>₱16</b></div>
              <div className="sale-total"><span>Total</span><b>₱166</b></div>
              <div className="sale-confirm"><Icon name="check"/> Sale recorded</div>
            </div>}
            {feature.kicker === "Receipt intelligence" && <div className="feature-visual receipt-mini" aria-hidden="true">
              <div className="receipt-mini-paper"><b>ABC WHOLESALE</b><i/><span>Coke 1.5L&nbsp;&nbsp; 12</span><span>Sardines&nbsp;&nbsp;&nbsp;&nbsp; 24</span><span>Coffee 3in1&nbsp;&nbsp; 30</span><i/><strong>TOTAL&nbsp;&nbsp; ₱2,840</strong><div className="scan-beam"/></div>
              <div className="receipt-ready"><Icon name="sparkle"/><span><b>12 items found</b><small>Review before adding stock</small></span></div>
            </div>}
            {feature.kicker === "Reports" && <div className="feature-visual report-visual" aria-hidden="true">
              <div className="report-number"><small>This week</small><strong>₱28,640</strong><span>Sales recorded</span></div>
              <div className="report-bars"><i/><i/><i/><i/><i/><i/><i/></div>
            </div>}
            {feature.kicker === "Staff access" && <div className="feature-visual people-visual" aria-hidden="true">
              <div className="avatar owner">M</div><div className="people-copy"><b>Maria Santos</b><small>Owner</small></div><span>Full access</span>
              <div className="avatar staff">J</div><div className="people-copy"><b>Jun Reyes</b><small>Staff</small></div><span>Store access</span>
            </div>}
            {feature.kicker === "English + Filipino" && <div className="feature-visual language-visual" aria-hidden="true">
              <span className="lang active">EN</span><span className="switch-line"><i/></span><span className="lang">FIL</span>
              <div><b>Low stock</b><small>Paubos na ang paninda</small></div>
            </div>}
          </article>)}
        </div>
      </section>

      <section className="receipt-story" id="receipts">
        <div className="receipt-story-glow" aria-hidden="true"/>
        <div className="section-shell receipt-story-grid">
          <div className="receipt-demo" data-reveal>
            <div className="receipt-camera-frame"><span className="corner tl"/><span className="corner tr"/><span className="corner bl"/><span className="corner br"/>
              <div className="real-receipt">
                <div className="receipt-logo"><Icon name="store"/></div>
                <b>ABC WHOLESALE CENTER</b><small>Angeles City, Pampanga</small><i/>
                <span>COCA COLA 1.5L&nbsp;&nbsp;&nbsp;&nbsp; 12&nbsp;&nbsp; 900.00</span>
                <span>ARGENTINA CORNED&nbsp;&nbsp;&nbsp;&nbsp;24&nbsp; 816.00</span>
                <span>LUCKY ME PC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30&nbsp; 450.00</span>
                <span>NESCAFE 3IN1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30&nbsp; 240.00</span>
                <i/><strong>TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₱2,406.00</strong>
                <div className="receipt-scan-line"/>
              </div>
            </div>
            <div className="scan-result-card result-one"><span><Icon name="sparkle"/></span><div><small>Detected</small><b>ABC Wholesale Center</b></div></div>
            <div className="scan-result-card result-two"><span><Icon name="check"/></span><div><small>Ready for review</small><b>4 product lines</b></div></div>
          </div>

          <div className="receipt-copy" data-reveal>
            <div className="section-index light">03 / RECEIPT INTELLIGENCE</div>
            <h2>Take a photo.<br/><span>Skip the typing.</span></h2>
            <p className="receipt-lede">TINDAHAN reads supplier receipts and prepares a stock update for you. It never changes inventory behind your back.</p>
            <div className="receipt-steps">
              <div><b>01</b><span><strong>Scan or upload</strong><small>Use your phone camera or choose a receipt photo.</small></span></div>
              <div><b>02</b><span><strong>Check what TINDAHAN found</strong><small>Fix quantities, match products, or leave out lines you do not need.</small></span></div>
              <div><b>03</b><span><strong>You approve the update</strong><small>Stock changes only after you say everything looks right.</small></span></div>
            </div>
            <div className="human-control"><Icon name="shield"/><span><b>AI suggests. You decide.</b><small>Automation helps with the repetitive work without taking control away from the owner.</small></span></div>
          </div>
        </div>
      </section>

      <section className="how section-shell" id="how">
        <div className="section-heading centered" data-reveal>
          <div className="section-index">04 / HOW IT FITS YOUR DAY</div>
          <h2>Simple enough for day one.<br/><span>Useful enough for every day after.</span></h2>
        </div>
        <div className="how-track" data-reveal>
          <article><div className="how-number">01</div><div className="how-icon"><Icon name="store"/></div><h3>Set up your store</h3><p>Add the basics, choose your preferences, then start with products you already sell.</p><span className="how-caption">A few minutes to get oriented</span></article>
          <div className="how-connector" aria-hidden="true"><i/></div>
          <article><div className="how-number">02</div><div className="how-icon"><Icon name="bag"/></div><h3>Run the day</h3><p>Record sales, check stock, scan barcodes, and process deliveries as they happen.</p><span className="how-caption">Built around quick store tasks</span></article>
          <div className="how-connector" aria-hidden="true"><i/></div>
          <article><div className="how-number">03</div><div className="how-icon"><Icon name="chart"/></div><h3>Know what needs attention</h3><p>See low stock, sales activity, recent changes, and reports without doing the math yourself.</p><span className="how-caption">Clear answers, not dashboards for dashboards&apos; sake</span></article>
        </div>
      </section>

      <section className="control section-shell" data-reveal>
        <div className="control-panel">
          <div className="control-art" aria-hidden="true">
            <div className="control-ring ring-one"/><div className="control-ring ring-two"/><div className="control-ring ring-three"/>
            <div className="control-core"><Icon name="shield"/><span>YOUR STORE</span><b>YOU&apos;RE IN CONTROL</b></div>
            <div className="control-chip chip-private"><Icon name="receipt"/><span>Private receipts</span></div>
            <div className="control-chip chip-history"><Icon name="package"/><span>Traceable stock</span></div>
            <div className="control-chip chip-people"><Icon name="users"/><span>Separate staff access</span></div>
          </div>
          <div className="control-copy">
            <div className="section-index">05 / BUILT TO BE TRUSTED</div>
            <h2>Calm on the outside.<br/><span>Serious underneath.</span></h2>
            <p>The app stays simple for the person using it, while the important things—store access, inventory history, receipt privacy, and repeated actions—are handled carefully behind the scenes.</p>
            <div className="trust-list">
              <span><Icon name="check"/> Inventory changes keep a history</span>
              <span><Icon name="check"/> Receipt images stay private</span>
              <span><Icon name="check"/> Staff use their own accounts</span>
              <span><Icon name="check"/> Receipt suggestions need approval</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <div className="faq-intro" data-reveal><div className="section-index">06 / QUESTIONS</div><h2>Before you try it.</h2><p>No technical language. Just the things you probably want to know first.</p></div>
        <div className="faq-list" data-reveal>
          <details><summary>Is TINDAHAN a POS system?<span>+</span></summary><p>No. TINDAHAN is a lightweight store operating assistant. It helps with inventory, sales records, supplier receipts, reports, and everyday store tasks without trying to replace your whole business with a complex enterprise system.</p></details>
          <details><summary>Do I need special barcode equipment?<span>+</span></summary><p>No. You can use compatible barcodes with a camera, a keyboard-style scanner, or enter products manually when needed.</p></details>
          <details><summary>Will a scanned receipt change my stock automatically?<span>+</span></summary><p>No. TINDAHAN prepares a review first. You check the items and quantities, then approve the update yourself.</p></details>
          <details><summary>Can my staff use the app too?<span>+</span></summary><p>Yes. Staff can have their own account and store access, so you do not need to share the owner password.</p></details>
          <details><summary>Can I use TINDAHAN in Filipino?<span>+</span></summary><p>Yes. The interface can switch between English and Filipino.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-shape shape-one" aria-hidden="true"/><div className="final-shape shape-two" aria-hidden="true"/><div className="final-shape shape-three" aria-hidden="true"/>
        <div className="section-shell final-inner" data-reveal>
          <span className="final-mark"><Icon name="store"/></span>
          <div className="final-kicker">Your store already moves fast.</div>
          <h2>Give yourself a clearer way<br/>to <span>keep up.</span></h2>
          <p>Open TINDAHAN and see how inventory, sales, receipts, and reports can feel simpler in one place.</p>
          <div className="final-actions"><a className="button button-light button-large" href={`${APP_URL}/register`}>Try TINDAHAN <Icon name="arrow"/></a><a className="button button-dark-ghost button-large" href={`${APP_URL}/sign-in`}>I already have an account</a></div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div><a className="brand footer-brand" href="#top"><span className="brand-glyph"><Icon name="store"/></span><span>Tindahan</span></a><p>A Store Operating Assistant for small Philippine stores.</p></div>
        <div className="footer-links"><a href="#features">Features</a><a href="#receipts">Receipt scan</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div>
        <div className="footer-actions"><a href={`${APP_URL}/sign-in`}>Sign in ↗</a><a href={`${APP_URL}/register`}>Open TINDAHAN ↗</a></div>
      </div>
      <div className="section-shell footer-bottom"><span>© 2026 TINDAHAN</span><span>Built for the everyday rhythm of a small store.</span></div>
    </footer>
  </>;
}
