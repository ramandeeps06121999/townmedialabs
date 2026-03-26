import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Milwaukee | TML Agency",
  description: "TML offers expert branding services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding milwaukee", "branding agency milwaukee", "branding company milwaukee"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-milwaukee",
  },
  openGraph: {
    title: "Best Branding Agency in Milwaukee | TML Agency",
    description: "TML offers expert branding services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-milwaukee",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Milwaukee | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Milwaukee | TML Agency",
    description: "TML offers expert branding services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
