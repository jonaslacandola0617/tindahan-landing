import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./showcase.css";
import "./usability.css";
import "./responsive-header.css";

export const metadata: Metadata = {
  title: "Tindahan — Store Operating Assistant",
  description: "Inventory, sales, barcode scanning, receipt intelligence, reports, and staff access for small Philippine stores.",
  applicationName: "Tindahan",
  keywords: ["Tindahan", "inventory", "sales", "receipt scanner", "sari-sari store", "Philippines", "store management"],
  openGraph: {
    title: "Tindahan — Less guessing. More control.",
    description: "A store operating assistant built for the everyday rhythm of small Philippine stores.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
