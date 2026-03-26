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
    url: "https://townmedialabs.com/free-tools",
    siteName: "TML Agency",
    type: "website",
  },
  alternates: {
    canonical: "https://townmedialabs.com/free-tools",
  },
};

export default function FreeToolsPage() {
  return <FreeToolsIndexClient />;
}
