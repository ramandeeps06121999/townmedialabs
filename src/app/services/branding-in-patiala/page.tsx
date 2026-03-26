import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Patiala | TML Agency",
  description: "TML offers expert branding services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding patiala", "branding agency patiala", "branding company patiala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-patiala",
  },
  openGraph: {
    title: "Best Branding Agency in Patiala | TML Agency",
    description: "TML offers expert branding services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-patiala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Patiala | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Patiala | TML Agency",
    description: "TML offers expert branding services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
