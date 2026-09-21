import { COMPANY, SITE_URL } from "@/lib/site";
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
    default: `${COMPANY.brand} | AI & Enterprise Software Solutions`,
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
  ],
  authors: [{ name: COMPANY.brand, url: SITE_URL }],
  creator: COMPANY.brand,
  publisher: COMPANY.brand,
  category: "technology",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: COMPANY.shortName,
    title: `${COMPANY.brand} | AI & Enterprise Software Solutions`,
    description:
      "REPLA Technologies delivers enterprise-grade AI, custom software, web, mobile, cloud, and cybersecurity solutions for organizations in Saudi Arabia and worldwide.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY.brand} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.brand} | AI & Enterprise Software Solutions`,
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

