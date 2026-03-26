import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Our Portfolio | Town Media Labs - Digital Marketing Agency",
  description:
    "Explore the work we've done for brands across web design, branding, UI/UX, video production, and digital marketing. Real projects, real results.",
  openGraph: {
    title: "Our Portfolio | Town Media Labs",
    description:
      "Explore the work we've done for brands across web design, branding, UI/UX, video production, and digital marketing.",
    url: "https://townmedialabs.com/portfolio",
    type: "website",
    images: [{ url: "https://townmedialabs.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Our Portfolio | Town Media Labs",
    description: "Real projects, real results. See what we've built for brands worldwide.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://townmedialabs.com/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
