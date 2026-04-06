import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Branding Agency in Cairns",
  description: "TML offers expert Branding services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding cairns", "branding agency cairns", "branding company cairns"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-cairns",
  },
  openGraph: {
    title: "Branding Agency in Cairns",
    description: "TML offers expert Branding services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-cairns",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Cairns" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Cairns",
    description: "TML offers expert Branding services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCairnsPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
