import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sunderland | TML Agency",
  description: "TML offers expert branding services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding sunderland", "branding agency sunderland", "branding company sunderland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-sunderland",
  },
  openGraph: {
    title: "Best Branding Agency in Sunderland | TML Agency",
    description: "TML offers expert branding services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-sunderland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Sunderland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Sunderland | TML Agency",
    description: "TML offers expert branding services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
