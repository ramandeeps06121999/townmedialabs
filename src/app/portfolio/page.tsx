import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Our Portfolio | TML Agency - Digital Marketing Agency",
  description:
    "Explore the work we've done for brands across web design, branding, UI/UX, video production, and digital marketing. Real projects, real results.",
  openGraph: {
    title: "Our Portfolio | TML Agency",
    description:
      "Explore the work we've done for brands across web design, branding, UI/UX, video production, and digital marketing.",
    url: "https://townmedialabs.ca/portfolio",
    type: "website",
    images: [{ url: "https://townmedialabs.ca/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Our Portfolio | TML Agency",
    description: "Real projects, real results. See what we've built for brands worldwide.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://townmedialabs.ca/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
