import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Branding Agency in South Delhi | TML Agency",
  description: "TML offers expert branding services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding south delhi", "branding agency south delhi", "branding company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-south-delhi",
  },
  openGraph: {
    title: "Branding Agency in South Delhi | TML Agency",
    description: "TML offers expert branding services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in South Delhi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in South Delhi | TML Agency",
    description: "TML offers expert branding services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
