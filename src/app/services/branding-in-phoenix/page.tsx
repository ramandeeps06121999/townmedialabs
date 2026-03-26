import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Phoenix | TML Agency",
  description: "TML offers expert branding services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding phoenix", "branding agency phoenix", "branding company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-phoenix",
  },
  openGraph: {
    title: "Best Branding Agency in Phoenix | TML Agency",
    description: "TML offers expert branding services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Phoenix | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Phoenix | TML Agency",
    description: "TML offers expert branding services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
