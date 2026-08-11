const configuredSiteUrl = (process.env.SITE_URL ?? "https://www.trytindahan.store").replace(/\/+$/, "");

export const SITE_URL = configuredSiteUrl === "https://trytindahan.store"
  ? "https://www.trytindahan.store"
  : configuredSiteUrl;
export const SITE_NAME = "Tindahan";
export const SITE_TITLE = "Tindahan | Store Assistant for Sari-Sari Stores";
export const SITE_DESCRIPTION = "Simple inventory, sales, barcode scanning, receipt intelligence, reports, and staff access for sari-sari stores and small retailers in the Philippines.";

export const isIndexableProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";
