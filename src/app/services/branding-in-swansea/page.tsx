import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Swansea | TML Agency",
  description: "TML offers expert branding services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding swansea", "branding agency swansea", "branding company swansea"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-swansea",
  },
  openGraph: {
    title: "Best Branding Agency in Swansea | TML Agency",
    description: "TML offers expert branding services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-swansea",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Swansea | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Swansea | TML Agency",
    description: "TML offers expert branding services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
