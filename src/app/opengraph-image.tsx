import { ImageResponse } from "next/og";

export const alt = "Tindahan — store assistant for sari-sari stores and small Philippine retailers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#FAF8F5",
        color: "#1A1D1A",
        fontFamily: "Arial, sans-serif",
        padding: "72px 80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          right: -110,
          top: -130,
          borderRadius: 999,
          background: "#E8F2EE",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 310,
          height: 310,
          right: 115,
          bottom: -180,
          borderRadius: 999,
          background: "#FDF6EE",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 1, width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "#1B4D3E",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 9 4.5 4h15l1 5" />
              <path d="M4.5 9v10.5h15V9" />
              <path d="M9.5 19.5v-6h5v6" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>Tindahan</div>
            <div style={{ marginTop: 5, color: "#6B7B52", fontSize: 15, fontWeight: 700, letterSpacing: 2.3, textTransform: "uppercase" }}>
              Store operating assistant
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, color: "#1B4D3E", fontSize: 17, fontWeight: 700 }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: "#D97724" }} />
            BUILT FOR SMALL PHILIPPINE STORES
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.02, fontWeight: 800, letterSpacing: -3.2 }}>
            Run the store.
            <br />
            <span style={{ color: "#1B4D3E" }}>Tindahan keeps up.</span>
          </div>
          <div style={{ marginTop: 26, maxWidth: 760, color: "#5F665E", fontSize: 24, lineHeight: 1.45 }}>
            Inventory, sales, barcode scanning, receipt intelligence, reports, and staff access — without the complicated business software.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, color: "#5F665E", fontSize: 16, fontWeight: 700 }}>
          <span>Inventory</span><span style={{ color: "#D97724" }}>•</span>
          <span>Sales</span><span style={{ color: "#D97724" }}>•</span>
          <span>Receipts</span><span style={{ color: "#D97724" }}>•</span>
          <span>Reports</span><span style={{ color: "#D97724" }}>•</span>
          <span>English + Filipino</span>
        </div>
      </div>
    </div>,
    size,
  );
}
