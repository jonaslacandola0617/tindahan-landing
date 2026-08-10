import {
  ArrowRight,
  ArrowUpRight,
  BoxIcon,
  ChartIcon,
  CheckIcon,
  GlobeIcon,
  ReceiptIcon,
  ScanIcon,
  ShieldIcon,
  Sparkles,
  StoreIcon,
  UsersIcon,
  ZapIcon,
} from "@/components/icons";
import { AmbientCursor, MobileNav, ScrollReveal } from "@/components/landing-client";

const APP = (process.env.APP_URL?.trim() || "https://tindahan.vercel.app").replace(/\/+$/, "");

const features = [
  { icon: BoxIcon, eyebrow: "Inventory", title: "Know what you have. Know what needs attention.", copy: "Products, stock movements, low-stock visibility, and a history you can actually trace." },
  { icon: ScanIcon, eyebrow: "Barcode", title: "Scan when it is faster than typing.", copy: "Record sales and find products with camera scanning, manual entry, or compatible scanners." },
  { icon: ReceiptIcon, eyebrow: "Receipt Intelligence", title: "Turn supplier receipts into a reviewable stock proposal.", copy: "TINDAHAN reads the receipt, organizes the lines, remembers mappings, and waits for your approval." },
  { icon: ChartIcon, eyebrow: "Reports", title: "See the store without building a spreadsheet first.", copy: "Sales, inventory movement, stock attention, and useful operational context in one place." },
  { icon: UsersIcon, eyebrow: "Staff access", title: "Give the team what they need—without giving away everything.", copy: "Owner and staff roles keep store controls, daily work, and account access intentionally separated." },
  { icon: GlobeIcon, eyebrow: "English + Filipino", title: "Made to feel closer to the people actually using it.", copy: "Switch between English and Filipino across the interface, including everyday workflows and settings." },
];

export default function HomePage() {
  return (
    <main>
      <AmbientCursor />
      <ScrollReveal />
      <div className="noise" aria-hidden="true" />
      <div className="cursor-aura" aria-hidden="true" />

      <header className="nav-shell">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="TINDAHAN home">
            <span className="brand-icon"><StoreIcon /></span>
            <span>TINDAHAN</span>
            <i>β</i>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#receipt-intelligence">Receipt Intelligence</a>
            <a href="#workflow">How it works</a>
            <a href="#pilot">Pilot</a>
          </div>
          <div className="nav-actions">
            <a className="text-link" href={`${APP}/sign-in`}>Sign in</a>
            <a className="button button-small button-light" href={`${APP}/register`}>Try TINDAHAN <ArrowUpRight /></a>
          </div>
          <MobileNav appUrl={APP} />
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow-pill"><span className="live-dot" /> Built for the everyday Philippine store</div>
            <h1>Run the store.<br/><span className="gradient-text">Not the paperwork.</span></h1>
            <p className="hero-lede">TINDAHAN brings inventory, sales, receipts, reports, and staff access into one focused operating system—so the work around the store stops feeling scattered.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`${APP}/register`}>Start exploring <ArrowRight /></a>
              <a className="button button-ghost" href="#receipt-intelligence"><Sparkles /> See receipt intelligence</a>
            </div>
            <div className="trust-row">
              <span><CheckIcon /> Human-reviewed stock updates</span>
              <span><CheckIcon /> Private receipt storage</span>
              <span><CheckIcon /> EN / FIL</span>
            </div>
          </div>

          <div className="hero-stage" data-reveal aria-label="TINDAHAN product interface preview">
            <div className="stage-ring ring-one"/><div className="stage-ring ring-two"/>
            <div className="floating-chip chip-sales"><span className="mini-icon emerald"><ChartIcon /></span><span><b>Today&apos;s sales</b><strong>₱8,420</strong></span><em>+12%</em></div>
            <div className="floating-chip chip-stock"><span className="mini-icon olive"><BoxIcon /></span><span><b>Low stock</b><strong>7 items</strong></span><em>Review</em></div>
            <div className="app-window">
              <div className="app-topbar"><div className="window-dots"><i/><i/><i/></div><div className="app-address">app.tindahan</div><span className="app-live"><i/> live</span></div>
              <div className="app-frame">
                <aside className="mock-sidebar">
                  <div className="mock-brand"><span><StoreIcon /></span><b>Tindahan</b></div>
                  <div className="mock-nav active"><span>⌂</span> Dashboard</div>
                  <div className="mock-nav"><span>▣</span> Inventory</div>
                  <div className="mock-nav"><span>◇</span> Sales</div>
                  <div className="mock-nav"><span>⌑</span> Receipts</div>
                  <div className="mock-nav"><span>↗</span> Reports</div>
                  <div className="mock-spacer" />
                  <div className="mock-nav"><span>⚙</span> Settings</div>
                </aside>
                <div className="mock-main">
                  <div className="mock-heading"><div><small>MONDAY, AUGUST 10</small><h3>Good afternoon, Maria.</h3><p>Here&apos;s what&apos;s happening in your store.</p></div><button>+ Record sale</button></div>
                  <div className="metric-grid">
                    <div className="metric-card"><span>Sales today</span><strong>₱8,420</strong><small>42 transactions</small></div>
                    <div className="metric-card"><span>Products</span><strong>684</strong><small>7 need attention</small></div>
                    <div className="metric-card accent"><span>Receipt queue</span><strong>2</strong><small>Ready to review</small></div>
                  </div>
                  <div className="dashboard-grid">
                    <div className="chart-card">
                      <div className="card-title"><span>Sales this week</span><small>View report ↗</small></div>
                      <div className="chart-bars">{[42,60,52,76,66,88,72].map((height,index)=><i key={index} style={{height:`${height}%`}}><span /></i>)}</div>
                      <div className="chart-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
                    </div>
                    <div className="attention-card"><div className="card-title"><span>Needs attention</span><small>7 items</small></div><div className="attention-row"><i className="rice"/><span><b>Jasmine Rice 5kg</b><small>3 left in stock</small></span><em>Low</em></div><div className="attention-row"><i className="coffee"/><span><b>3-in-1 Coffee</b><small>8 sachets left</small></span><em>Low</em></div><div className="attention-row"><i className="soap"/><span><b>Bath Soap</b><small>12 pieces left</small></span><em>Watch</em></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="receipt-float">
              <div className="receipt-paper"><div className="receipt-notch"/><b>SUPPLIER RECEIPT</b><span>Jasmine Rice 5kg&nbsp;&nbsp; 6</span><span>Coffee Sachet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24</span><span>Bath Soap&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12</span><hr/><strong>₱2,846.00</strong><div className="scan-line"/></div>
              <div className="receipt-status"><span><Sparkles /></span><div><b>Receipt understood</b><small>3 lines ready to review</small></div></div>
            </div>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true"><div><span>INVENTORY</span><i>✦</i><span>SALES</span><i>✦</i><span>BARCODE SCANNING</span><i>✦</i><span>RECEIPT INTELLIGENCE</span><i>✦</i><span>REPORTS</span><i>✦</i><span>STAFF ACCESS</span><i>✦</i><span>INVENTORY</span><i>✦</i><span>SALES</span><i>✦</i><span>BARCODE SCANNING</span><i>✦</i><span>RECEIPT INTELLIGENCE</span><i>✦</i></div></div>
      </section>

      <section className="section problem-section">
        <div className="container">
          <div className="section-kicker"><span>01</span> LESS SCATTER. MORE CONTROL.</div>
          <div className="problem-grid" data-reveal>
            <h2>Small-store work is simple.<br/><em>The tools around it usually aren&apos;t.</em></h2>
            <div className="problem-copy"><p>Stock in one notebook. Sales in another. Supplier receipts in a drawer. Product counts in someone&apos;s memory. TINDAHAN connects the everyday pieces without turning the store into an enterprise software project.</p><a href="#features">Explore the system <ArrowRight /></a></div>
          </div>
          <div className="chaos-board" data-reveal>
            <div className="chaos-card notebook"><span className="chaos-label">Notebook</span><div className="scribble">Rice — 12<br/>Coffee — 24?<br/>Soap — <s>8</s> 10</div></div>
            <div className="chaos-card calculator"><span className="chaos-label">Calculator</span><div className="calc-screen">8,420.00</div><div className="calc-keys">{Array.from({length:12}).map((_,i)=><i key={i}/>)}</div></div>
            <div className="chaos-card paper"><span className="chaos-label">Receipt pile</span><ReceiptIcon /><strong>Supplier #2481</strong><small>What did we receive?</small></div>
            <div className="merge-beam"><span>TINDAHAN</span><i/><i/><i/></div>
            <div className="clarity-card"><div className="clarity-glow"/><span className="clarity-kicker">ONE STORE VIEW</span><strong>684 products</strong><div className="clarity-row"><span>Inventory status</span><b>7 need attention</b></div><div className="clarity-row"><span>Today&apos;s sales</span><b>₱8,420</b></div><div className="clarity-row"><span>Receipts</span><b>2 to review</b></div><div className="clarity-row"><span>Team</span><b>3 members</b></div></div>
          </div>
        </div>
      </section>

      <section className="section features-section" id="features">
        <div className="container">
          <div className="section-heading centered" data-reveal><div className="section-kicker"><span>02</span> THE STORE OPERATING LAYER</div><h2>Everything important.<br/><em>Nothing pretending to be an ERP.</em></h2><p>Each part is built around a real store task—fast enough for the counter, clear enough for the end of the day.</p></div>
          <div className="feature-bento">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return <article className={`feature-card feature-${index+1}`} data-reveal key={feature.title}><div className="feature-top"><span className="feature-icon"><Icon /></span><small>{feature.eyebrow}</small></div><h3>{feature.title}</h3><p>{feature.copy}</p>{index === 0 && <InventoryVisual />}{index === 1 && <BarcodeVisual />}{index === 2 && <ReceiptVisual />}{index === 3 && <ReportsVisual />}{index === 4 && <TeamVisual />}{index === 5 && <LocaleVisual />}</article>;
            })}
          </div>
        </div>
      </section>

      <section className="section intelligence-section" id="receipt-intelligence">
        <div className="intelligence-light one"/><div className="intelligence-light two"/>
        <div className="container intelligence-grid">
          <div className="intelligence-copy" data-reveal>
            <div className="section-kicker light"><span>03</span> RECEIPT INTELLIGENCE</div>
            <h2>Your supplier receipt<br/><em>becomes a decision, not data entry.</em></h2>
            <p>Upload or capture the receipt. TINDAHAN extracts the important details, organizes the lines, suggests product matches, and gives you a clean review before anything touches stock.</p>
            <div className="intelligence-points"><span><ShieldIcon /> AI proposes. You approve.</span><span><ZapIcon /> Product mappings can be remembered.</span><span><ReceiptIcon /> Original receipt stays private.</span></div>
            <a className="button button-light" href={`${APP}/register`}>Try the workflow <ArrowUpRight /></a>
          </div>
          <div className="intelligence-machine" data-reveal>
            <div className="machine-grid"/>
            <div className="machine-node node-receipt"><span><ReceiptIcon /></span><b>Receipt image</b><small>Private upload</small></div>
            <div className="machine-connector connector-a"><i/></div>
            <div className="machine-core"><div className="core-orbit"><i/><i/><i/></div><span><Sparkles /></span><b>Receipt Intelligence</b><small>Extract · normalize · match</small></div>
            <div className="machine-connector connector-b"><i/></div>
            <div className="machine-node node-review"><span><CheckIcon /></span><b>Review proposal</b><small>You stay in control</small></div>
            <div className="machine-output"><div><small>JASMINE RICE 5KG</small><b>6 units</b><span>Matched to inventory <CheckIcon /></span></div><div><small>3-IN-1 COFFEE</small><b>24 sachets</b><span>Matched to inventory <CheckIcon /></span></div><div><small>BATH SOAP</small><b>12 pieces</b><span>New mapping suggested <Sparkles /></span></div></div>
          </div>
        </div>
      </section>

      <section className="section workflow-section" id="workflow">
        <div className="container">
          <div className="section-heading split" data-reveal><div><div className="section-kicker"><span>04</span> BUILT AROUND CONFIDENCE</div><h2>Automation where it helps.<br/><em>Control where it matters.</em></h2></div><p>TINDAHAN is designed around one rule: the system can make the boring parts faster, but important store decisions stay understandable and reviewable.</p></div>
          <div className="workflow-track">
            <div className="flow-line"/>
            <FlowStep number="01" icon={<ScanIcon />} title="Capture" copy="Scan a barcode, record a sale, or upload a supplier receipt." />
            <FlowStep number="02" icon={<Sparkles />} title="Understand" copy="TINDAHAN organizes the data and surfaces what deserves attention." />
            <FlowStep number="03" icon={<CheckIcon />} title="Confirm" copy="Review meaningful changes before they become store history." />
            <FlowStep number="04" icon={<ChartIcon />} title="See the store" copy="Inventory, reports, and daily activity stay connected afterward." />
          </div>
        </div>
      </section>

      <section className="section built-section">
        <div className="container built-grid">
          <div className="built-visual" data-reveal>
            <div className="arch-grid"/><div className="arch-ring ring-a"/><div className="arch-ring ring-b"/>
            <div className="arch-core"><StoreIcon /><b>TINDAHAN</b><small>STORE OPERATING ASSISTANT</small></div>
            <div className="arch-pill pill-aws">AWS <span>Private storage + worker</span></div>
            <div className="arch-pill pill-azure">Azure AI <span>Document intelligence</span></div>
            <div className="arch-pill pill-db">PostgreSQL <span>Store data + history</span></div>
            <div className="arch-pill pill-web">Next.js <span>Responsive application</span></div>
          </div>
          <div className="built-copy" data-reveal><div className="section-kicker"><span>05</span> MORE THAN A PRETTY DASHBOARD</div><h2>Built like a real application.<br/><em>Because it is one.</em></h2><p>Private cloud storage, background receipt processing, role-based access, store isolation, traceable inventory movement, idempotent approvals, and provider integrations sit behind the interface.</p><div className="tech-list"><span>Next.js</span><span>TypeScript</span><span>PostgreSQL</span><span>Prisma</span><span>AWS S3</span><span>AWS Lambda</span><span>Azure AI</span><span>Xendit</span></div></div>
        </div>
      </section>

      <section className="section pilot-section" id="pilot">
        <div className="container pilot-card">
          <div className="pilot-stars" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
          <div className="pilot-copy" data-reveal><span className="pilot-badge"><i/> PILOT MODE</span><h2>See what a modern<br/>neighborhood store system<br/><em>can feel like.</em></h2><p>TINDAHAN is currently running as a working pilot/test-mode SaaS project. Explore the product, create an account, and try the workflows for yourself.</p><div className="pilot-actions"><a className="button button-light" href={`${APP}/register`}>Create an account <ArrowUpRight /></a><a className="pilot-signin" href={`${APP}/sign-in`}>Already have one? Sign in <ArrowRight /></a></div></div>
          <div className="pilot-device" data-reveal><div className="phone-glow"/><div className="phone"><div className="phone-top"><i/><span>TINDAHAN</span><b>•••</b></div><div className="phone-content"><small>GOOD AFTERNOON</small><h4>Your store at a glance.</h4><div className="phone-sales"><span>Sales today</span><strong>₱8,420</strong><small>42 transactions</small><div className="spark-chart">{[24,38,30,58,46,76,60,84,72,92].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div><div className="phone-row"><span><i className="orange-dot"/>Receipt ready</span><b>Review →</b></div><div className="phone-row"><span><i className="olive-dot"/>Low stock</span><b>7 items →</b></div><button>+ Record sale</button></div></div></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-icon"><StoreIcon /></span><span>TINDAHAN</span></a><p>A Store Operating Assistant for independent Philippine retailers.</p></div><div className="footer-links"><div><b>Product</b><a href="#features">Features</a><a href="#receipt-intelligence">Receipt Intelligence</a><a href="#workflow">How it works</a></div><div><b>Application</b><a href={`${APP}/sign-in`}>Sign in ↗</a><a href={`${APP}/register`}>Create account ↗</a></div></div></div>
        <div className="container footer-bottom"><span>© 2026 TINDAHAN</span><span>Designed for the pace of a real store.</span></div>
      </footer>
    </main>
  );
}

function FlowStep({number, icon, title, copy}:{number:string;icon:React.ReactNode;title:string;copy:string}) { return <article className="flow-step" data-reveal><span className="flow-number">{number}</span><div className="flow-icon">{icon}</div><h3>{title}</h3><p>{copy}</p></article>; }

function InventoryVisual(){return <div className="feature-visual inventory-visual"><div className="inv-head"><span>Product</span><span>Stock</span></div><div className="inv-row"><i className="product-dot rice"/><span>Jasmine Rice 5kg</span><b>3</b><em>Low</em></div><div className="inv-row"><i className="product-dot coffee"/><span>3-in-1 Coffee</span><b>28</b><em className="good">Good</em></div><div className="inv-row"><i className="product-dot soap"/><span>Bath Soap</span><b>12</b><em className="watch">Watch</em></div></div>}
function BarcodeVisual(){return <div className="feature-visual barcode-visual"><div className="scanner-corners"><i/><i/><i/><i/></div><div className="barcode-lines">|||| | ||| || |||| | | |||</div><div className="laser"/><span>4800888134012</span><small>Product found · ₱18.00</small></div>}
function ReceiptVisual(){return <div className="feature-visual receipt-visual"><div className="mini-receipt"><b>SUPPLIER</b><span>Rice 5kg · 6</span><span>Coffee · 24</span><span>Soap · 12</span><hr/><strong>₱2,846</strong><div className="mini-scan"/></div><div className="mapping-lines"><span><i/> Rice <b>Matched</b></span><span><i/> Coffee <b>Matched</b></span><span><i/> Soap <b>Suggested</b></span></div></div>}
function ReportsVisual(){return <div className="feature-visual reports-visual"><div className="report-line">{[20,30,24,48,44,72,68,84].map((v,i)=><i key={i} style={{height:`${v}%`}}/>)}</div><div className="report-stat"><span>This week</span><strong>₱42.8k</strong><small>Sales recorded</small></div></div>}
function TeamVisual(){return <div className="feature-visual team-visual"><div className="avatar owner">MS</div><div><b>Maria Santos</b><small>Owner · full store access</small></div><div className="team-divider"/><div className="avatar staff">JP</div><div><b>Juan P.</b><small>Staff · daily workflows</small></div></div>}
function LocaleVisual(){return <div className="feature-visual locale-visual"><div className="locale-switch"><span className="active">EN</span><span>FIL</span></div><div className="locale-copy"><small>LOW STOCK</small><b>7 products need attention</b><p>Review items before they run out.</p></div><div className="locale-arrow">⇄</div><div className="locale-copy fil"><small>PAUBOS NA</small><b>7 produkto ang dapat tingnan</b><p>Tingnan bago tuluyang maubos.</p></div></div>}
