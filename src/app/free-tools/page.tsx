import type { Metadata } from "next";
import FreeToolsIndexClient from "./FreeToolsIndexClient";

export const metadata: Metadata = {
  title: "Free Marketing Tools & Calculators | TML Agency",
  description:
    "Use our free digital marketing tools and calculators. SEO audit checklist, website speed calculator, social media post generator, Google Ads budget planner, ROI calculator, and meta tag generator.",
  keywords: [
    "free marketing tools",
    "SEO audit checklist",
    "website speed calculator",
    "social media post generator",
    "Google Ads budget calculator",
    "ROI calculator",
    "meta tag generator",
    "free SEO tools",
    "digital marketing calculators",
  ],
  openGraph: {
    title: "Free Marketing Tools & Calculators | TML Agency",
    description:
      "Free interactive tools to audit your SEO, calculate ad budgets, measure ROI, generate meta tags, and more. No signup required.",
    url: "https://townmedialabs.ca/free-tools",
    siteName: "TML Agency",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Free Marketing Tools - TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Free Marketing Tools & Calculators | TML Agency",
    description:
      "Free interactive tools to audit your SEO, calculate ad budgets, measure ROI, generate meta tags, and more. No signup required.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://townmedialabs.ca/free-tools",
  },
};

export default function FreeToolsPage() {
  return <FreeToolsIndexClient />;
}
