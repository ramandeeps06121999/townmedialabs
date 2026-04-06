import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Branding Agency in Cardiff",
  description: "TML offers expert Branding services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding cardiff", "branding agency cardiff", "branding company cardiff"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-cardiff",
  },
  openGraph: {
    title: "Branding Agency in Cardiff",
    description: "TML offers expert Branding services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-cardiff",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Cardiff" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Cardiff",
    description: "TML offers expert Branding services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCardiffPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
