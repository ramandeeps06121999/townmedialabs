import type { Metadata } from "next";
import CaseStudiesIndexClient from "./CaseStudiesIndexClient";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio | TML Agency — Proven Digital Marketing Results",
  description:
    "Explore TML Agency's case studies showcasing real results for real businesses. From 300% more patient bookings to 10x organic traffic growth — see what we can do for you.",
  keywords: [
    "digital marketing case studies",
    "marketing portfolio",
    "SEO case studies",
    "Google Ads results",
    "social media marketing results",
    "TML Agency portfolio",
    "marketing ROI examples",
  ],
  openGraph: {
    title: "Case Studies & Portfolio | TML Agency",
    description:
      "Real results for real businesses. Explore our portfolio of successful digital marketing campaigns across industries.",
    url: "https://townmedialabs.ca/case-studies",
    siteName: "TML Agency",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TML Agency Case Studies & Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Case Studies & Portfolio | TML Agency",
    description:
      "Real results for real businesses. Explore our portfolio of successful digital marketing campaigns across industries.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://townmedialabs.ca/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesIndexClient />;
}
