import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TINDAHAN — Store Operating Assistant",
  description: "Inventory, sales, barcode scanning, receipt intelligence, reports, and staff access for small Philippine stores.",
  applicationName: "TINDAHAN",
  keywords: ["Tindahan", "inventory", "sales", "receipt scanner", "sari-sari store", "Philippines", "store management"],
  openGraph: {
    title: "TINDAHAN — Less guessing. More control.",
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
