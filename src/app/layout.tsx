import { COMPANY, SITE_TITLE, SITE_URL } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c10" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    "REPLA Technologies delivers enterprise-grade AI, custom software, web, mobile, cloud, and cybersecurity solutions for organizations in Saudi Arabia and worldwide.",
  keywords: [
    "REPLA Technologies",
    "AI solutions",
    "Artificial Intelligence Saudi Arabia",
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud & DevOps",
    "Cybersecurity",
    "Dedicated Development Teams",
    "Riyadh IT Company",
  ].join(", "),
  authors: [{ name: COMPANY.shortName, url: SITE_URL }],
  creator: COMPANY.shortName,
  publisher: COMPANY.shortName,
  category: "technology",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: COMPANY.shortName,
    title: SITE_TITLE,
    description:
      "REPLA Technologies delivers enterprise-grade AI, custom software, web, mobile, cloud, and cybersecurity solutions for organizations in Saudi Arabia and worldwide.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
          alt: `${COMPANY.shortName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "REPLA Technologies delivers enterprise-grade AI, custom software, web, mobile, cloud, and cybersecurity solutions for organizations in Saudi Arabia and worldwide.",
    images: [`${SITE_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

