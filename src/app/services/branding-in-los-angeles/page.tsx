import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Los Angeles | TML Agency",
  description: "TML offers expert branding services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding los angeles", "branding agency los angeles", "branding company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-los-angeles",
  },
  openGraph: {
    title: "Best Branding Agency in Los Angeles | TML Agency",
    description: "TML offers expert branding services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Los Angeles | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Los Angeles | TML Agency",
    description: "TML offers expert branding services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
