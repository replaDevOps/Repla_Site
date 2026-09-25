import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

const SITEMAP_URL = "https://replatechnologies.com/sitemap.xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: SITEMAP_URL,
    host: SITE_URL,
  };
}
