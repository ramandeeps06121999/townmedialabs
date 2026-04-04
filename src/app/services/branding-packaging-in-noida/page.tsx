import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Noida | TML Agency",
  description: "TML offers expert branding and packaging services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging noida", "branding and packaging agency noida", "branding and packaging company noida"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-noida",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Noida | TML Agency",
    description: "TML offers expert branding and packaging services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-noida",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Noida | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Noida | TML Agency",
    description: "TML offers expert branding and packaging services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
