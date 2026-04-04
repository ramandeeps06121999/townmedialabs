import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Dehradun | TML Agency",
  description: "TML offers expert branding and packaging services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging dehradun", "branding and packaging agency dehradun", "branding and packaging company dehradun"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-packaging-in-dehradun",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Dehradun | TML Agency",
    description: "TML offers expert branding and packaging services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-packaging-in-dehradun",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Dehradun | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Dehradun | TML Agency",
    description: "TML offers expert branding and packaging services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
