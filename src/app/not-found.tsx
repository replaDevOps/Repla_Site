import { COMPANY } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#050505",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: 24,
        }}
      >
        <div>
          <p style={{ color: "#c41e24", fontSize: 48, margin: 0 }}>404</p>
          <h1 style={{ fontSize: 28 }}>Page not found</h1>
          <p style={{ color: "#a3a3a3" }}>This URL is not a published {COMPANY.shortName} page.</p>
          <a href="/en" style={{ color: "#c41e24" }}>
            Return home
          </a>
        </div>
      </body>
    </html>
  );
}
