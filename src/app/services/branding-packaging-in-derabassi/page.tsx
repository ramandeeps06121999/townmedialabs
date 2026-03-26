import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Derabassi | TML Agency",
  description: "TML offers expert branding and packaging services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging derabassi", "branding and packaging agency derabassi", "branding and packaging company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-derabassi",
  },
  openGraph: {
    title: "Best Branding & Packaging Agency in Derabassi | TML Agency",
    description: "TML offers expert branding and packaging services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Derabassi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding & Packaging Agency in Derabassi | TML Agency",
    description: "TML offers expert branding and packaging services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
