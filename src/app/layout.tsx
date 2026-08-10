import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TINDAHAN — Your store, finally in one place",
  description:
    "A modern store operating assistant for Philippine neighborhood stores. Inventory, sales, barcode scanning, receipt intelligence, reports, and staff access in one focused system.",
  keywords: [
    "Tindahan",
    "inventory management Philippines",
    "sari-sari store software",
    "mini-mart inventory",
    "receipt scanning",
    "store management",
  ],
  openGraph: {
    title: "TINDAHAN — Your store, finally in one place",
    description:
      "Inventory, sales, receipts, reports, and the everyday work of running a small store—brought together in one focused system.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07140f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
